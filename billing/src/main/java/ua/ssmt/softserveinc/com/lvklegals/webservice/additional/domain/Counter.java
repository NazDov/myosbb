package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 18.09.2014.
 */
public class Counter {

    private Long id;
    private String number;
    private CounterDiametr diameter;
    private UnitOfMeasurement unitOfMeasurement;
    private Model model;
    private ContraAgent contraAgent;
    private Department department;
    private CounterHistory counterHistory;
    private TypeCounter typeCounter;


    public Counter() {
        this.diameter = new CounterDiametr();
        this.unitOfMeasurement = new UnitOfMeasurement();
        this.model = new Model();
        this.contraAgent = new ContraAgent();
        this.department = new Department();
        this.typeCounter = new TypeCounter();
    }

    public Counter(Long id) {
        this();
        this.id = id;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public UnitOfMeasurement getUnitOfMeasurement() {
        return unitOfMeasurement;
    }

    public void setUnitOfMeasurement(UnitOfMeasurement unitOfMeasurement) {
        this.unitOfMeasurement = unitOfMeasurement;
    }

    public Model getModel() {
        return model;
    }

    public void setModel(Model model) {
        this.model = model;
    }

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public CounterDiametr getDiameter() {
        return diameter;
    }

    public void setDiameter(CounterDiametr diameter) {
        this.diameter = diameter;
    }

    public CounterHistory getCounterHistory() {
        return counterHistory;
    }

    public void setCounterHistory(CounterHistory counterHistory) {
        this.counterHistory = counterHistory;
    }

    public TypeCounter getTypeCounter() {
        return typeCounter;
    }

    public void setTypeCounter(TypeCounter typeCounter) {
        this.typeCounter = typeCounter;
    }
}
