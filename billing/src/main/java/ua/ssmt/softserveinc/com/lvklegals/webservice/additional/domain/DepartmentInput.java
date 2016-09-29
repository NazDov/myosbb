package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;

import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class DepartmentInput {
    private Long id;
    private Date dateWhirring;
    private Department department;
    private Input input;
    private InputSubServiceContain subServices;
    private InputProperty inputProperty;
    private List<InputSubServiceContain> historyInputSubServiceContains;
    private List<InputProperty> historyProperties;
    private Date startDate;
    private Date endDate;
    private Date period;
    private String counterNumber;
    private String modelName;
    private Counter counter;
    private RegisterOfCounter registerOfCounter;
    private UnregisterOfCounter unregisterOfCounter;
    private TypeRemove typeRemove;
    private Agreement agreement;
    private String agreementNumber;
    private HotWaterSupplier hotWaterSupplier;
    private SysCounterStatus activityCounter;



    public DepartmentInput(){
        this.department = new Department();
        this.input = new Input();
        this.inputProperty = new InputProperty();
        this.subServices = new InputSubServiceContain();
        this.counter = new Counter();
        this.registerOfCounter = new RegisterOfCounter();
        this.unregisterOfCounter = new UnregisterOfCounter();
        this.typeRemove = new TypeRemove();
        this.agreement = new Agreement();
        this.hotWaterSupplier = new HotWaterSupplier();


    }

    public DepartmentInput(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateWhirring() {
        return dateWhirring;
    }

    public void setDateWhirring(Date dateWhirring) {
        this.dateWhirring = dateWhirring;
    }

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public SysCounterStatus getActivityCounter() {
        return activityCounter;
    }

    public void setActivityCounter(SysCounterStatus activityCounter) {
        this.activityCounter = activityCounter;
    }

    @Override
    public String toString() {
        return "DepartmentInput{" +
                "id=" + id +
                ", dateWhirring=" + dateWhirring +
                ", department=" + department +
                ", input=" + input +
                ", counter=" + counter +
                ", registerOfCounter=" + registerOfCounter +
                ", unregisterOfCounter=" + unregisterOfCounter +
                ", typeRemove=" + typeRemove +
                ", agreement=" + agreement +
                ", hotWaterSupplier=" + hotWaterSupplier +
                ", activityCounter=" + activityCounter +

                '}';
    }

    public InputSubServiceContain getSubServices() {
        return subServices;
    }

    public void setSubServices(InputSubServiceContain subServices) {
        this.subServices = subServices;
    }

    public InputProperty getInputProperty() {
        return inputProperty;
    }

    public void setInputProperty(InputProperty inputProperty) {
        this.inputProperty = inputProperty;
    }

    public List<InputSubServiceContain> getHistoryInputSubServiceContains() {
        return historyInputSubServiceContains;
    }

    public void setHistoryInputSubServiceContains(List<InputSubServiceContain> historyInputSubServiceContains) {
        this.historyInputSubServiceContains = historyInputSubServiceContains;
    }

    public List<InputProperty> getHistoryProperties() {
        return historyProperties;
    }

    public void setHistoryProperties(List<InputProperty> historyProperties) {
        this.historyProperties = historyProperties;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public String getCounterNumber() {
        return counterNumber;
    }

    public void setCounterNumber(String counterNumber) {
        this.counterNumber = counterNumber;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }


    public Counter getCounter() {
        return counter;
    }

    public void setCounter(Counter counter) {
        this.counter = counter;
    }

    public RegisterOfCounter getRegisterOfCounter() {
        return registerOfCounter;
    }

    public void setRegisterOfCounter(RegisterOfCounter registerOfCounter) {
        this.registerOfCounter = registerOfCounter;
    }

    public UnregisterOfCounter getUnregisterOfCounter() {
        return unregisterOfCounter;
    }

    public void setUnregisterOfCounter(UnregisterOfCounter unregisterOfCounter) {
        this.unregisterOfCounter = unregisterOfCounter;
    }

    public TypeRemove getTypeRemove() {
        return typeRemove;
    }

    public void setTypeRemove(TypeRemove typeRemove) {
        this.typeRemove = typeRemove;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    public HotWaterSupplier getHotWaterSupplier() {
        return hotWaterSupplier;
    }

    public void setHotWaterSupplier(HotWaterSupplier hotWaterSupplier) {
        this.hotWaterSupplier = hotWaterSupplier;
    }
}
