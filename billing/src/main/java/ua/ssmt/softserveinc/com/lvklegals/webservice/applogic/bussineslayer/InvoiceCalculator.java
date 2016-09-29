package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.InvoiceTransfer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query.GetAllParentInputQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCalcInvoiceInPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCalcRainsInvoiceInPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.LockServiceToInvoiceQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.UnLockServiceToInvoiceQuery;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 31.03.2015.
 */
public class InvoiceCalculator {
    private int packageSize = 1000;
    protected GetSubServiceByServiceIDPQuery getSubServiceByServiceIDPQuery;
    protected GetTariffBySubServiceAndCategoryIDAQuery getTariffBySubServiceAndCategoryIDAQuery;
    protected GetDepartmentInputByInputPQuery getDepartmentInputByInputPQuery;
    private List<CalcInvoice> calcInvoicesResult = new ArrayList<>();

    public InvoiceCalculator() {}

    public void startInvoice() {
        DataSource dataSource = DataSource.getInstance();
        Connection connection = dataSource.getConnection();
        initConnection(connection);
        this.lockBD(connection);
        clearInvoice(connection);
        List<Input> inputs = this.getAllParentInputs(connection);
        initPreparedStatement(connection);
        for (Input i:inputs) {

            calculateInput(connection, i);
            commitTransaction(connection);
            //saveResultToDataBase(connection, calcInvoicesResult);
            commitTransaction(connection);
            //break;
        }
        this.unlockDB(connection);

    }

    private void unlockDB(Connection connection) {
        new UnLockServiceToInvoiceQuery().execute(connection,null);
        try {
            connection.commit();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    private void lockBD(Connection connection) {
        new LockServiceToInvoiceQuery().execute(connection,null);
        try {
            connection.commit();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }


    private void initPreparedStatement(Connection connection) {
        getSubServiceByServiceIDPQuery = new GetSubServiceByServiceIDPQuery(connection);
        getTariffBySubServiceAndCategoryIDAQuery = new GetTariffBySubServiceAndCategoryIDAQuery(connection);
        getDepartmentInputByInputPQuery = new GetDepartmentInputByInputPQuery(connection);
    }

  /*  private void saveResultToDataBase(Connection connection,List<CalcInvoice> calcInvoicesResult) {
        PutCalcResultInvoicePQuery putCalcResultInvoicePQuery = new PutCalcResultInvoicePQuery(connection);
        for (CalcInvoice c:calcInvoicesResult){
            putCalcResultInvoicePQuery.addToBatch(c);
        }
        putCalcResultInvoicePQuery.execute();
        putCalcResultInvoicePQuery.close();
        calcInvoicesResult.clear();
    }*/

    private void calculateInput(Connection connection, Input input)   {
        DepartmentInput di = getDepartmentOnInput(connection,input);
        boolean isHasDepartment = !(di == null);
        if (isHasDepartment == true){
            InputFactor factor = checkInputForCounter(connection, di);
            boolean isHasCounter = !(factor == null);
            if (isHasCounter == true){
                calculationByCounterInvoice(connection,di,factor);
            }else{
                calculationByNormaInvoice(connection,di);
            }
            calculationAddConsumingVolumeInvoice(connection,di);
            calculationDepartmentRainsInvoice(connection,di);
            //calculationStockWithOutPermission(connection,di);
        }
        List<Input> children =getAllChildrenInput(connection,input);
        for (Input childInput:children)
            this.calculateInput(connection, childInput);

    }

    private void calculationStockWithOutPermission(Connection connection, DepartmentInput di) {
        Double vol = 0.0;
        List<StockWithoutPermission> list = this.getDocumentsStockWithoutPermission(connection);
        for (StockWithoutPermission stockWithoutPermission:list){
            List<CalcInvoice> invoices = getCalcInvoiceByContraAgent(connection,stockWithoutPermission.getContraAgent(),stockWithoutPermission.getPeriodCalculation());
            for (CalcInvoice invoice:invoices) {
                Double allVolume = getVolumeFromInvoices(invoices);
                Tariff tariff = getTariffBySubService(invoice.getSubService(),invoice.getDepartmentInput());
                vol = vol+(allVolume*tariff.getTariff());
            }
            vol = vol*4;
            vol = vol*0.8;
            insertResult(connection,vol);
        }
    }

    private void calculationDepartmentRainsInvoice(Connection connection,DepartmentInput departmentInput){
        Department department = departmentInput.getDepartment();
        List<Rains> rainses = getAllRainses(connection, department);
        if (rainses.isEmpty()) return;
        this.fillCoefficients(connection, rainses);
        //Qм =(10 * Н (F1*0,7+F2*0,7+F3*0,1)/12)/10000
        Double q = 0.0;
        Double h = getCurrentRainsLevel(connection);  //RainsLevel
        Double allArea = 0.0;
        for (Rains rains:rainses){
            double koef = rains.getAreaType().getCoefficient();  //regRains
            allArea += rains.getArea()*koef; // *coef
        }
        q = (10*h*(allArea)/12)/10000;
        Double tariff = this.getTariff(departmentInput);
        fillCalcRains(connection,department,q,tariff);
    }

    private void calculationAddConsumingVolumeInvoice(Connection connection,DepartmentInput departmentInput){
       /* AddingByConsumingVolume doc = getAddingByConsuminVolume(connection,departmentInput);
        if (doc == null) return;
        Input input = this.getFullInput(connection,departmentInput);
        InputProperty property = new Fillers().getPropertyByID(connection, departmentInput.getInputProperty().getId());
        departmentInput.setInputProperty(property);
        List<SubService> subServices = this.getSubServicesByService(connection,input.getService());
        for (SubService subService:subServices) {
            Tariff tariff = this.getTariffBySubService(subService,departmentInput);
            if (tariff == null) continue;
            Double sum =  doc.getVolume()*tariff.getTariff();
            InvoiceTransfer transfer = new InvoiceTransfer();
            transfer.setConnection(connection);
            transfer.setSubService(subService);
            transfer.setTariff(tariff);
            transfer.setDepartmentInput(departmentInput);
            transfer.setSum(sum);
            transfer.setAddingByConsumingVolume(doc.getVolume());
            fillCalcResult(transfer);
        }*/

    }

    private void calculationByCounterInvoice(Connection connection,DepartmentInput departmentInput,InputFactor factor){
        /*Input input = departmentInput.getInput();
        Service service = input.getService();
        List<SubService> subServices = this.getSubServicesByService(connection,service);
        for (SubService subService:subServices){
            Tariff tariff = this.getTariffBySubService(subService,departmentInput);
            if (tariff == null) continue;
            if (checkTariffDataInAction(connection,tariff) == false) tariff.setTariff(0.0);
            Double res = (factor.getEndFactor()-factor.getFactorOnBeginMonth())*tariff.getTariff();
            InputProperty property = departmentInput.getInputProperty();

            departmentInput.setInputProperty(property);
            boolean isEnabledSubService = this.checkEnabled(departmentInput,subService);
            if (isEnabledSubService == false) continue;
            if (property.getKoefWatterOut() !=0) {
                if (isWatterSupply(subService) == false)
                    res *= property.getKoefWatterOut();
            }
            if (property.getKoefWatterSupply() !=0) {
                if (isWatterSupply(subService) == true)
                    res *= property.getKoefWatterSupply();
            }
            departmentInput.setInputProperty(property);
            InvoiceTransfer transfer = new InvoiceTransfer();
            transfer.setTariff(tariff);
            transfer.setFactor(factor);
            transfer.setDepartmentInput(departmentInput);
            transfer.setSum(res);
            transfer.setConnection(connection);
            transfer.setSubService(subService);
            this.fillCalcResult(transfer);
        }*/

    }

    private void calculationByNormaInvoice(Connection connection,DepartmentInput departmentInput){
        /*Input input = departmentInput.getInput();
        InputProperty property = departmentInput.getInputProperty();
        departmentInput.setInputProperty(property);
        List<SubService> subServices = this.getSubServicesByService(connection,input.getService());
        for (SubService subService:subServices){
            Tariff tariff = this.getTariffBySubService(subService,departmentInput);
            if (tariff == null) continue;
            Double sum = (property.getNorma()*tariff.getTariff());
            boolean isEnabled = this.checkEnabled(departmentInput,subService);
            if (isEnabled == false) continue;
            if (property.getKoefWatterOut() !=0) {
                if (subService.getId() == 1 || subService.getId() == 5)
                    sum *= property.getKoefWatterSupply();
                if (subService.getId() == 5 || subService.getId() == 6)
                    sum *= property.getKoefWatterOut();
            }
            InvoiceTransfer transfer = new InvoiceTransfer();
            transfer.setConnection(connection);
            transfer.setSubService(subService);
            transfer.setTariff(tariff);
            transfer.setSum(sum);
            transfer.setDepartmentInput(departmentInput);
            fillCalcResult(transfer);
        }*/

    }

    public void clearInvoice(Connection connection)   {
        CalcInvoice calcInvoice = new CalcInvoice();
        calcInvoice.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcInvoiceInPeriodQuery().execute(connection,calcInvoice);
        CalcInvoiceRainsInvoice calcInvoiceRainsInvoice = new CalcInvoiceRainsInvoice();
        calcInvoiceRainsInvoice.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod());
        new DeleteCalcRainsInvoiceInPeriodQuery().execute(connection,calcInvoiceRainsInvoice);
        commitTransaction(connection);
    }

    public InputFactor checkInputForCounter(Connection connection,DepartmentInput departmentInput)   {
        RegisterOfCounter registerOfCounter = this.getRegisterOfCounter(connection,departmentInput);
        if (registerOfCounter == null) return null;
        Counter counter = this.getCounterFromRegisterCounter(registerOfCounter);
        UnregisterOfCounter unregisterOfCounter = this.getUnregisterOfCounter(connection,counter);
        if (unregisterOfCounter != null && registerOfCounter.getOnDate().getTime()<unregisterOfCounter.getDateAct().getTime()) return null;
        InputFactor factor = this.getLastInputFactorByCounter(connection,counter);
        return factor;
    }

    public InputFactor getLastInputFactorByCounter(Connection connection,Counter counter)   {
        List<InputFactor> list =  new GetLastFactorByCounterQuery(counter).execute(connection);
        if (list.isEmpty()) return null;
        else return list.get(0);
    }

    public UnregisterOfCounter getUnregisterOfCounter(Connection connection,Counter counter)   {
        UnregisterOfCounterCondition condition = new UnregisterOfCounterCondition();
        condition.setCounterID(counter.getId());
        List<UnregisterOfCounter> list = new SearchUnregisterCounterQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else
            return list.get(0);
    }

    public Counter getCounterFromRegisterCounter(RegisterOfCounter registerOfCounter) {
        Counter res = new Counter(registerOfCounter.getCounter().getId());
        return res;
    }

    public RegisterOfCounter getRegisterOfCounter(Connection connection,DepartmentInput departmentInput)   {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setDepartmentInputID(departmentInput.getId());
        List<RegisterOfCounter> list = new SearchRegisterOfCounterQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        RegisterOfCounter registerOfCounter = list.get(0);
        return registerOfCounter;
    }

    public DepartmentInput getDepartmentOnInput(Connection connection,Input input)   {
        this.getDepartmentInputByInputPQuery.setCondition(input.getId());
        List<DepartmentInput> di =  this.getDepartmentInputByInputPQuery.execute();
        if (di.isEmpty() == true) return null;
        DepartmentInput res = di.get(0);
        res.getDepartment().getProperty().setCategoryOfTariff(this.getCategoryOfTariff(connection,res.getDepartment().getId()));
        return res;
    }

    private CategoryOfTariff getCategoryOfTariff(Connection connection,Long id)   {
        return new GetTarrifCategoryByDepartmentIDPQquery(connection,id).execute().get(0);
    }

    public List<Input> getAllParentInputs(Connection connection)   {
        List<Input> list = new GetAllParentInputQuery(null).execute(connection);
        commitTransaction(connection);
        return list;
    }

    protected Input getFullInput(Connection connection,DepartmentInput di)   {
        Input input = di.getInput();
        InputCondition condition = new InputCondition();
        condition.setId(input.getId());
        List<Input> list = new SearchInputQuery(condition).execute(connection);
        input = list.get(0);
        input.setService(new Fillers().getServiceByID(connection,input.getService().getId()));
        return input;
    }

    protected boolean checkEnabled(DepartmentInput departmentInput, SubService subService) {
        boolean isWatterSupply = this.isWatterSupply(subService);

        if (isWatterSupply == true && departmentInput.getSubServices().getWatterSupply() == true) return true;
        if (isWatterSupply == true && departmentInput.getSubServices().getWatterSupply() == false) return false;

        if (isWatterSupply == false && departmentInput.getSubServices().getWatterOut() == true) return true;
        if (isWatterSupply == false && departmentInput.getSubServices().getWatterOut() == false) return false;

        throw new RuntimeException("check enabled error");
    }

    protected boolean isWatterSupply(SubService subService){
        if (subService.getId() == 2 || subService.getId() == 4) return false;
        if (subService.getId() == 1 || subService.getId() == 3) return true;
        throw new RuntimeException("Unknow Subservice");
    }

    protected boolean checkTariffDataInAction(Connection connection,Tariff tariff)   {
        Period p =  new GetCurrentPeriodQuery(null).execute(connection).get(0);
        if (tariff.getDateInAction().getTime()>getEndPeriod(p.getCurrentPeriod()).getTime()) return false;
        else return true;
    }

    private Date getEndPeriod(Date currentPeriod) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentPeriod);
        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        calendar.add(Calendar.DATE, -1);
        Date lastDayOfMonth = calendar.getTime();
        return lastDayOfMonth;
    }

    private Tariff getTariffBySubService(SubService subService,DepartmentInput di)   {
        TariffCondition condition = new TariffCondition();
        condition.setSubServiceID(subService.getId());
        condition.setCategoryID(di.getDepartment().getProperty().getCategoryOfTariff().getId());
        this.getTariffBySubServiceAndCategoryIDAQuery.setCondition(condition);
        List<Tariff> list = this.getTariffBySubServiceAndCategoryIDAQuery.execute();
        if (list.isEmpty()) return null;
        else return list.get(0);
    }

    private List<SubService> getSubServicesByService(Connection connection,Service service) {
        this.getSubServiceByServiceIDPQuery.setCondition(service.getId());
        List<SubService> lists = null;
        try {
            lists = getSubServiceByServiceIDPQuery.execute();
        } catch (StorageException e) {
            throw new RuntimeException(e);
        }
        return lists;
    }

    private void fillCalcResult(InvoiceTransfer transfer)   {
       /* CalcInvoice calcInvoice = new CalcInvoice();
        calcInvoice.setTariff(transfer.getTariff().getTariff());
        calcInvoice.setDepartmentInput(transfer.getDepartmentInput());
        calcInvoice.setContraAgent(transfer.getDepartmentInput().getDepartment().getContraAgent());
        calcInvoice.setSum(transfer.getSum());
        calcInvoice.setVolumeOnNorma(transfer.getDepartmentInput().getInputProperty().getNorma().intValue());
        calcInvoice.setSubService(transfer.getSubService());
        calcInvoice.setCoefTarrifWatterOut(transfer.getDepartmentInput().getInputProperty().getKoefWatterOut());
        calcInvoice.setCoefWatterSupply(transfer.getDepartmentInput().getInputProperty().getKoefWatterOut());
        this.calcInvoicesResult.add(calcInvoice);*/
    }


    protected void closeQueries() {
        this.getSubServiceByServiceIDPQuery.close();
        this.getTariffBySubServiceAndCategoryIDAQuery.close();
        this.getDepartmentInputByInputPQuery.close();
    }

    private List<Input> getAllChildrenInput(Connection connection,Input input)   {
        InputCondition condition = new InputCondition();
        condition.setParentID(input.getId());
        List<Input> res = new SearchInputQuery(condition).execute(connection);
        return res;
    }

    private AddingByConsumingVolume getAddingByConsuminVolume(Connection connection, DepartmentInput departmentInput)   {
        AddingByConsumingVolumeCondition condition = new AddingByConsumingVolumeCondition();
        List<AddingByConsumingVolume> list = new SearchAddingByConsumingVolumeQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        return list.get(0);
    }

    private Double getTariff(DepartmentInput departmentInput)   {
        SubService subService = new SubService();
        subService.setId(4L);
        Tariff t = this.getTariffBySubService(subService,departmentInput);
        if (t == null) return 0.0;
        else return t.getTariff();

    }

    private void fillCoefficients(Connection connection, List<Rains> rainses)   {
        for (Rains r:rainses){
            r.setAreaType(this.getAreaType(connection,r));
        }
    }

    private AreaType getAreaType(Connection connection, Rains r)   {
        AreaTypeCondition condition = new AreaTypeCondition();
        condition.setId(r.getAreaType().getId());
        List<AreaType> areaTypes = new SearchCoeficientAreaType(condition).execute(connection);
        if (areaTypes.isEmpty()){
            AreaType areaType = new Fillers().getAreaTypeByID(connection,r.getAreaType().getId());
            areaType.setCoefficient(0.0);
            return areaType;
        }else{
            AreaType areaType = new Fillers().getAreaTypeByID(connection,r.getAreaType().getId());
            areaType.setCoefficient(areaTypes.get(0).getCoefficient());
            return areaType;
        }
    }

    private Double getCurrentRainsLevel(Connection connection)   {
        List<Double> list = new SearchRainsLevelQuery(null).execute(connection);
        if (list.isEmpty()) return 0.0;
        else return list.get(0);
    }

    private void fillCalcRains(Connection connection, Department department, Double q,Double tarif)   {
        CalcInvoiceRainsInvoice calc = new CalcInvoiceRainsInvoice();
        calc.setSum(q*tarif);
        calc.setTariff(tarif);
        calc.setVolume(q);
        calc.setPeriod(new ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery(null).execute(connection).get(0));
        calc.setContraAgent(department.getContraAgent());
        calc.setDepartment(department);
        //new InsertCalcInvoiceRainInvoice().execute(connection,calc);

    }
    private List<Rains> getAllRainses(Connection connection, Department department)   {
        List<Rains> res = new ArrayList<>();
        List<AreaType> allAreaTypes = getAllAreaTypes(connection);
        for (AreaType areaType:allAreaTypes){
            RainsCondition condition = new RainsCondition();
            condition.setDepartmentID(department.getId());
            condition.setAreaTypeID(areaType.getId());
            List<Rains> list = new SearchRainsQuery(condition).execute(connection);
            if (list.isEmpty() == false)
                res.add(list.get(0));
        }
        return res;
    }

    private List<AreaType> getAllAreaTypes(Connection connection)   {
        List<AreaType> list = new SearchAreaTypeQuery(new AreaTypeCondition()).execute(connection);
        return list;
    }


    private void insertResult(Connection connection, Double vol) {
        CalcInvoiceStockWithoutPermission doc = new CalcInvoiceStockWithoutPermission();
        doc.setVal(vol);
    }

    private Double getVolumeFromInvoices(List<CalcInvoice> invoices) {
        double res = 0;
        for (CalcInvoice invoice:invoices){
            res = res+invoice.getVolumeTotal();
        }
        return res;
    }

    private List<CalcInvoice> getCalcInvoiceByContraAgent(Connection connection, ContraAgent contraAgent, Date periodCalculation)   {
        CalcInvoiceCondition condition = new CalcInvoiceCondition();
        condition.setPeriod(periodCalculation);
        condition.setContraAgentID(contraAgent.getId());
        return new SearchInvoiceQuery(condition).execute(connection);
    }

    private List<StockWithoutPermission> getDocumentsStockWithoutPermission(Connection connection)   {
        StockWithoutPermissionCondition condition = new StockWithoutPermissionCondition();
        condition.setPeriod(new ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery(null).execute(connection).get(0));
        return new SearchStockWithoutPermissionQuery(condition).execute(connection);
    }

    private void initConnection(Connection connection) {
        try {
            connection.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);
            connection.setAutoCommit(false);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    private void commitTransaction(Connection connection){
        try {
            connection.commit();
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException e1) {
                throw new RuntimeException(e1);
            }
            throw new RuntimeException(e);
        }
    }

    private void rollbackTransaction(Connection connection){
        try {
            connection.rollback();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }



}



