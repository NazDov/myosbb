package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;


import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 15.10.2014.
 */
public class Fillers {

    protected Messages messages = Messages.getInstance();

    public Street getStreetByID(Connection connection,Long id)   {
        StreetCondition condition = new StreetCondition();
        condition.setId(id);
        List<Street> list =  new SearchStreetQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_STREET_BY_ID",id);
        Street res = list.get(0);
        res.setMunicipal(this.getMunicipalByID(connection,res.getMunicipal().getId()));
        return res;
    }

    public Municipal getMunicipalByID(Connection connection,Long id)   {
        MunicipalCondition condition = new MunicipalCondition();
        condition.setId(id);
        List<Municipal> list = new SearchMunicipalQueryByConditionQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_MUNICIPAL_BY_ID",id);
        return list.get(0);
    }

    public Address getAddressByID(Connection connection,Long id)   {
        AddressCondition condition = new AddressCondition();
        condition.setId(id);
        List<Address> list =  new SearchAddressQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_ADDRESS_BY_ID",id);
        Address res = list.get(0);
        res.setStreet(this.getStreetByID(connection,res.getStreet().getId()));
        return res;
    }

    public Input getInputByID(Connection connection,Long id)   {
        InputCondition condition = new InputCondition();
        condition.setId(id);
        List<Input> list = new SearchInputQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_INPUT_BY_ID",id);
        Input res = list.get(0);
        res.setAddress(getAddressByID(connection,res.getAddress().getId()));
        res.setDiameter(getInputDiameterByID(connection,res.getDiameter().getId()));
        res.setService(getServiceByID(connection,res.getService().getId()));
        return res;
    }

    public Service getServiceByID(Connection connection,Long id)   {
        ServiceCondition condition = new ServiceCondition();
        condition.setId(id);
        List<Service> list = new SearchServiceQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_SERVICE_BY_ID",id);
        Service res = list.get(0);
        return res;
    }
    public InputDiameter getInputDiameterByID(Connection connection,Long id)   {
        InputDiameterCondition condition = new InputDiameterCondition();
        condition.setId(id);
        List<InputDiameter> list = new SearchInputDiameterQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_INPUT_DIAMETER_BY_ID",id);
        InputDiameter res = list.get(0);
        return res;
    }
    public Agreement getAgreementByID(Connection connection,Long id)   {
        AgreementCondition condition = new AgreementCondition();
        condition.setId(id);
        List<Agreement> agreements =  new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) return null;
        else
            return  agreements.get(0);

    }
    public Agreement getAgreementDepByID(Connection connection,Long id)   {
        AgreementCondition condition = new AgreementCondition();
        condition.setId(id);
        List<Agreement> agreements =  new SearchAgreementByDepQuery(condition).execute(connection);
        if (agreements.isEmpty()) return null;
        else
            return  agreements.get(0);

    }
    public HotWaterSupplier getHotWatterSupplytByID (Connection connection,Long id)   {
        if (id == null) throw new StorageException("HotWatterSupplier is null");
        HotWaterSupplierCondition condition = new HotWaterSupplierCondition();
        condition.setId(id);
        List<HotWaterSupplier> list = new SearchHotWaterQuery(condition).execute(connection);
        if (list.isEmpty()) return new HotWaterSupplier();
        HotWaterSupplier res = list.get(0);
        HotWaterSupplierProperty property = res.getProperty();
        res.getProperty().setBank(this.getBankByID(connection,property.getBank().getId()));
        res.getProperty().setGroupWatterSupply(this.getGroupWatterSupplyByID(connection,property.getGroupWatterSupply().getId()));
        res.getProperty().setContraAgentCategory(this.getContraAgentCategoryByID(connection,property.getContraAgentCategory().getId()));
        res.getProperty().setTypeActivity(this.getTypeActivityByID(connection,property.getTypeActivity().getId()));
        res.getProperty().setSourceWaterSupply(this.getSourceWatterSupplyByID(connection,property.getSourceWaterSupply().getId()));
        return res;
    }
    public ContraAgent getContraAgentByID(Connection connection,Long id)   {
        if (id == null) throw new StorageException("ContraAgentID is null");
        ContraAgentCondition condition = new ContraAgentCondition();
        condition.setId(id);
        List<ContraAgent> list = new SearchContraAgentQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_INPUT_CONTRA_AGENT_BY_ID",id);
        ContraAgent res = list.get(0);
        ContraAgentProperty property = res.getProperty();
        res.getProperty().setBank(this.getBankByID(connection,property.getBank().getId()));
        res.getProperty().setGroupWatterSupply(this.getGroupWatterSupplyByID(connection,property.getGroupWatterSupply().getId()));
        res.getProperty().setContraAgentCategory(this.getContraAgentCategoryByID(connection,property.getContraAgentCategory().getId()));
        res.getProperty().setArea(this.getAreaByID(connection,property.getArea().getId()));
        res.getProperty().setTypeActivity(this.getTypeActivityByID(connection,property.getTypeActivity().getId()));
        res.getProperty().setSourceWaterSupply(this.getSourceWatterSupplyByID(connection,property.getSourceWaterSupply().getId()));
        res.getProperty().setPayer(this.getPayerByID(connection,property.getPayer().getId()));
        res.getProperty().setAlgorithm(this.getAlgorithmByID(connection,property.getAlgorithm().getId()));
        return res;
    }
    public Department getDepartmentByID(Connection connection,Long id)  {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setId(id);
        List<Department> list1 = new SearchDepartmentQuery(condition).execute(connection);
        checkList(list1,"ERROR_CANNONT_FIND_INPUT_DEPARTMENT_BY_ID",id);
        Department res = list1.get(0);
        List<DepartmentProperty> list = new SearchDepartmentPropertiesQuery(condition).execute(connection);
        if (!list.isEmpty())
            res.setProperty(list.get(0));
        return res;
    }

    public Department getDepByID(Connection connection,Long id)  {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setId(id);
        List<Department> list1 = new SearchDepartmentQuery(condition).execute(connection);
        if (list1.isEmpty()) return new Department();
        else return list1.get(0);
    }
    public Counter getCounterByID(Connection connection,Long id)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(id);
        List<Counter> list = new SearchCounterQuery(condition).execute(connection);
        if (list.isEmpty()) return new Counter();
        else return list.get(0);
    }

    public RegisterOfCounter getRegisterOfCounterByID(Connection connection,Long id)   {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setId(id);
        List<RegisterOfCounter> list = new SearchRegisterOfCounterQuery(condition).execute(connection);
        if (list.isEmpty()) return new RegisterOfCounter();
        else return list.get(0);
    }






    public UnregisterOfCounter getUnregisterByID(Connection connection,Long id)   {
        UnregisterOfCounterCondition condition = new UnregisterOfCounterCondition();
        condition.setId(id);
        List<UnregisterOfCounter> list = new SearchUnregisterCounterQuery(condition).execute(connection);
        if (list.isEmpty()) return new UnregisterOfCounter();
        else return list.get(0);
    }
    public UnregisterOfCounter getUnregisterOfCounterByID(Connection connection,Long id)  {
        UnregisterOfCounterCondition condition = new UnregisterOfCounterCondition();
        condition.setId(id);
        UnregisterOfCounter res = new SearchUnregisterCounterQuery(condition).execute(connection).get(0);
        res.setContraAgent(this.getContraAgentByID(connection,res.getContraAgent().getId()));
        res.setDepartment(this.getDepartmentByID(connection,res.getDepartment().getId()));
        res.setInput(this.getInputByID(connection,res.getInput().getId()));
        res.setCounter(this.getCounterByID(connection,res.getCounter().getId()));
        return res;
    }
    public InputSubServiceContain getInputSubServiceContainByID(Connection connection,Long id)   {
        InputSubServiceContainsCondition condition = new InputSubServiceContainsCondition();
        condition.setId(id);
        InputSubServiceContain res = new SearchInputSubServiceContainsQuery(condition).execute(connection).get(0);
        return res;
    }
    public TypeRemove getTypeRemoveByID(Connection connection,Long id)   {
        TypeRemoveCondition condition = new TypeRemoveCondition();
        condition.setId(id);
        List<TypeRemove> list = new SearchTypeRemoveQuery(condition).execute(connection);
        if (list.isEmpty()) return new TypeRemove();
        else return list.get(0);
    }

    public InputProperty getPropertyByID(Connection connection,Long id)   {
        InputPropertyCondition condition = new InputPropertyCondition();
        condition.setId(id);
        return new SearchInputPropertyQuery(condition).execute(connection).get(0);
    }


    public Area getAreaByID(Connection connection,Long id)   {
        AreaCondition condition = new AreaCondition();
        condition.setId(id);
        return new SearchAreaQuery(condition).execute(connection).get(0);
    }
    public Algorithm getAlgorithmByID(Connection connection,Long id)   {
        AlgoritmCondition condition = new AlgoritmCondition();
        condition.setId(id);
        List<Algorithm> list = new SearchAlgoritmQuery(condition).execute(connection);
        if (list.isEmpty()) return new Algorithm();
        else return list.get(0);
    }

    public BussinessProfile getBuissnessProfileByID(Connection connection,Long id)   {
        BuissnessCondition condition = new BuissnessCondition();
        condition.setId(id);
        List<BussinessProfile> bussinessProfiles =  new SearchBuissnessQuery(condition).execute(connection);
        if (bussinessProfiles.isEmpty()) return null;
        else
            return  bussinessProfiles.get(0);

    }



    public CategoryOfTariff getCategoryOfTariffByID(Connection connection,Long id)   {
        CategoryOfTariffCondition condition = new CategoryOfTariffCondition();
        condition.setId(id);
        return new SearchCategoryOfTariffQuery(condition).execute(connection).get(0);
    }
    public KindAgreement getKindAgreementByID(Connection connection,Long id)   {
        KindAgreementCondition condition = new KindAgreementCondition();
        condition.setId(id);
        return new SearchKindAgreementQuery(condition).execute(connection).get(0);
    }

    public AgreementPenyaProperty getAgreementPenyaPropertyByID(Connection connection,Long id)   {
        AgreementPropertiesPenyaCondition condition = new AgreementPropertiesPenyaCondition();
        condition.setId(id);
        return new SearchAgreementPropertiesPenyaQuery(condition).execute(connection).get(0);
    }
    public TypeAgreement getTypeAgreementByID(Connection connection,Long id)   {
        TypeAgreementCondition condition = new TypeAgreementCondition();
        condition.setId(id);
        return new SearchTypeAgreementQuery(condition).execute(connection).get(0);
    }

    public Tariff getTarifByID(Connection connection,Long id)   {
        TariffCondition condition = new TariffCondition();
        condition.setId(id);
        List<Tariff> list = new SearchTariffQuery(condition).execute(connection);
        if (list.isEmpty()) return new Tariff();
        else return list.get(0);
    }


    public AreaType getAreaTypeByID(Connection connection,Long id)   {
        AreaTypeCondition condition = new AreaTypeCondition();
        condition.setId(id);
        List<AreaType> areaTypes =  new SearchAreaTypeQuery(condition).execute(connection);
        if (areaTypes.isEmpty()) return null;
        else
          return  areaTypes.get(0);

    }

    public DepartmentInput getDepartmentInputByID(Connection connection, Long id)   {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setId(id);
        DepartmentInput res = new SearchDepartmentInputQuery(condition).execute(connection).get(0);
        res.setInput(this.getInputByID(connection,res.getInput().getId()));
        res.setDepartment(this.getDepartmentByID(connection,res.getDepartment().getId()));
        return res;
    }

    public DepartmentInput getClearDepartmentInput(Connection connection,Long id){
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setId(id);
        DepartmentInput res = new SearchClearDepartmentInputColdWatterInputQuery(condition).execute(connection).get(0);
        res.setInput(this.getInputByID(connection,res.getInput().getId()));
        res.setDepartment(this.getDepartmentByID(connection,res.getDepartment().getId()));
        return res;
    }
    public SubService getSubServiceByID(Connection connection,Long id)   {
        SubServiceCondition subServiceCondition = new SubServiceCondition();
        subServiceCondition.setId(id);
        return new SearchSubServiceQuery(subServiceCondition).execute(connection).get(0);
    }


    public String getDateAsString(Date date){
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        return simpleDateFormat.format(date);
    }

    public TypeActivity getTypeActivityByID(Connection connection, Long id)   {
        TypeActivityCondition condition = new TypeActivityCondition();
        condition.setId(id);
        return new SearchTypeActivityQuery(condition).execute(connection).get(0);
    }

    public SourceWaterSupply getSourceWatterSupplyByID(Connection connection, Long id)   {
        SourceWaterSupplyCondition condition = new SourceWaterSupplyCondition();
        condition.setId(id);
        return new SearchSourceWaterSupplyCondition(condition).execute(connection).get(0);
    }

    public Payer getPayerByID(Connection connection,Long id)   {
        PayerCondition condition = new PayerCondition();
        condition.setId(id);
        List<Payer> list = new SearchPayer(condition).execute(connection);
        if (list.isEmpty()) return new Payer();
        else return list.get(0);
    }
    public GroupWatterSupply getGroupWatterSupplyByID(Connection connection, Long id)   {
        GroupWatterSupplyCondition condition = new GroupWatterSupplyCondition();
        condition.setId(id);
        List<GroupWatterSupply> list = new SearchWatterGroutSupplyQuery(condition).execute(connection);
        if (list.isEmpty() == true) return null;
        else
            return list.get(0);
    }

    public ContraAgentCategory getContraAgentCategoryByID(Connection connection, Long id)   {
        ContraAgentCategoryCondition condition = new ContraAgentCategoryCondition();
        condition.setId(id);
        List<ContraAgentCategory> list = new SearchContraAgentCategory(condition).execute(connection);
        if (list.isEmpty()){
            System.out.println("not found category  of contraAgent with id = "+id);
        }
        return list.get(0);
    }

    private void checkList(List<?> list,String messageKey,Long id)   {
        String errorMessage = messages.get(messageKey)+" id = "+id;
        if (list.isEmpty() == true) throw new StorageException(errorMessage);
    }

    public Bank getBankByID(Connection connection, Long id)   {
        if (id == null || id==0) return new Bank();
        BankCondition condition = new BankCondition();
        condition.setId(id);
        List<Bank> list = new SearchBankQueryF(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_BANK_BY_ID",id);
        return new SearchBankQueryF(condition).execute(connection).get(0);
    }

    public SubRoute getSubRouteByID(Connection connection,Long id)   {
        SubRouteCondition condition = new SubRouteCondition();
        condition.setId(id);
        List<SubRoute> list = new SearchSubRouteQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else
            return list.get(0);
    }
      public Route getRouteByID(Connection connection,Long id)   {
        RouteConditions condition = new RouteConditions();
        condition.setId(id);
        List<Route> list = new SearchRouteQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else
            return list.get(0);
    }


    public PaymentType getPaymentTypeByID(Connection connection, Long id)   {
        PaymentTypeCondition condition = new PaymentTypeCondition();
        condition.setId(id);
        List<PaymentType> list = new SearchPaymentTypeQuery(condition).execute(connection);
        return  list.get(0);
    }

    public Correction getCorrectionByID(Connection connection, Long id)   {
        CorrectionCondition condition = new CorrectionCondition();
        condition.setId(id);
        List<Correction> list = new SearchCorrectionQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else
            return list.get(0);
    }

    public ServicePayment getServicePaymentByID(Connection connection,Long id)   {
        ServicePaymentCondition condition = new ServicePaymentCondition();
        condition.setId(id);
        List<ServicePayment> list = new SearchServicePaymentQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else
            return list.get(0);
    }

    public ServicePayment getServiceCorrectionByID(Connection connection, Long id)   {
        ServicePaymentCondition condition = new ServicePaymentCondition();
        condition.setId(id);
        List<ServicePayment> list = new SearchServicePaymentQuery(condition).execute(connection);
        return  list.get(0);
    }

    public OwnerBankAccount getOwnerBankAccount(Connection connection, Long id)   {
        OwnerBankAccountCondition condition = new OwnerBankAccountCondition();
        condition.setId(id);
        List<OwnerBankAccount> list = new SearchOwnerBankAccountQuery(condition).execute(connection);
        checkList(list,"ERROR_CANNONT_FIND_OWNER_BANK_ACCOUNT_BY_ID",id);
        return list.get(0);
    }

    public CalcInvoice getCalcInvoiceByID(Connection connection,Long id) {
        CalcInvoiceCondition condition = new CalcInvoiceCondition();
        condition.setId(id);
        CalcInvoice res  = new SearchInvoiceQuery(condition).execute(connection).get(0);
        res.setSubService(getSubServiceByID(connection,res.getSubService().getId()));
        res.setDepartmentInput(this.getClearDepartmentInput(connection,res.getDepartmentInput().getId()));
        res.setContraAgent(this.getContraAgentByID(connection,res.getContraAgent().getId()));
        return res;
    }
}
