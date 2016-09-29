package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoiceDetail;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.InvoiceTransfer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.enums.InputStatuses;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.enums.InvoiceEnum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DoubleUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.calcinvoiceformpreviosperiod.CalcInvoiceFromPreviousPeriodCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.rains.CalcInvoiceRainsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateAllSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoAllContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;

import java.sql.Connection;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by vostap on 06.05.2015.
 */
public class TypeCalculations {

    private static final long CODE_SERVICE_WATTER_OUT = 1;
    private InvoiceUtils invoiceUtils;
    private Transformer transformer;
    private ResultCollector resultCollector;

    public List<CalcInvoice> caclulationCounterUnregisteredOnBeginPeriodAndHaveManyUnregisteredAndRegisteredDocuments(DepartmentInputInvoice dii,boolean calcOnCounter) {
        //return new ArrayList<>();
        List<CalcInvoice> res = new ArrayList<>();
        List<CalcInvoiceDetail> details = new ArrayList<>();
        List<UnregisterOfCounter> unregisterOfCounter = this.invoiceUtils.getUnregisterOfCounterDocInPeriod(dii);
        List<RegisterOfCounter> registerOfCounters = this.invoiceUtils.getRegisterOfCounterDocInPeriod(dii);
        Set<CounterDocuments> documentsSet = new TreeSet<>();
        List<CalcInvoiceDetail> detailses = new ArrayList<>();
        for (UnregisterOfCounter d :unregisterOfCounter){
            documentsSet.add(d);
        }
        for (RegisterOfCounter d: registerOfCounters){
            documentsSet.add(d);
        }
        Date dateStartInterval = DateUtils.getFirstDayOfMonth(this.invoiceUtils.getPeriod());
        CounterDocuments lastDoc = null;
        String typeCalculation;
        boolean isFirst = true;
        for (CounterDocuments d:documentsSet){
            Date dateEndInterval = d.getDocumentDate();
            typeCalculation = getTypeCalculation(calcOnCounter);
            System.out.println("di= "+dii.getDepartmentInputID()+" found interval = from "+DateUtils.getDateAsString(dateStartInterval)+ " to "+DateUtils.getDateAsString(dateEndInterval)+" "+typeCalculation+" d = "+d.getClass().getSimpleName());
            details.addAll(this.fillDetails(dii,dateStartInterval,dateEndInterval, calcOnCounter,lastDoc,isFirst));
            isFirst = false;
            //CalcInvoice calcInvoice = fillCalcInvoice(dii,detailses);
            // res.add(calcInvoice);
            dateStartInterval = dateEndInterval;
            calcOnCounter = !calcOnCounter;
            lastDoc = d;
        }

        Date lastDayInPeriod = DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod());
        details.addAll(this.fillDetails(dii,dateStartInterval,lastDayInPeriod, calcOnCounter,lastDoc, isFirst));
        res = _generateMainListFromDetails(dii,details);
        return res;
    }


    /*public List<CalcInvoice> caclulationCounterUnregisteredOnBeginPeriodAndHaveManyUnregisteredAndRegisteredDocuments(DepartmentInputInvoice dii,boolean calcOnCounter) {
        //return new ArrayList<>();
        List<CalcInvoice> res = new ArrayList<>();
        List<UnregisterOfCounter> unregisterOfCounter = this.invoiceUtils.getUnregisterOfCounterDocInPeriod(dii);
        List<RegisterOfCounter> registerOfCounters = this.invoiceUtils.getRegisterOfCounterDocInPeriod(dii);
        Set<CounterDocuments> documentsSet = new TreeSet<>();
        List<CalcInvoiceDetail> detailses = new ArrayList<>();
        for (UnregisterOfCounter d :unregisterOfCounter){
            documentsSet.add(d);
        }
        for (RegisterOfCounter d: registerOfCounters){
            documentsSet.add(d);
        }
        Date dateStartInterval = DateUtils.getFirstDayOfMonth(this.invoiceUtils.getPeriod());
        CounterDocuments lastDoc = null;
        String typeCalculation;
        for (CounterDocuments d:documentsSet){
            Date dateEndInterval = d.getDocumentDate();
            typeCalculation = getTypeCalculation(calcOnCounter);
            System.out.println("di= "+dii.getDepartmentInputID()+" found interval = from "+DateUtils.getDateAsString(dateStartInterval)+ " to "+DateUtils.getDateAsString(dateEndInterval)+" "+typeCalculation+" d = "+d.getClass().getSimpleName());
            res.addAll(this.fillDetails(dii,dateStartInterval,dateEndInterval, calcOnCounter,lastDoc));
            //CalcInvoice calcInvoice = fillCalcInvoice(dii,detailses);
            // res.add(calcInvoice);
            dateStartInterval = dateEndInterval;
            calcOnCounter = !calcOnCounter;
            lastDoc = d;
        }

        Date lastDayInPeriod = DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod());
        res.addAll(this.fillDetails(dii,dateStartInterval,lastDayInPeriod, calcOnCounter,lastDoc));
        //  CalcInvoice calcInvoice = fillCalcInvoice(dii,detailses);
        //res.add(calcInvoice);
        res = adoptedList(res);
        return res;

    }*/
    public TypeCalculations(InvoiceUtils invoiceUtils) {
        this.invoiceUtils = invoiceUtils;
        this.transformer = new Transformer();
        resultCollector = new ResultCollector();
    }
    public List<CalcInvoiceVolumeLKP> calculationVolumeLKP() {List<CalcInvoiceVolumeLKP> res = new ArrayList<>();
        List<VolumeConsumption> docs = this.invoiceUtils.getAllDocumentVolumeLKPByPeriod();

        for (VolumeConsumption doc:docs) {
            Double sum;
            //DepartmentInput departmentInput = invoiceUtils.getDepartmentInputByInputAndDepartment(doc.getInput(), doc.getDepartment());
            DepartmentInput departmentInput = doc.getDepartmentInput();
            Service service = departmentInput.getInput().getService();
            List<SubService> subServices = invoiceUtils.getSubServicesByService(service);
            for (SubService subService : subServices) {
                boolean isWatterSupply = this.invoiceUtils.isWatterSupply(subService);
                DepartmentInputInvoice departmentInputInvoice = new DepartmentInputInvoice();
                departmentInputInvoice.setTariffCategory(departmentInput.getDepartment().getProperty().getCategoryOfTariff().getId());
                Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInputInvoice);
                Double _tariff = 0.0;
                if (tariff != null) _tariff = tariff.getTariff();

                if (isWatterSupply == true)
                    sum = doc.getVolumeVp() * _tariff;
                else
                    sum = doc.getVolumeVv() * _tariff;
                CalcInvoiceVolumeLKP c = new CalcInvoiceVolumeLKP();
                c.setDepartmentInput(departmentInput);
                c.setSumWithPdv(sum * invoiceUtils.getPdv());
                c.setSum(sum);
                c.setPdv((sum * invoiceUtils.getPdv())-sum);
                c.setContraAgent(doc.getContraAgent());
                c.setAgreement(doc.getAgreement());
                c.setDepartmentAgreement(invoiceUtils.getDepartmentAgreement(departmentInput.getDepartment()));
                if (tariff != null)
                    c.setCategoryOfTariff(tariff.getCategory());
                else
                    c.setCategoryOfTariff(new CategoryOfTariff(0L));
                if (isWatterSupply == true)
                    c.setVolume(doc.getVolumeVp());
                else
                    c.setVolume(doc.getVolumeVv());
                c.setTarrif(_tariff);
                c.setSubService(subService);
                res.add(c);
            }
        }
        return res;

    }
    public List<CalcInvoiceStockWithoutPermission> calculationStockWithOutPermission() {
        List<CalcInvoiceStockWithoutPermission> res = new ArrayList<>();
        List<StockWithoutPermission> stockWithoutPermissions = this.invoiceUtils.getDocumentsStockWithoutPermission();

        List<CalcInvoice> allInvoicesFromPrevoiusPeriod = this.getInvoiceFromPreviousPeriod(this.getPreviousPeriods(stockWithoutPermissions));

        for (StockWithoutPermission s:stockWithoutPermissions) {
            List<CalcInvoice> invoicesFromPrevoiusPeriod = getAllInvoiceFromPreviousPeriod(allInvoicesFromPrevoiusPeriod,s);
            for (CalcInvoice c: invoicesFromPrevoiusPeriod){
                SubService subService = c.getSubService();
                Double sumWatterOutConsume = 0.0;
                Double sum08 = 0.0;
                Double volume = 0.0;
                if (invoiceUtils.isWatterSupply(subService) == true) continue;
                volume = c.getVolumeTotal();
                Koef koef = this.invoiceUtils.getKoef();
                Department department = c.getDepartmentInput().getDepartment();
                Tariff tariff = invoiceUtils.getTariff(
                        department.getProperty().getCategoryOfTariff().getId(),
                        c.getSubService().getId(),
                        invoiceUtils.getPeriod()
                );
                if (tariff == null){
                    tariff = new Tariff();
                    tariff.setTariff(0.0);
                }
                sumWatterOutConsume = volume*tariff.getTariff()*koef.getKofficient()*1.2;
                sum08=sumWatterOutConsume*0.8;

                CalcInvoiceStockWithoutPermission calcInvoiceStockWithoutPermission = new CalcInvoiceStockWithoutPermission();
                calcInvoiceStockWithoutPermission.setContraAgent(s.getContraAgent());

                calcInvoiceStockWithoutPermission.setDepartmentInput(c.getDepartmentInput());
                calcInvoiceStockWithoutPermission.setPeriod(invoiceUtils.getPeriod());
                calcInvoiceStockWithoutPermission.setPeriodCalculation(s.getPeriodCalculation());
                calcInvoiceStockWithoutPermission.setSubService(c.getSubService());
                calcInvoiceStockWithoutPermission.setVal(volume);
                calcInvoiceStockWithoutPermission.setSum(sumWatterOutConsume);
                calcInvoiceStockWithoutPermission.setSum08(sum08);
                calcInvoiceStockWithoutPermission.setKoefficient(koef.getKofficient());


                calcInvoiceStockWithoutPermission.setDepartment(department);
                calcInvoiceStockWithoutPermission.getDepartment().getProperty().setCategoryOfTariff(department.getProperty().getCategoryOfTariff());

                calcInvoiceStockWithoutPermission.setTariff(tariff.getTariff());
                calcInvoiceStockWithoutPermission.setAgreement(new Agreement());
                calcInvoiceStockWithoutPermission.getAgreement().setId(c.getContrAgentAgreementID());
                res.add(calcInvoiceStockWithoutPermission);
            }
        }
        return res;
    }


    public void recalculateInput(List<CalcInvoice> calcInvoicesResult){
        for (CalcInvoice c:calcInvoicesResult){
            //recalculateTotalVolume(c);
            if (c.getDepartmentInput().getInput().getId() == null || c.getDepartmentInput().getInput().getId() == 0) {
                recalculateTotalVolume(c);
                continue;
            }
            long parentId  =  c.getDepartmentInput().getInput().getId();
            List<Input> inputs = this.invoiceUtils.getInputsByParentID(parentId);
            if (inputs.isEmpty()) continue;
            for (Input input:inputs){
                long id = input.getId();
                for (CalcInvoice cc:calcInvoicesResult){
                    if (cc.getDepartmentInput().getInput().getId() == null) continue;

                    if (cc.getDepartmentInput().getInput().getId() == id){
                       this.recalculateParentVolumeTotal(c,cc);
                        break;
                    }
                }
            }


        }

    }

    public void recalculateInputNew(List<CalcInvoice> calcInvoicesResult){
        Set<Input> parents = _getParentsInputsFromInvocie(calcInvoicesResult);
        for (Input input:parents) {
            _recalculateInput(input, calcInvoicesResult);
        }

    }

    private void _recalculateInput(Input input, List<CalcInvoice> calcInvoicesResult) {
        List<CalcInvoice> parentInvoices = this._getInoivcesByInput(input,calcInvoicesResult);
        List<Input> allInput = getAllInputFromCalcInvoice(calcInvoicesResult);
        Set<Input> childs = _getChilds(input, allInput ,calcInvoicesResult);
        for (Input i:childs){
            _recalculateInput(i,calcInvoicesResult);

        }
        List<CalcInvoice> childInvoices = this._getInoivcesByInput(input,calcInvoicesResult);
        for (CalcInvoice parentInvoice:parentInvoices){
            for (CalcInvoice childInvoice:childInvoices){
                if (parentInvoice.getSubService().getId().equals(childInvoice.getSubService().getId())){
                    this.recalculateParentVolumeTotal(parentInvoice,childInvoice);
                }
            }
        }

    }

    private List<Input> getAllInputFromCalcInvoice(List<CalcInvoice> calcInvoicesResult) {
        List<Input> res = new ArrayList<>();
        for (CalcInvoice calcInvoice:calcInvoicesResult){
            res.add(calcInvoice.getDepartmentInput().getInput());
        }
        return res;
    }

    private List<CalcInvoice> _getInoivcesByInput(Input input, List<CalcInvoice> calcInvoicesResult) {
        List<CalcInvoice> res = calcInvoicesResult.stream().filter(calcInvoice -> calcInvoice.getDepartmentInput().getInput().getId().equals(input.getId())).collect(Collectors.toList());
        return res;
    }

    private Set<Input> _getChilds(Input input,List<Input> inputs, List<CalcInvoice> calcInvoicesResult) {
        Set<Input> res = new HashSet<>();
        //Set<Input> inputs = _getChilds(input ,calcInvoicesResult);
        for (Input i:inputs){
            if (i.getParent().getId().equals(input.getId())){
                res.add(i);
            }
        }
        return res;
    }

    private Set<Input> _getParentsInputsFromInvocie(List<CalcInvoice> calcInvoicesResult) {
        Set<Input> res = new HashSet<>();
        for (CalcInvoice calcInvoice:calcInvoicesResult){
            Input input = calcInvoice.getDepartmentInput().getInput();
            if ((input.getParent().getId() == null || input.getParent().getId().equals(0L)))
                res.add(calcInvoice.getDepartmentInput().getInput());
        }
        return res;
    }

    private void recalculateParentVolumeTotal(CalcInvoice c, CalcInvoice cc) {
        //c.setRealConsume(c.getRealConsume()-cc.getRealConsume());
        c.setVolumeTotal(c.getVolumeTotal()-cc.getVolumeTotal());
        if (c.getCoefTarrifWatterOut() >0) {
            c.setVolumeTotalWithCoef(c.getVolumeTotal()*c.getCoefTarrifWatterOut());
            c.setSum(DoubleUtils.round(c.getVolumeTotalWithCoef(),2)*c.getTariff());
        }else{
            c.setVolumeTotalWithCoef(c.getVolumeTotal());
            c.setSum(DoubleUtils.round(c.getVolumeTotalWithCoef(),2)*c.getTariff());
        }

        if (c.getCoefWatterSupply() >0) {
            c.setVolumeTotalWithCoef(c.getVolumeTotal()*c.getCoefWatterSupply());
            c.setSum(DoubleUtils.round(c.getVolumeTotalWithCoef(),2)*c.getTariff());
        }else{
            c.setVolumeTotalWithCoef(c.getVolumeTotal());
            c.setSum(DoubleUtils.round(c.getVolumeTotalWithCoef(),2)*c.getTariff());
        }

    }


    /*public void recalculateInput1(Connection connection){
        CalcInvoiceCondition Invoicecondition = new CalcInvoiceCondition();
        List<CalcInvoice> calcInvoicesResult = new SearchInvoiceQuery(Invoicecondition).execute(connection);
        for (CalcInvoice c:calcInvoicesResult){
            if (c.getDepartmentInput().getInput().getId() == null) continue;
            recalculateTotalVolume(c);
            long parentId  =  c.getDepartmentInput().getInput().getId();
            InputCondition condition = new InputCondition();
            condition.setParentID(parentId);
            List<Input> inputs = new SearchInputQuery(condition).execute(connection);
            if (inputs.isEmpty()) continue;
            for (Input input:inputs){
                long id = input.getId();
                for (CalcInvoice cc:calcInvoicesResult){
                    if (cc.getDepartmentInput().getInput().getId() == null) continue;

                    if (cc.getDepartmentInput().getInput().getId() == id){
                        c.setRealConsume(c.getRealConsume()-cc.getRealConsume());
                        recalculateTotalVolume(c);
                        if (c.getCoefTarrifWatterOut() >0)
                            c.setSum(c.getSum()*c.getCoefTarrifWatterOut());
                        if (c.getCoefWatterSupply() >0)
                            c.setSum(c.getSum()*c.getCoefWatterSupply());
                        break;
                    }
                }
            }
        }
        for (CalcInvoice c:calcInvoicesResult) if (c.isReturned()) c.setRealConsume(0);
    }*/
    public  List<CalcInvoiceStockWithoutPermission> calculationStockWithOutPermissionWithRains() {
        List<CalcInvoiceStockWithoutPermission> res = new ArrayList<>();
        List<StockWithoutPermission> stockWithoutPermissions = this.invoiceUtils.getDocumentsStockWithoutPermission();
        List<CalcInvoiceRainsInvoice> allInvoicesRainsFromPrevoiusPeriod = this.getInvoiceRainsFromPreviousPeriod(this.getPreviousPeriods(stockWithoutPermissions));
        for (StockWithoutPermission s:stockWithoutPermissions) {
            List<CalcInvoiceRainsInvoice> invoicesFromPrevoiusPeriodWithRains = this.getAllInvoiceRainsFromPreviousPeriod(allInvoicesRainsFromPrevoiusPeriod,s);
            for (CalcInvoiceRainsInvoice r: invoicesFromPrevoiusPeriodWithRains){
                Double sumWatterOutConsume = 0.0;
                Double sum08 = 0.0;
                Double volume = 0.0;

                volume = r.getVolume();
                /*KoefConditions koefConditions = new KoefConditions();
                List<Koef> koefs = new SearchKoefficientQuery(koefConditions).execute(connection);
                Koef koef = koefs.get(0);*/
                Koef koef = this.invoiceUtils.getKoef();
                Department department = r.getDepartment();
                /*TariffCondition tariffCondition = new TariffCondition();
                tariffCondition.setCategoryID(r.getCategoryOfTariff().getId());
                tariffCondition.setSubServiceID(CODE_SERVICE_WATTER_OUT);
                tariffCondition.setPeriod(invoiceUtils.getPeriod());
                List<Tariff> tariffs = new SearchTariffQuery(tariffCondition).execute(connection);
                Tariff tariff = tariffs.get(0);*/
                Tariff tariff = invoiceUtils.getTariff(
                        r.getCategoryOfTariff().getId(),
                        CODE_SERVICE_WATTER_OUT,
                        invoiceUtils.getPeriod()
                );
                if (tariff == null){
                    tariff = new Tariff();
                    tariff.setTariff(0.0);
                }
                sumWatterOutConsume = volume*tariff.getTariff()*koef.getKofficient()*1.2;
                sum08 = sumWatterOutConsume*0.8;

                CalcInvoiceStockWithoutPermission calcInvoiceStockWithoutPermission = new CalcInvoiceStockWithoutPermission();
                calcInvoiceStockWithoutPermission.setContraAgent(s.getContraAgent());
                calcInvoiceStockWithoutPermission.setPeriod(invoiceUtils.getPeriod());
                calcInvoiceStockWithoutPermission.setPeriodCalculation(s.getPeriodCalculation());

                calcInvoiceStockWithoutPermission.setVal(volume);
                calcInvoiceStockWithoutPermission.setSum(sumWatterOutConsume);
                calcInvoiceStockWithoutPermission.setSum08(sum08);
                calcInvoiceStockWithoutPermission.setKoefficient(koef.getKofficient());

                calcInvoiceStockWithoutPermission.setDepartment(department);
                calcInvoiceStockWithoutPermission.getDepartment().getProperty().setCategoryOfTariff(r.getCategoryOfTariff());

                calcInvoiceStockWithoutPermission.setTariff(tariff.getTariff());
                //resultCollector.fillCalcStockWithoutPermission(calcInvoiceStockWithoutPermission);
                calcInvoiceStockWithoutPermission.setAgreement(new Agreement());
                calcInvoiceStockWithoutPermission.getAgreement().setId(r.getAgreement().getId());
                res.add(calcInvoiceStockWithoutPermission);
            }

        }
        return res;
    }
    public List<CalcInvoiceHotWatterSupplier> calculationHotWatterSupplier() {
        List<CalcInvoiceHotWatterSupplier> res = new ArrayList<>();
        List<CalcInvoice> invoices = this.invoiceUtils.getCalcInvoicesHotWatterSupplierToCalculate();
        for (CalcInvoice c:invoices ){
            double sum = 0.0;
            VolumeConsumption document = this.invoiceUtils.getVolumeConsuptionDocument(c.getContraAgent());
            if (document == null)
                if (invoiceUtils.isWatterSupply(c.getSubService()))
                    sum = c.getTariff()*document.getVolumeVp();
                else
                    sum = c.getTariff()*document.getVolumeVv();

            CalcInvoiceHotWatterSupplier calcInvoiceHotWatterSupplier = new CalcInvoiceHotWatterSupplier();
            calcInvoiceHotWatterSupplier.setContraAgent(c.getContraAgent());
            calcInvoiceHotWatterSupplier.setDepartment(c.getDepartmentInput().getDepartment());
            calcInvoiceHotWatterSupplier.setInput(c.getDepartmentInput().getInput());
            calcInvoiceHotWatterSupplier.setSum(sum);
            //resultCollector.fillCalcHotWatterSupplier(calcInvoiceHotWatterSupplier);
            res.add(calcInvoiceHotWatterSupplier);
        }
        return res;
    }
    public void calculatePDV(Connection connection) {
        resultCollector.calculateAndSavePdvToDataBase();
    }
    public List<Saldo> recalculateSaldo() {
        return new RecalculateSaldoAllContraAgent().recalculatoSaldoAllContraAgent();
    }
    public List<SaldoDepartment> recalculateSaldoByDepartment() {
        return new RecalculateAllSaldoByDepartment().recalculateAllSaldoOnDepartment();
    }


    public List<CalcInvoiceTeploenergo> calculationInvoickeHotWatterSupplierLKP() {
        List<CalcInvoiceTeploenergo> res = new ArrayList<>();
        List<VolumeConsumption> docs = this.invoiceUtils.getDocumentVolumeConsuption();


        for (VolumeConsumption d:docs){
            boolean isHotInput = this.invoiceUtils.checkIsHotInputInDocument(d);
            if (isHotInput == false) continue;
            HotWaterSupplier hotWaterSupplier = this.invoiceUtils.getHotWatterSupplier(d);
            if (hotWaterSupplier == null) continue;
            if (hotWaterSupplier.getId() == null) continue;
            CategoryOfTariff tariffCategory = this.invoiceUtils.getTariffCategoryForCalculateTeplo(d);
            Tariff tariff = this.invoiceUtils.getTariffBySubService(new SubService(4L), tariffCategory);
            CalcInvoiceTeploenergo calcInvoiceTeploenergo  = new CalcInvoiceTeploenergo();
            calcInvoiceTeploenergo.setAgreement(d.getAgreement());
            calcInvoiceTeploenergo.setContraAgent(d.getContraAgent());
            calcInvoiceTeploenergo.setDepartment(d.getDepartment());
            calcInvoiceTeploenergo.setHotWaterSupplier(hotWaterSupplier);
            calcInvoiceTeploenergo.setInput(d.getInput());
            if (tariff != null)
                calcInvoiceTeploenergo.setSubService(tariff.getSubService());
            else
                calcInvoiceTeploenergo.setSubService(new SubService(4L));
            HotWaterSupplyAgreement hotWatterSupplierAgreement = invoiceUtils.getHotWatterSupplierAgreement(hotWaterSupplier);

            if (hotWatterSupplierAgreement != null)
                calcInvoiceTeploenergo.setHotWatterSupplierAgreement(hotWatterSupplierAgreement);

            if (tariff != null)
                calcInvoiceTeploenergo.setSum(d.getVolumeVPHotWatter()*tariff.getTariff());
            else
                calcInvoiceTeploenergo.setSum(0.0);
            calcInvoiceTeploenergo.setTariff(tariffCategory);
            if (tariff != null)
                calcInvoiceTeploenergo.setTariffValue(tariff.getTariff());
            else
                calcInvoiceTeploenergo.setTariffValue(0.0);
            calcInvoiceTeploenergo.setVolume(d.getVolumeVPHotWatter());
            calcInvoiceTeploenergo.setDepartmentAgreement(this.invoiceUtils.getDepartmentAgreement(calcInvoiceTeploenergo.getDepartment()));
            //this.resultCollector.fillCalcInvoiceTeploenergo(calcInvoiceTeploenergo);
            res.add(calcInvoiceTeploenergo);
        }
        return res;
    }
    public  List<CalcInvoiceTeploenergo> calculationInvoiceHotWatterSupplier(){
        List<CalcInvoiceTeploenergo> res = new ArrayList<>();
        List<CalcInvoice> list = this.invoiceUtils.getAllHotWatterSupplierInvoice();
        CategoryOfTariff tariffCategory = this.invoiceUtils.getTariffCategoryForCalculateTeplo();
        Tariff tariff = this.invoiceUtils.getTariffBySubService(new SubService(4L),tariffCategory);

        for (CalcInvoice c:list) {
            if (c.getDepartmentInput().getHotWaterSupplier() == null || c.getDepartmentInput().getHotWaterSupplier().getId() == null) continue;


            CalcInvoiceTeploenergo calcInvoiceTeploenergo = new CalcInvoiceTeploenergo();
            calcInvoiceTeploenergo.setAgreement(new Agreement(c.getContrAgentAgreementID()));
            calcInvoiceTeploenergo.setContraAgent(c.getContraAgent());
            calcInvoiceTeploenergo.setDepartment(c.getDepartmentInput().getDepartment());
            calcInvoiceTeploenergo.setHotWaterSupplier(c.getDepartmentInput().getHotWaterSupplier());
            calcInvoiceTeploenergo.setInput(c.getDepartmentInput().getInput());

            if (tariff != null)
                calcInvoiceTeploenergo.setSubService(tariff.getSubService());
            else
                calcInvoiceTeploenergo.setSubService(new SubService(4L));
            if (tariff != null)
                calcInvoiceTeploenergo.setSum(c.getVolumeTotal() * tariff.getTariff());
            else
                calcInvoiceTeploenergo.setSum(0.0);
            calcInvoiceTeploenergo.setTariff(tariffCategory);
            if (tariff != null)
                calcInvoiceTeploenergo.setTariffValue(tariff.getTariff());
            else
                calcInvoiceTeploenergo.setTariffValue(0.0);
            calcInvoiceTeploenergo.setVolume( c.getVolumeTotal());
            calcInvoiceTeploenergo.setDepartmentAgreement(this.invoiceUtils.getDepartmentAgreement(calcInvoiceTeploenergo.getDepartment()));
            HotWaterSupplyAgreement hotWatterSupplierAgreement = invoiceUtils.getHotWatterSupplierAgreement(c.getDepartmentInput().getHotWaterSupplier());

            if (hotWatterSupplierAgreement != null)
                calcInvoiceTeploenergo.setHotWatterSupplierAgreement(hotWatterSupplierAgreement);

            res.add(calcInvoiceTeploenergo);
        }
        return res;
    }
    public List<CalcInvoice> calculateByNormaFull(DepartmentInputInvoice dii) {
        /*List<CalcInvoice> invoices = _calculateByInvoiceAndReturnTransfer(dii, DateUtils.getCountDayInMonth(invoiceUtils.getPeriod()));
        this.addDetailsForNormaFull(invoices);
        return invoices;*/

        Date endDate = DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod());
        Calendar c = Calendar.getInstance();
        c.setTime(endDate);
        c.add(Calendar.DAY_OF_MONTH,1);
        endDate = c.getTime();

        /*List<CalcInvoiceDetail> details = _caclulateByInvoiceByInterval(dii,
                DateUtils.getFirstDayOfMonth(invoiceUtils.getPeriod()),
                DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod()),true);*/

        List<CalcInvoiceDetail> details = _caclulateByInvoiceByInterval(dii,
                DateUtils.getFirstDayOfMonth(invoiceUtils.getPeriod()),
                endDate,true,0);

        List<CalcInvoice> list = _generateMainListFromDetails(dii,details);
        return list;
    }
    private void addDetailsForNormaFull(List<CalcInvoice> invoices) {
        for (CalcInvoice c:invoices){
            CalcInvoiceDetail detail = new CalcInvoiceDetail();
            detail.setBeginFactorIn(0);
            detail.setEndFactorIn(0);
            detail.setCountDayByChecker((int) c.getCountDayByCheckers());
            detail.setCountDayByNorma(c.getCountDayOnNorma());
            detail.setCountDayByRepair(0);
            detail.setDateBegin(DateUtils.getFirstDayOfMonth(invoiceUtils.getPeriod()));
            detail.setDateEnd(DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod()));
            detail.setEndFactorIn(0);
            detail.setVolumeOnChecker(c.getVolumeOnCheckers());
            detail.setVolumeOnCounterIn(0);
            detail.setVolumeOnNormaIn(c.getVolumeOnNorma());
            detail.setVolumeOnRepair(0);
            c.getDetailses().add(detail);
        }
    }
    public List<CalcInvoice> calculationByCounterInvoice(DepartmentInputInvoice departmentInput) {
        /*List<CalcInvoice> list =  _caluclationByCounterAndGetTransfer(departmentInput,null);
        return list;*/
        List<RegisterOfCounter> list= invoiceUtils.getLastRegisterOfCounterDocument(departmentInput);
        RegisterOfCounter registerOfCounter = null;
        if (!list.isEmpty())
            registerOfCounter = list.get(0);
        List<CalcInvoiceDetail> details = _caclulateByCounterByInterval(departmentInput,
                DateUtils.getFirstDayOfMonth(invoiceUtils.getPeriod()),
                DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod()),registerOfCounter,0);
        List<CalcInvoice> res = this._generateMainListFromDetails(departmentInput,details);
        return res;
    }

    private List<CalcInvoice> _generateMainListFromDetails(DepartmentInputInvoice departmentInput, List<CalcInvoiceDetail> details) {

        if (departmentInput.getDepartmentInputID() == 66355){
            int debug = 0;
        }
       /* double totalVolume = 0.0;
        double realConsume = 0.0;
        double volumeOnCheckers = 0.0;
        double volumeOnRepair = 0.0;*/

        //double volumeAddingCapacityInput = 0.0;

        List<CalcInvoice> calcInvoices = new ArrayList<>();


        CalcInvoice calcInvoiceWatterOut = _generateShareDateCalcInvoice(departmentInput);
        CalcInvoice calcInvoiceWatterSupply = _generateShareDateCalcInvoice(departmentInput);

        Set<SubService> subServices = this.getAllSubServices(details);


        for (CalcInvoiceDetail cd:details) {
            if (!invoiceUtils.isWatterSupply(cd.getSubService())) {
                calcInvoiceWatterOut.setRealConsume(calcInvoiceWatterOut.getRealConsume()+((cd.getEndFactorIn() - cd.getBeginFactorIn())));
                calcInvoiceWatterOut.setVolumeOnCheckers(calcInvoiceWatterOut.getVolumeOnCheckers()+cd.getVolumeOnChecker());
                calcInvoiceWatterOut.setVolumeOnRepair((int) (calcInvoiceWatterOut.getVolumeOnRepair()+cd.getVolumeOnRepair()));
                calcInvoiceWatterOut.setVolumeOnNorma(calcInvoiceWatterOut.getVolumeOnNorma()+cd.getVolumeOnNormaIn());
                calcInvoiceWatterOut.setCountDayByCheckers(calcInvoiceWatterOut.getCountDayByCheckers()+cd.getCountDayByChecker());
                calcInvoiceWatterOut.setCountDayOnNorma(calcInvoiceWatterOut.getCountDayOnNorma()+cd.getCountDayByNorma());
                calcInvoiceWatterOut.setCountDayOnRepair(calcInvoiceWatterOut.getCountDayOnRepair()+cd.getCountDayByRepair());
                calcInvoiceWatterOut.setSubService(cd.getSubService());
                calcInvoiceWatterOut.setReturned(cd.isReturned());
                calcInvoiceWatterOut.getDetailses().add(cd);
                int i=1;

            }else{

                calcInvoiceWatterSupply.setRealConsume(calcInvoiceWatterSupply.getRealConsume()+((cd.getEndFactorIn() - cd.getBeginFactorIn())));
                calcInvoiceWatterSupply.setVolumeOnCheckers(calcInvoiceWatterSupply.getVolumeOnCheckers()+cd.getVolumeOnChecker());
                calcInvoiceWatterSupply.setVolumeOnRepair((int) (calcInvoiceWatterSupply.getVolumeOnRepair()+cd.getVolumeOnRepair()));
                calcInvoiceWatterSupply.setVolumeOnNorma(calcInvoiceWatterSupply.getVolumeOnNorma()+cd.getVolumeOnNormaIn());
                calcInvoiceWatterSupply.setCountDayByCheckers(calcInvoiceWatterSupply.getCountDayByCheckers()+ cd.getCountDayByChecker());
                calcInvoiceWatterSupply.setCountDayOnNorma(calcInvoiceWatterSupply.getCountDayOnNorma()+cd.getCountDayByNorma());
                calcInvoiceWatterSupply.setCountDayOnRepair(calcInvoiceWatterSupply.getCountDayOnRepair()+cd.getCountDayByRepair());
                calcInvoiceWatterSupply.setSubService(cd.getSubService());
                calcInvoiceWatterSupply.setReturned(cd.isReturned());
                calcInvoiceWatterSupply.getDetailses().add(cd);
            }
        }

        for (SubService subService:subServices) {
            Tariff tariff = _getTariffBySubService(departmentInput, subService);
            if (invoiceUtils.checkTariffDataInAction(tariff) == false) tariff.setTariff(0.0);

            InputProperty property = this.transformer.transformInputProperties(departmentInput);
            if (!invoiceUtils.isWatterSupply(subService)) {
                Double res = (calcInvoiceWatterOut.getRealConsume()) * tariff.getTariff();
                boolean isEnabledSubService = this.invoiceUtils.checkEnabled(departmentInput, subService);
                if (isEnabledSubService == false) calcInvoiceWatterOut.setLoad(false);

                if (property.getKoefWatterOut() != 0) {
                    res *= property.getKoefWatterOut();
                }
                calcInvoiceWatterOut.setCoefTarrifWatterOut(property.getKoefWatterOut());
                calcInvoiceWatterOut.setSum(res);
                calcInvoiceWatterOut.setTarifCategotyID(tariff.getCategory().getId());
                calcInvoiceWatterOut.setTariff(tariff.getTariff());

            }else{
                Double res = (calcInvoiceWatterOut.getRealConsume()) * tariff.getTariff();
                boolean isEnabledSubService = this.invoiceUtils.checkEnabled(departmentInput, subService);
                if (isEnabledSubService == false) calcInvoiceWatterSupply.setLoad(false);

                if (property.getKoefWatterSupply() != 0) {
                    res *= property.getKoefWatterSupply();
                }

                calcInvoiceWatterSupply.setCoefWatterSupply(property.getKoefWatterSupply());
                calcInvoiceWatterSupply.setSum(res);
                calcInvoiceWatterSupply.setTarifCategotyID(tariff.getCategory().getId());
                calcInvoiceWatterSupply.setTariff(tariff.getTariff());

            }
        }

        if (calcInvoiceWatterOut.isLoad() && calcInvoiceWatterOut.getSubService().getId() != null){
            recalculateTotalVolume(calcInvoiceWatterOut);
            calcInvoices.add(calcInvoiceWatterOut);
        }
        if (calcInvoiceWatterSupply.isLoad()  && calcInvoiceWatterSupply.getSubService().getId() != null){
            recalculateTotalVolume(calcInvoiceWatterSupply);
            calcInvoices.add(calcInvoiceWatterSupply);
        }

        return calcInvoices;

    }

    private CalcInvoice _generateShareDateCalcInvoice(DepartmentInputInvoice departmentInput) {
        CalcInvoice calcInvoice = new CalcInvoice();
        calcInvoice.setContraAgent(new ContraAgent(departmentInput.getContraAgentID()));
        Agreement a = this.invoiceUtils.getActiveAgreement(new ContraAgent(departmentInput.getContraAgentID()));
        if (a == null){
            calcInvoice.setContrAgentAgreementID(null);
        }else {
            calcInvoice.setContrAgentAgreementID(a.getId());
        }
        calcInvoice.setDepartamentAgreementID(null);
        calcInvoice.setDepartmentInput(new DepartmentInput(departmentInput.getDepartmentInputID()));
        calcInvoice.getDepartmentInput().setInput(new Input(departmentInput.getInputID()));
        calcInvoice.getDepartmentInput().getInput().setParent(new Input(departmentInput.getInputParentID()));
        calcInvoice.setPeriod(invoiceUtils.getPeriod());
        double volumeAddingConsume = _getAddingConsumeVolumeByDepartmentInput(departmentInput);
        calcInvoice.setVolumeAddingConsume(volumeAddingConsume);
        return calcInvoice;

    }

    private Set<SubService> getAllSubServices(List<CalcInvoiceDetail> details) {
        Set<SubService> res = new HashSet<>();
        for (CalcInvoiceDetail cd:details){
            res.add(cd.getSubService());
        }
        return res;
    }

    private double _getAddingConsumeVolumeByDepartmentInput(DepartmentInputInvoice departmentInput) {
        double res = 0.0;
        List<AddingByConsumingVolume> list = invoiceUtils.getAddingByConsuminVolumeByPeriod();
        for (AddingByConsumingVolume doc:list){
            if (doc.getDepartmentInput().getId().equals(departmentInput.getDepartmentInputID())){
                res += doc.getVolume();
            }
        }
        return res;
    }

    public List<CalcInvoiceRainsInvoice> calculationDepartmentRainsInvoice() {
        List<CalcInvoiceRainsInvoice> res = new ArrayList<>();
        List<DepartmentInputInvoice> departmentInputInvoiceList = invoiceUtils.getDepartmentInputToInvoice();
        for (DepartmentInputInvoice departmentInput:departmentInputInvoiceList) {
            Department department = transformer.transformDepartment(departmentInput);
            List<Rains> rainses = invoiceUtils.getAllRainses(department);
            List<RainNorma> rainNormas = invoiceUtils.getAllRainsNorma(department);
            if (rainses.isEmpty() && rainNormas.isEmpty()) continue;
            double sumRainses = getSumRaines(rainses);
            if (rainses.isEmpty() == false && sumRainses!= 0) {
                invoiceUtils.fillCoefficients(rainses);
                //Qм =(10 * Н (F1*0,7+F2*0,7+F3*0,1)/12)/10000
                Double q = 0.0;
                Double h = invoiceUtils.getCurrentRainsLevel();  //RainsLevel
                Double allArea = 0.0;
                for (Rains rains : rainses) {
                    double koef = rains.getAreaType().getCoefficient();  //regRains
                    double koefRains = rains.getDistributedCoeficient();
                    if (koef == 0.0) koef = 1;
                    if (koefRains == 0.0) koefRains = 1;
                    allArea += rains.getArea() * koef * koefRains; // *coef
                }
                q = (10 * h * (allArea) / 12) / 10000;
                Tariff t = invoiceUtils.getTariff(departmentInput);
                Double tariff = t.getTariff();
                Agreement agreement = invoiceUtils.getActiveAgreement(new ContraAgent(departmentInput.getContraAgentID()));
                if (agreement == null) continue;
                CalcInvoiceRainsInvoice calc = new CalcInvoiceRainsInvoice();
                calc.setSum(DoubleUtils.round((q * tariff),2));
                calc.setTariff(tariff);
                calc.setVolume(DoubleUtils.round(q,2));
                calc.setPeriod(invoiceUtils.getPeriod());
                calc.setContraAgent(new ContraAgent(departmentInput.getContraAgentID()));
                calc.setDepartment(department);
                calc.setAgreement(invoiceUtils.getActiveAgreement(new ContraAgent(departmentInput.getContraAgentID())));
                calc.setCategoryOfTariff(t.getCategory());
                res.add(calc);
                continue;
            }if (rainNormas.isEmpty() == false  && sumRainses == 0){
                Tariff t = invoiceUtils.getTariff(departmentInput);
                Double tariff = t.getTariff();
                RainNorma r = rainNormas.get(0);
                double sum = r.getNorma()*tariff;
                Agreement agreement = invoiceUtils.getActiveAgreement(new ContraAgent(departmentInput.getContraAgentID()));
                if (agreement == null) continue;
                CalcInvoiceRainsInvoice calc = new CalcInvoiceRainsInvoice();
                calc.setSum(DoubleUtils.round(sum,2));
                calc.setTariff(tariff);
                calc.setVolume(r.getNorma());
                calc.setPeriod(invoiceUtils.getPeriod());
                calc.setContraAgent(new ContraAgent(departmentInput.getContraAgentID()));
                calc.setDepartment(department);
                calc.setAgreement(invoiceUtils.getActiveAgreement(new ContraAgent(departmentInput.getContraAgentID())));
                calc.setCategoryOfTariff(t.getCategory());
                res.add(calc);
            }
        }
        return res;
    }

    private double getSumRaines(List<Rains> rainses) {
        double res = 0;
        for (Rains r:rainses){
            res += r.getArea();
        }
        return res;
    }

    public List<CalcInvoice> calculationAddConsumingVolumeInvoice() {
        List<AddingByConsumingVolume> docs = invoiceUtils.getAddingByConsuminVolumeByPeriod();
        List<CalcInvoice> res = new ArrayList<>();
        for (AddingByConsumingVolume doc:docs) {
            List<CalcInvoice> list = invoiceUtils.getCalculationInvoiceForAddingConsumeVolume(doc);
            for (CalcInvoice c:list) {
                c.setVolumeAddingConsume(doc.getVolume().intValue());
                // resultCollector.recalculateTotalVolume(c);
                /*double totalVolume = c.getRealConsume()+c.getVolumeOnCheckers()+c.getVolumeAddingConsume()+c.getVolumeCorrectionCounter()+c.getVolumeAddingCapacityInput();
                c.setSum(totalVolume*c.getTariff());
                c.setVolumeTotal((int)totalVolume);*/
                //c.setSum(c.getSum()+(doc.getVolume().intValue()*c.getTariff()));
                recalculateTotalVolume(c);
                res.add(c);
                //new UpdateVolumeAddingConsumerInvoiceQuery().execute(connection, c);
            }
        }
        return res;
    }
    InvoiceEnum investigateInput(DepartmentInputInvoice departmentInputInvoice) {

        if (departmentInputInvoice.getDepartmentInputID() == 66348){
            int i = 0;
        }

        InputStatuses statusInputOnBeginPeriod = invoiceUtils.getStatusInputOnDate(departmentInputInvoice,invoiceUtils.getPeriod());
        int countDocumentInCurrentPeriod = invoiceUtils.getCountRegisterOfDocumentInPeriodNotIncludeFirstDay(departmentInputInvoice);
        countDocumentInCurrentPeriod += invoiceUtils.getCountUnregisterOfCounterDocumentInPeriod(departmentInputInvoice);

        /*if (statusInputOnBeginPeriod == InputStatuses.INPUT_WITHOUT_COUNTER){
            UnregisterOfCounter doc = invoiceUtils.getLastUnregisterOfCounterDocument(departmentInputInvoice);
            if (doc != null){
                if (doc.getOperationType().getId().equals(1) || doc.getOperationType().getId().equals(2)){
                    if (doc.getCalculateInPeriodUnregisterCounter())
                        return InvoiceEnum.INPUT_COUNTER_UNREGISTERED_TO_CALC_MIDDLE_ON_CHECKERS_OR_REPAIR;
                }
            }
        }*/

        if (statusInputOnBeginPeriod == InputStatuses.INPUT_WITH_COUNTER && countDocumentInCurrentPeriod == 0)
            return InvoiceEnum.INPUT_COUNTER_REGISTERED_ON_BEGIN_PERIOD_AND_HAVE_NO_DOCUMENT_REGISTER_AND_UNREGISTER;
        if (statusInputOnBeginPeriod == InputStatuses.INPUT_WITHOUT_COUNTER && countDocumentInCurrentPeriod == 0)
            return InvoiceEnum.INPUT_COUNTER_NOT_EXIST_IN_CURRENT_PERIOD_AND_HAVE_NO_DOCUMENT_REGISTER_AND_UNREGISTER;

        int countUnregisterOfCounterDocumentInPeriod = invoiceUtils.getCountUnregisterOfCounterDocumentInPeriod(departmentInputInvoice);

        if (statusInputOnBeginPeriod == InputStatuses.INPUT_WITH_COUNTER && countUnregisterOfCounterDocumentInPeriod>0){
            return InvoiceEnum.INPUT_COUNTER_REGISTERED_ON_BEGIN_PERIOD_AND_HAVE_MANY_UNREGISTERED_AND_REGISTERED_DOCUMENTS;
        }

        if (statusInputOnBeginPeriod == InputStatuses.INPUT_WITHOUT_COUNTER && countDocumentInCurrentPeriod>0){
            return InvoiceEnum.INPUT_COUNTER_UNREGISTERED_ON_BEGIN_PERIOD_AND_HAVE_MANY_UNREGISTERED_AND_REGISTERED_DOCUMENTS;
        }

        throw new RuntimeException("Cannot chose strategy to calc input" +departmentInputInvoice.getDepartmentInputID());

    }
    private Double calculateNormaByDay(Double norma, long days) {
        Double res = (norma * days) / DateUtils.getCountDayInMonth(invoiceUtils.getPeriod());
        return DoubleUtils.round(res,2);
    }
    private List<CalcInvoice> _calculateByInvoiceAndReturnTransfer(DepartmentInputInvoice departmentInput,long days){

        boolean calculateForMiddle = this.invoiceUtils.checkForCalculateToMiddle(departmentInput);
        if (calculateForMiddle) {
            List<CalcInvoice> invoices = null;
           // List<CalcInvoice> invoices = calculatebyMiddle(departmentInput,days);
            //this.addDetailsForNormaFull(invoices);
            return invoices;
        }

        List<CalcInvoice> resList = new ArrayList<>();
        Input input = transformer.transformInput(departmentInput);
        InputProperty property = transformer.transformInputProperties(departmentInput);
        List<SubService> subServices = invoiceUtils.getSubServicesByService(input.getService());
        for (SubService subService : subServices) {
            Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInput);
            if (tariff == null){
                tariff = new Tariff();
                tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));
                tariff.setSubService(subService);
                tariff.setTariff(0.0);
            }

            Double norma = calculateNormaByDay(property.getNorma(),days);
            Double sum = (norma) * tariff.getTariff();
            boolean isEnabled = invoiceUtils.checkEnabled(departmentInput, subService);
            if (isEnabled == false) continue;

            if (property.getKoefWatterOut() != 0) {
                if (invoiceUtils.isWatterSupply(subService) == false) {
                    sum *= property.getKoefWatterOut();
                }
            }
            if (property.getKoefWatterSupply() != 0) {
                if (invoiceUtils.isWatterSupply(subService) == true)
                    sum *= property.getKoefWatterSupply();
            }
            InvoiceTransfer transfer = new InvoiceTransfer();
            //transfer.setConnection(connection);
            transfer.setSubService(subService);
            transfer.setTariff(tariff);
            transfer.setSum(sum);
            transfer.setDepartmentInput(departmentInput);
            transfer.setNorma(norma);
            tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));
            transfer.setInput(input);
            AgreementCondition condition = new AgreementCondition();
            condition.setContraAgentID(transfer.getDepartmentInput().getContraAgentID());
            condition.setStatus(true);

            //List<Agreement> list = new SearchAgreementQuery(condition).execute(connection);
            Agreement a = this.invoiceUtils.getActiveAgreement(new ContraAgent(transfer.getDepartmentInput().getContraAgentID()));
            if (a == null) transfer.setContrAgentAgreementID(null);
            else
                transfer.setContrAgentAgreementID(a.getId());

            if (invoiceUtils.isWatterSupply(subService)) {
                transfer.setKoefWatterSupply(property.getKoefWatterSupply());
                transfer.setKoefWatterOut(0.0);
            } else {
                transfer.setKoefWatterSupply(0.0);
                transfer.setKoefWatterOut(property.getKoefWatterOut());
            }
            CalcInvoice calcInvoice = new CalcInvoice();
            calcInvoice.setTariff(transfer.getTariff().getTariff());
            transfer.setFactor(new InputFactor());
            calcInvoice.setDepartmentInput(new DepartmentInput(transfer.getDepartmentInput().getDepartmentInputID()));
            calcInvoice.setContraAgent(new ContraAgent(transfer.getDepartmentInput().getContraAgentID()));
            calcInvoice.setSum(transfer.getSum());
            calcInvoice.setVolumeOnNorma((transfer.getNorma().doubleValue()));
            calcInvoice.setSubService(transfer.getSubService());
            calcInvoice.setCoefTarrifWatterOut(transfer.getDepartmentInput().getKoefWatterOut());
            calcInvoice.setCoefWatterSupply(transfer.getDepartmentInput().getKoefWatterOut());
            calcInvoice.setFactorOnBeginMonth(transfer.getFactor().getFactorOnBeginMonth());
            calcInvoice.setFactorOnEndMonth(transfer.getFactor().getEndFactor());
            calcInvoice.setVolumeOnCounter(calcInvoice.getFactorOnEndMonth() - calcInvoice.getFactorOnBeginMonth());
            calcInvoice.setCoefTarrifWatterOut(transfer.getKoefWatterOut());
            calcInvoice.setCoefWatterSupply(transfer.getKoefWatterSupply());
            calcInvoice.setContrAgentAgreementID(transfer.getContrAgentAgreementID());
            calcInvoice.setTotalVolumeCounterByMonth(transfer.getTotalVolumeCounterByMonth());
            calcInvoice.setCountDayOnNorma(transfer.getCountDayOnNorma());
            calcInvoice.setVolumeOnRepair(transfer.getVolumeOnRepair());
            calcInvoice.setVolumeCorrectionDonarach(transfer.getVolumeCorrectionDonarach());
            calcInvoice.setTarifCategotyID(transfer.getTariff().getCategory().getId());
            calcInvoice.getDepartmentInput().setInput(new Input());
            calcInvoice.getDepartmentInput().getInput().setId(transfer.getInput().getId());
            calcInvoice.setCountDayOnNorma((int) days);
            recalculateTotalVolume(calcInvoice);
            resList.add(calcInvoice);
        }
        return resList;

    }
    private List<CalcInvoice> _caluclationByCounterAndGetTransfer(DepartmentInputInvoice departmentInput,RegisterOfCounter rg) {
        List<CalcInvoice> resList = new ArrayList<>();

        InputFactor factor = this.invoiceUtils.checkInputForCounter(departmentInput,rg);
        Input input = transformer.transformInput(departmentInput);
        Service service = input.getService();
        List<SubService> subServices = invoiceUtils.getSubServicesByService(service);
        for (SubService subService : subServices) {
            Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInput);//  this.getTariffBySubService(subService,departmentInput);
            if (tariff == null) {
                tariff = new Tariff();
                tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));
                tariff.setSubService(subService);
                tariff.setTariff(0.0);
            }
            if (invoiceUtils.checkTariffDataInAction(tariff) == false) tariff.setTariff(0.0);
            Double res = (factor.getEndFactor() - factor.getFactorOnBeginMonth()) * tariff.getTariff();
            InputProperty property = this.transformer.transformInputProperties(departmentInput);
            boolean isEnabledSubService = this.invoiceUtils.checkEnabled(departmentInput, subService);
            if (isEnabledSubService == false) continue;
            if (property.getKoefWatterOut() != 0) {
                if (this.invoiceUtils.isWatterSupply(subService) == false) {
                    res *= property.getKoefWatterOut();
                }
            }
            if (property.getKoefWatterSupply() != 0) {
                if (this.invoiceUtils.isWatterSupply(subService) == true)
                    res *= property.getKoefWatterSupply();
            }
            InvoiceTransfer transfer = new InvoiceTransfer();
            transfer.setTariff(tariff);
            transfer.setFactor(factor);
            transfer.setDepartmentInput(departmentInput);
            List<RegisterOfCounter> registerOfCounters = invoiceUtils.getLastRegisterOfCounterDocument(departmentInput);
            RegisterOfCounter registerOfCounter = registerOfCounters.get(0);
            if (registerOfCounter.isReturned()) {
                transfer.setSum(0.0);
                transfer.setReturned(true);

            }
            else
                transfer.setSum(res);
            transfer.setSubService(subService);
            transfer.setInvoice(factor);
            transfer.setInput(input);

            tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));

            AgreementCondition condition = new AgreementCondition();
            condition.setContraAgentID(transfer.getDepartmentInput().getContraAgentID());
            condition.setStatus(true);
            Agreement a = this.invoiceUtils.getActiveAgreement(new ContraAgent(transfer.getDepartmentInput().getContraAgentID()));
            if (a == null) transfer.setContrAgentAgreementID(null);
            else
                transfer.setContrAgentAgreementID(a.getId());

            if (this.invoiceUtils.isWatterSupply(subService)) {
                transfer.setKoefWatterSupply(property.getKoefWatterSupply());
                transfer.setKoefWatterOut(0.0);
            } else {
                transfer.setKoefWatterSupply(0.0);
                transfer.setKoefWatterOut(property.getKoefWatterOut());
            }
            CalcInvoice calcInvoice = new CalcInvoice();
            calcInvoice.setTariff(transfer.getTariff().getTariff());
            transfer.setFactor(factor);
            calcInvoice.setDepartmentInput(new DepartmentInput(transfer.getDepartmentInput().getDepartmentInputID()));
            calcInvoice.setContraAgent(new ContraAgent(transfer.getDepartmentInput().getContraAgentID()));
            calcInvoice.setSum(transfer.getSum());
            calcInvoice.setVolumeOnNorma(0.0);
            calcInvoice.setSubService(transfer.getSubService());
            calcInvoice.setCoefTarrifWatterOut(transfer.getDepartmentInput().getKoefWatterOut());
            calcInvoice.setCoefWatterSupply(transfer.getDepartmentInput().getKoefWatterOut());
            calcInvoice.setFactorOnBeginMonth(transfer.getFactor().getFactorOnBeginMonth());
            calcInvoice.setFactorOnEndMonth(transfer.getFactor().getEndFactor());
            calcInvoice.setVolumeOnCounter(calcInvoice.getFactorOnEndMonth()-calcInvoice.getFactorOnBeginMonth());
            calcInvoice.setCoefTarrifWatterOut(transfer.getKoefWatterOut());
            calcInvoice.setCoefWatterSupply(transfer.getKoefWatterSupply());
            calcInvoice.setContrAgentAgreementID(transfer.getContrAgentAgreementID());
            calcInvoice.setTotalVolumeCounterByMonth(transfer.getTotalVolumeCounterByMonth());
            calcInvoice.setCountDayOnNorma(transfer.getCountDayOnNorma());
            calcInvoice.setVolumeOnRepair(transfer.getVolumeOnRepair());
            calcInvoice.setVolumeCorrectionDonarach(transfer.getVolumeCorrectionDonarach());
            calcInvoice.setTarifCategotyID(transfer.getTariff().getCategory().getId());
            calcInvoice.setRealConsume(calcInvoice.getVolumeOnCounter());
            calcInvoice.getDepartmentInput().getInput().setId(transfer.getInput().getId());
            calcInvoice.setReturned(transfer.isReturned());
            if (rg != null && rg.isReturned()){
                calcInvoice.setRealConsume(0);
                calcInvoice.setReturned(true);
            }
            //this.addAgreementContraAgentToInvoiceResult(calcInvoice);
            this.fullDetails(calcInvoice);
            resList.add(calcInvoice);
        }
        return resList;

    }

    private List<CalcInvoiceDetail> _caclulateByInvoiceByInterval(DepartmentInputInvoice departmentInput,Date date1, Date date2,boolean calcByMiddle,long adding){
        boolean isCountOnRepairOrCheckers = invoiceUtils.checkForCalculateToMiddle(departmentInput);
        if (isCountOnRepairOrCheckers && calcByMiddle){
            return this.calculatebyMiddle(departmentInput,date1,date2,true);
        }

        List<CalcInvoiceDetail> resList = new ArrayList<>();
        long days = DateUtils.getCountDaysBetweenDate(date1,date2);
        days += adding;
        //
        Input input = transformer.transformInput(departmentInput);
        InputProperty property = transformer.transformInputProperties(departmentInput);
        List<SubService> subServices = invoiceUtils.getSubServicesByService(input.getService());
        for (SubService subService : subServices) {
            boolean isEnabledSubService = this.invoiceUtils.checkEnabled(departmentInput, subService);
            if (isEnabledSubService == false) continue;
            Double norma = calculateNormaByDay(property.getNorma(),days);
            CalcInvoiceDetail cd = new CalcInvoiceDetail();
            cd.setBeginFactorIn(0);
            cd.setEndFactorIn(0);
            cd.setCountDayByChecker(0);
            cd.setCountDayByNorma((int)days);
            cd.setCountDayByRepair(0);
            cd.setDateBegin(date1);
            cd.setDateEnd(date2);
            cd.setVolumeOnChecker(0.0);
            cd.setVolumeOnCounterIn(0.0);
            cd.setVolumeOnNormaIn(norma);
            cd.setSubService(subService);
            resList.add(cd);

        }
        return resList;
    }

    private List<CalcInvoiceDetail> _caclulateByCounterByInterval(DepartmentInputInvoice departmentInput,Date date1, Date date2, RegisterOfCounter rg,long adding) {
        List<CalcInvoiceDetail> resList = new ArrayList<>();

        InputFactor factor = this.invoiceUtils.checkInputForCounter(departmentInput, rg);
        Input input = transformer.transformInput(departmentInput);
        Service service = input.getService();

        List<SubService> subServices = invoiceUtils.getSubServicesByService(service);
        for (SubService subService : subServices) {
            boolean isEnabledSubService = this.invoiceUtils.checkEnabled(departmentInput, subService);
            if (isEnabledSubService == false) continue;
            CalcInvoiceDetail cd = new CalcInvoiceDetail();
            cd.setBeginFactorIn(factor.getFactorOnBeginMonth());
            cd.setEndFactorIn(factor.getEndFactor());
            cd.setCountDayByChecker(0);
            cd.setCountDayByNorma(0);
            cd.setCountDayByRepair(0);
            cd.setDateBegin(date1);
            cd.setDateEnd(date2);
            cd.setVolumeOnChecker(0.0);
            cd.setVolumeOnCounterIn(cd.getEndFactorIn()-cd.getBeginFactorIn()+adding);
            cd.setVolumeOnNormaIn(0.0);
            if (rg != null && rg.isReturned())
                cd.setReturned(true);
            cd.setSubService(subService);
            resList.add(cd);
        }
        return resList;
    }

    private void _fillCoefWatterSupplierAndWatterOut(InvoiceTransfer transfer, SubService subService, InputProperty property) {
        if (invoiceUtils.isWatterSupply(subService)) {
            transfer.setKoefWatterSupply(property.getKoefWatterSupply());
            transfer.setKoefWatterOut(0.0);
        } else {
            transfer.setKoefWatterSupply(0.0);
            transfer.setKoefWatterOut(property.getKoefWatterOut());
        }
    }

    private Tariff _getTariffBySubService(DepartmentInputInvoice departmentInput, SubService subService){
        Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInput);
        if (tariff == null){
            tariff = new Tariff();
            tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));
            tariff.setSubService(subService);
            tariff.setTariff(0.0);
        }
        return tariff;
    }

    private void fullDetails(CalcInvoice c) {
        List<CalcInvoiceDetail> calcInvoiceDetailses = new ArrayList<>();
        CalcInvoiceDetail details = new CalcInvoiceDetail();
        details.setDateBegin(DateUtils.getFirstDayOfMonth(this.invoiceUtils.getPeriod()));
        details.setDateEnd(DateUtils.getLastDayOfMonth(this.invoiceUtils.getPeriod()));
        details.setBeginFactorIn(c.getFactorOnBeginMonth());
        details.setEndFactorIn(c.getFactorOnEndMonth());
        calcInvoiceDetailses.add(details);
        //c.setCalcInvoiceDetailses(calcInvoiceDetailses);
        c.setDetailses(calcInvoiceDetailses);

    }
    private void recalculateTotalVolume(CalcInvoice c){

        double totalVolume = c.getRealConsume()+c.getVolumeOnNorma()+c.getVolumeOnCheckers()+c.getVolumeOnRepair()+c.getVolumeAddingConsume()
                +c.getVolumeAddingCapacityInput();

        if (c.isReturned()) {
            totalVolume = 0;
        }

        if (isWatterSupply(c.getSubService()) ) {
            if (c.getCoefWatterSupply() > 0) {
                c.setVolumeTotalWithCoef(totalVolume * c.getCoefWatterSupply());
                // c.setSum((totalVolume*c.getTariff())*c.getCoefWatterSupply());
                c.setSum(DoubleUtils.round(c.getVolumeTotalWithCoef(),2)*c.getTariff());
            }
            else {
                c.setVolumeTotalWithCoef(totalVolume);
                c.setSum((totalVolume)*c.getTariff());
            }

        }
        if (!isWatterSupply(c.getSubService()) ){
            if (c.getCoefTarrifWatterOut() > 0) {
                c.setVolumeTotalWithCoef(totalVolume * c.getCoefTarrifWatterOut());
                //c.setSum((totalVolume * c.getCoefTarrifWatterOut())*c.getTariff());
                c.setSum(DoubleUtils.round(c.getVolumeTotalWithCoef(),2)*c.getTariff());
            }
            else {
                c.setVolumeTotalWithCoef(totalVolume);
                c.setSum(totalVolume*c.getTariff());
            }

        }
        c.setVolumeTotal(totalVolume);



    }

    private  boolean isWatterSupply(SubService subService){
        if (subService.getId() == 2 || subService.getId() == 4) return true;
        if (subService.getId() == 1 || subService.getId() == 3) return false;
        throw new RuntimeException("Unknow Subservice");
    }
    private List<CalcInvoice> adoptedList(List<CalcInvoice> list) {
        List<CalcInvoice> res = new ArrayList<>();
        CalcInvoice invoiceWatterSupplier = null;
        CalcInvoice invoceWatterOut = null;

        double dayByCheckers = 0.0;
        double volumeByCheckers =0;


        for (CalcInvoice c:list) {
            if (invoiceWatterSupplier == null && (c.getSubService().getId() == 2 || c.getSubService().getId() == 4)) {
                invoiceWatterSupplier = c;
                dayByCheckers +=c.getCountDayByCheckers();
            }
            if (invoceWatterOut == null && (c.getSubService().getId() == 1 || c.getSubService().getId() == 3)) {
                invoceWatterOut = c;
                volumeByCheckers += c.getVolumeOnCheckers();
            }
        }

        for (CalcInvoice c:list) {
            if ((c.getSubService().getId() == 2 || c.getSubService().getId() == 4)) {
                //invoiceWatterSupplier = c;
                dayByCheckers +=c.getCountDayByCheckers();
            }
            if ((c.getSubService().getId() == 1 || c.getSubService().getId() == 3)) {
                //invoceWatterOut = c;
                volumeByCheckers += c.getVolumeOnCheckers();
            }
        }
        for (CalcInvoice c:list) {
            if (c.getSubService().getId() == 2 || c.getSubService().getId() == 4) {
                invoiceWatterSupplier.getDetailses().addAll(c.getDetailses());
            }
            if (c.getSubService().getId() == 1 || c.getSubService().getId() == 3) {
                invoceWatterOut.getDetailses().addAll(c.getDetailses());
            }
        }
        if (invoceWatterOut != null)
            invoceWatterOut.getDetailses().remove(0);
        if (invoiceWatterSupplier != null)
            invoiceWatterSupplier.getDetailses().remove(0);

        if (invoceWatterOut != null)
            res.add(invoceWatterOut);
        if (invoiceWatterSupplier != null)
            res.add(invoiceWatterSupplier);

        Long tariffCategoryID = null;
        for (CalcInvoice c:list){
            tariffCategoryID  = c.getTarifCategotyID();
            break;
        }

        for (CalcInvoice c:res){
            int volumeOnCounter = 0;
            double volumeOnNorma = 0;
            for (CalcInvoiceDetail cd:c.getDetailses()){
                volumeOnCounter += cd.getVolumeOnCounterIn();
                volumeOnNorma += cd.getVolumeOnNormaIn();
            }
            c.setVolumeOnCounter(volumeOnCounter);
            c.setVolumeOnNorma(volumeOnNorma);
            if (invoiceUtils.isWatterSupply(c.getSubService())){
                if (c.getCoefWatterSupply() !=0)
                    c.setVolumeTotalWithCoef(c.getVolumeTotal()*c.getCoefWatterSupply());
            }else{
                if (c.getCoefTarrifWatterOut() !=0)
                    c.setVolumeTotalWithCoef(c.getVolumeTotal()*c.getCoefTarrifWatterOut());
            }
            c.setVolumeOnCheckers(volumeByCheckers);
            c.setCountDayByCheckers(dayByCheckers);
            c.setTarifCategotyID(tariffCategoryID);
            recalculateTotalVolumeInPeriod(c);
        }

        return res;
    }
    private void recalculateTotalVolumeInPeriod(CalcInvoice c){

        double totalVolume = c.getRealConsume()+c.getVolumeOnCheckers()+c.getVolumeOnRepair()+c.getVolumeAddingConsume()
                +c.getVolumeAddingCapacityInput();

        for (CalcInvoiceDetail cd:c.getDetailses())
            totalVolume += cd.getVolumeOnNormaIn()+cd.getVolumeOnCounterIn();

        if (isWatterSupply(c.getSubService()) ) {
            if (c.getCoefWatterSupply() > 0) {
                c.setVolumeTotalWithCoef(totalVolume * c.getCoefWatterSupply());
                c.setSum((totalVolume*c.getTariff())*c.getCoefWatterSupply());
            }
            else {
                c.setVolumeTotalWithCoef(totalVolume);
                c.setSum((totalVolume)*c.getTariff());
            }

        }
        if (!isWatterSupply(c.getSubService()) ){
            if (c.getCoefTarrifWatterOut() > 0) {
                c.setVolumeTotalWithCoef(totalVolume * c.getCoefTarrifWatterOut());
                c.setSum((totalVolume * c.getCoefTarrifWatterOut())*c.getTariff());
            }
            else {
                c.setVolumeTotalWithCoef(totalVolume);
                c.setSum(totalVolume*c.getTariff());
            }

        }

        c.setVolumeTotal(totalVolume);
        if (!c.isReturned()) {
            c.setRealConsume(c.getVolumeOnCounter());
        }else{
            c.setVolumeTotal(0.0);
            c.setVolumeTotalWithCoef(0.0);
        }
    }

    private List<CalcInvoiceDetail> fillDetails(DepartmentInputInvoice dii, Date dateStartInterval, Date dateEndInterval, boolean calcOnCounter, CounterDocuments d, boolean isFirst){
        if (calcOnCounter) {
            RegisterOfCounter rg = (RegisterOfCounter)d;
            return _caclulateByCounterByInterval(dii,dateStartInterval,dateEndInterval,rg,0);
        }
        else{
            Date startIntervalPlusOne = DateUtils.addDay(dateStartInterval,0);
            //Date startIntervalPlusOne = dateStartInterval;
            long addDay = 0;
            if (isFirst)
                addDay = 0;
            else
                addDay = 1;
            return _caclulateByInvoiceByInterval(dii,startIntervalPlusOne,dateEndInterval,true,addDay);
        }
    }

    /*private List<CalcInvoice> fillDetails(DepartmentInputInvoice dii, Date dateStartInterval, Date dateEndInterval, boolean calcOnCounter, CounterDocuments d){
        if (calcOnCounter) {
            boolean isReturned = ((RegisterOfCounter)d).isReturned();
            List<CalcInvoice> list = _caluclationByCounterAndGetTransfer(dii,(RegisterOfCounter)d);
            for (CalcInvoice c:list) {
                recalculateTotalVolume(c);
                CalcInvoiceDetail cd = new CalcInvoiceDetail();
                cd.setBeginFactorIn(c.getFactorOnBeginMonth());
                cd.setEndFactorIn(c.getFactorOnEndMonth());
                cd.setVolumeOnCounterIn(c.getFactorOnEndMonth() - c.getFactorOnBeginMonth());
                cd.setDateBegin(dateStartInterval);
                cd.setDateEnd(dateEndInterval);
                c.setDetailses(new ArrayList<>());
                c.getDetailses().add(cd);
            }

            return list;
        }
        else{
            Date startIntervalPlusOne = DateUtils.addDay(dateStartInterval,0);
            List<CalcInvoice> list = _calculateByInvoiceAndReturnTransfer(dii,DateUtils.getCountDaysBetweenDate(startIntervalPlusOne,dateEndInterval));
            for (CalcInvoice c:list) {
                recalculateTotalVolume(c);
                CalcInvoiceDetail cd = new CalcInvoiceDetail();
                cd.setVolumeOnNormaIn(c.getVolumeOnNorma());
                //cd.setCountDayByNorma((int)DateUtils.getCountDaysBetweenDate(startIntervalPlusOne, dateEndInterval));
                cd.setCountDayByNorma(c.getCountDayOnNorma());
                cd.setDateBegin(dateStartInterval);
                cd.setDateEnd(dateEndInterval);
                cd.setVolumeOnNormaIn(c.getVolumeOnNorma());
                cd.setVolumeOnChecker(c.getVolumeOnCheckers());
                cd.setCountDayByChecker((int)c.getCountDayByCheckers());
                c.setDetailses(new ArrayList<>());
                c.getDetailses().add(cd);
            }
            return list;
        }
    }*/
    private String getTypeCalculation(boolean calcOnCounter){
        if (calcOnCounter) return "CalcOnCounter";
        else
            return "CalcOnNorma";
    }
    private List<CalcInvoice> getInvoiceFromPreviousPeriod(Set<Date> periods) {
        List<CalcInvoice> res = new ArrayList<>();
        for (Date period:periods) {
            CalcInvoiceCondition condition = new CalcInvoiceCondition();
            condition.setPeriod(period);
            List<CalcInvoice> list = new CalcInvoiceFromPreviousPeriodCache(condition).getDocuments();
            res.addAll(list);
        }
        return res;

    }
    private List<CalcInvoiceRainsInvoice> getInvoiceRainsFromPreviousPeriod(Set<Date> periods) {
        List<CalcInvoiceRainsInvoice> res = new ArrayList<>();
        for (Date period:periods) {
            CalcInvoiceCondition condition = new CalcInvoiceCondition();
            condition.setPeriod(period);
            List<CalcInvoiceRainsInvoice> list = new CalcInvoiceRainsCache(condition).getDocuments();
            res.addAll(list);
        }
        return res;

    }
    private List<CalcInvoice> getAllInvoiceFromPreviousPeriod(List<CalcInvoice> allInvoicesFromPrevoiusPeriod, StockWithoutPermission s) {
        //condition.setContraAgentID(s.getContraAgent().getId());
        List<CalcInvoice> res = new ArrayList<>();
        for (CalcInvoice c:allInvoicesFromPrevoiusPeriod){
            if (c.getContraAgent().getId().equals(s.getContraAgent().getId())){
                res.add(c);
            }
        }
        return res;
    }

    private List<CalcInvoiceRainsInvoice> getAllInvoiceRainsFromPreviousPeriod(List<CalcInvoiceRainsInvoice> allInvoicesFromPrevoiusPeriod, StockWithoutPermission s) {
        //condition.setContraAgentID(s.getContraAgent().getId());
        List<CalcInvoiceRainsInvoice> res = new ArrayList<>();
        for (CalcInvoiceRainsInvoice c:allInvoicesFromPrevoiusPeriod){
            if (c.getContraAgent().getId().equals(s.getContraAgent().getId())){
                res.add(c);
            }
        }
        return res;
    }
    private  Set<Date> getPreviousPeriods(List<StockWithoutPermission> stockWithoutPermissions){
        Set<Date> previousesPeriod = new HashSet<>();
        for (StockWithoutPermission s:stockWithoutPermissions){
            previousesPeriod.add(s.getPeriodCalculation());
        }
        return previousesPeriod;
    }


    public List<CalcInvoiceDetail> calculatebyMiddle(DepartmentInputInvoice departmentInput, Date date1,Date date2,boolean calcInInterval) {
        List<CalcInvoiceDetail> resList = new ArrayList<>();
        if (departmentInput.getDepartmentInputID() == 54){
            int b = 0;
        }
        UnregisterOfCounter unregisterOfCounter = this.invoiceUtils.getLastUnregisterOfCounterDocument(departmentInput);
        Long days = DateUtils.getCountDaysBetweenDate(date1,date2)+1;
        if (days>31){
            date2 = DateUtils.addDay(date2,-1);
            days = DateUtils.getCountDaysBetweenDate(date1,date2)+1;
        }
        if (unregisterOfCounter.getDateToReturnCounter().getTime()<DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod()).getTime() && calcInInterval){
            Date dateNew1 = new Date(date1.getTime());
            Date dateNew2 = unregisterOfCounter.getDateToReturnCounter();
            days =  DateUtils.getCountDaysBetweenDate(dateNew1,dateNew2);
            resList.addAll(calculatebyMiddle(departmentInput,dateNew1,dateNew2,false));
            dateNew1 = new Date(dateNew2.getTime());
            dateNew2 = DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod());
            resList.addAll(_caclulateByInvoiceByInterval(departmentInput,dateNew1,dateNew2,false,0));
            return resList;
        }

        double countDayInFirstPeriod = DateUtils.getCountDayInMonth(unregisterOfCounter.getPeriodByMiddleCalculationOnMonth1());
        double countDayInSecondPeriod = DateUtils.getCountDayInMonth(unregisterOfCounter.getPeriodByMiddleCalculationOnMonth2());

        double volumeInFirstMonth = this.invoiceUtils.getLastFactorInPeriod(unregisterOfCounter.getCounter(),unregisterOfCounter.getPeriodByMiddleCalculationOnMonth1());
        double volumeInSecondMonth = this.invoiceUtils.getLastFactorInPeriod(unregisterOfCounter.getCounter(), unregisterOfCounter.getPeriodByMiddleCalculationOnMonth2());

        Input input = transformer.transformInput(departmentInput);
        Service service = input.getService();
        List<SubService> subServices = invoiceUtils.getSubServicesByService(service);
        for (SubService subService : subServices) {
            Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInput);
            if (invoiceUtils.checkTariffDataInAction(tariff) == false) ;
            Double volumeOnCheckersOrRepair = ((volumeInFirstMonth+volumeInSecondMonth)/(countDayInFirstPeriod+countDayInSecondPeriod))*days.doubleValue();
            Double res = (((volumeInFirstMonth+volumeInSecondMonth)/(countDayInFirstPeriod+countDayInSecondPeriod))*days.doubleValue())*tariff.getTariff();
            CalcInvoiceDetail cd = new CalcInvoiceDetail();
            cd.setBeginFactorIn(0);
            cd.setCountDayByChecker(days.intValue());
            cd.setCountDayByNorma(0);
            cd.setCountDayByRepair(0);
            cd.setDateBegin(date1);
            cd.setDateEnd(date2);
            cd.setEndFactorIn(0);
            cd.setSubService(subService);
            cd.setReturned(false);
            cd.setVolumeOnChecker(volumeOnCheckersOrRepair);
            cd.setVolumeOnCounterIn(0);
            cd.setVolumeOnNormaIn(0);
            cd.setVolumeOnRepair(0.0);
            resList.add(cd);
        }

        return resList;
    }



    /*public List<CalcInvoice> calculatebyMiddle(DepartmentInputInvoice departmentInput, Long days) {
        List<CalcInvoice> resList = new ArrayList<>();

        UnregisterOfCounter unregisterOfCounter = this.invoiceUtils.getLastUnregisterOfCounterDocument(departmentInput);

        if (unregisterOfCounter.getDateToReturnCounter().getTime()<DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod()).getTime()){
            Date date1 = unregisterOfCounter.getDateToReturnCounter();
            Date date2 = DateUtils.getLastDayOfMonth(invoiceUtils.getPeriod());
            days =  DateUtils.getCountDaysBetweenDate(date1,date2);
        }

        double countDayInFirstPeriod = DateUtils.getCountDayInMonth(unregisterOfCounter.getPeriodByMiddleCalculationOnMonth1());
        double countDayInSecondPeriod = DateUtils.getCountDayInMonth(unregisterOfCounter.getPeriodByMiddleCalculationOnMonth2());

        double volumeInFirstMonth = this.invoiceUtils.getLastFactorInPeriod(unregisterOfCounter.getPeriodByMiddleCalculationOnMonth1());
        double volumeInSecondMonth = this.invoiceUtils.getLastFactorInPeriod(unregisterOfCounter.getPeriodByMiddleCalculationOnMonth2());

        Input input = transformer.transformInput(departmentInput);
        Service service = input.getService();
        List<SubService> subServices = invoiceUtils.getSubServicesByService(service);
        for (SubService subService : subServices) {
            Tariff tariff = invoiceUtils.getTariffBySubService(subService, departmentInput);
            if (invoiceUtils.checkTariffDataInAction(tariff) == false) ;
            Double volumeOnCheckersOrRepair = ((volumeInFirstMonth+volumeInSecondMonth)/(countDayInFirstPeriod+countDayInSecondPeriod))*days.doubleValue();
            Double res = (((volumeInFirstMonth+volumeInSecondMonth)/(countDayInFirstPeriod+countDayInSecondPeriod))*days.doubleValue())*tariff.getTariff();
            InvoiceTransfer transfer = new InvoiceTransfer();
            transfer.setTariff(new Tariff());
            transfer.setFactor(new InputFactor());
            transfer.setDepartmentInput(departmentInput);
            transfer.setSum(res);
            transfer.setSubService(subService);
            transfer.setInput(input);

            tariff.setCategory(new CategoryOfTariff(departmentInput.getTariffCategory()));
            AgreementCondition condition = new AgreementCondition();
            condition.setContraAgentID(transfer.getDepartmentInput().getContraAgentID());
            condition.setStatus(true);
            Agreement a = this.invoiceUtils.getActiveAgreement(new ContraAgent(transfer.getDepartmentInput().getContraAgentID()));
            if (a == null) transfer.setContrAgentAgreementID(null);
            else
                transfer.setContrAgentAgreementID(a.getId());
            CalcInvoice calcInvoice = new CalcInvoice();
            calcInvoice.setTariff(tariff.getTariff());
            calcInvoice.setTarifCategotyID(tariff.getCategory().getId());
            transfer.setFactor(new InputFactor());
            calcInvoice.setDepartmentInput(new DepartmentInput(transfer.getDepartmentInput().getDepartmentInputID()));
            calcInvoice.setContraAgent(new ContraAgent(transfer.getDepartmentInput().getContraAgentID()));
            calcInvoice.setSum(transfer.getSum());
            calcInvoice.setVolumeOnNorma(0.0);
            calcInvoice.setVolumeOnCheckers(DoubleUtils.round(volumeOnCheckersOrRepair,2));
            calcInvoice.setCountDayByCheckers(days);
            calcInvoice.setSubService(transfer.getSubService());
            calcInvoice.setCoefTarrifWatterOut(transfer.getDepartmentInput().getKoefWatterOut());
            calcInvoice.setCoefWatterSupply(transfer.getDepartmentInput().getKoefWatterOut());
            calcInvoice.setFactorOnBeginMonth(transfer.getFactor().getFactorOnBeginMonth());
            calcInvoice.setFactorOnEndMonth(transfer.getFactor().getEndFactor());
            calcInvoice.setVolumeOnCounter(calcInvoice.getFactorOnEndMonth()-calcInvoice.getFactorOnBeginMonth());
            calcInvoice.setCoefTarrifWatterOut(transfer.getKoefWatterOut());
            calcInvoice.setCoefWatterSupply(transfer.getKoefWatterSupply());
            calcInvoice.setContrAgentAgreementID(transfer.getContrAgentAgreementID());
            calcInvoice.setTotalVolumeCounterByMonth(transfer.getTotalVolumeCounterByMonth());
            calcInvoice.setCountDayOnNorma(0);
            calcInvoice.setVolumeOnRepair(transfer.getVolumeOnRepair());
            calcInvoice.setVolumeCorrectionDonarach(transfer.getVolumeCorrectionDonarach());
            calcInvoice.setTarifCategotyID(tariff.getCategory().getId());
            calcInvoice.setRealConsume(calcInvoice.getVolumeOnCounter());
            calcInvoice.getDepartmentInput().getInput().setId(transfer.getInput().getId());
            calcInvoice.setReturned(transfer.isReturned());
            calcInvoice.setCountDayByCheckers(days);
            recalculateTotalVolume(calcInvoice);
            this.fullDetails(calcInvoice);
            resList.add(calcInvoice);
        }
        return resList;
    }*/


}
