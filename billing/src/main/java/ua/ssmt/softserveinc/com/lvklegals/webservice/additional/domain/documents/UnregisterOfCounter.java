package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vostap on 23.09.2014.
 */
public class UnregisterOfCounter extends CounterDocuments {

    private ContraAgent contraAgent;
    private Department department;
    private Input input;
    private Counter counter;
    private Integer factorByOnUnregister;
    private String numberAct;
    private Date dateActToUnPlomb;
    private Date dateAct;
    private OperationType operationType;
    private Date periodByMiddleCalculationOnMonth1;
    private Date periodByMiddleCalculationOnMonth2;
    private Date dateToReturnCounter;
    private Boolean calculateInPeriodUnregisterCounter;
    private DepartmentInput departmentInput;
    private Date period;
    private String surname;


    public UnregisterOfCounter(){
        this.contraAgent = new ContraAgent();
        this.department = new Department();
        this.input = new Input();
        this.counter = new Counter();
        this.operationType = new OperationType();
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

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public Counter getCounter() {
        return counter;
    }

    public void setCounter(Counter counter) {
        this.counter = counter;
    }

    public Integer getFactorByOnUnregister() {
        return factorByOnUnregister;
    }

    public void setFactorByOnUnregister(Integer factorByOnUnregister) {
        this.factorByOnUnregister = factorByOnUnregister;
    }

    public String getNumberAct() {
        return numberAct;
    }

    public void setNumberAct(String numberAct) {
        this.numberAct = numberAct;
    }

    public Date getDateActToUnPlomb() {
        return dateActToUnPlomb;
    }

    public void setDateActToUnPlomb(Date dateActToUnPlomb) {
        this.dateActToUnPlomb = dateActToUnPlomb;
        this.setDocumentDate(dateActToUnPlomb);
    }

    public Date getDateAct() {
        return dateAct;
    }

    public void setDateAct(Date dateAct) {
        this.dateAct = dateAct;
    }

    public OperationType getOperationType() {
        return operationType;
    }

    public void setOperationType(OperationType operationType) {
        this.operationType = operationType;
    }

    public Date getPeriodByMiddleCalculationOnMonth1() {
        return periodByMiddleCalculationOnMonth1;
    }

    public void setPeriodByMiddleCalculationOnMonth1(Date periodByMiddleCalculationOnMonth1) {
        this.periodByMiddleCalculationOnMonth1 = periodByMiddleCalculationOnMonth1;
    }

    public Date getPeriodByMiddleCalculationOnMonth2() {
        return periodByMiddleCalculationOnMonth2;
    }

    public void setPeriodByMiddleCalculationOnMonth2(Date periodByMiddleCalculationOnMonth2) {
        this.periodByMiddleCalculationOnMonth2 = periodByMiddleCalculationOnMonth2;
    }

    public Date getDateToReturnCounter() {
        return dateToReturnCounter;
    }

    public void setDateToReturnCounter(Date dateToReturnCounter) {
        this.dateToReturnCounter = dateToReturnCounter;
    }

    public Boolean getCalculateInPeriodUnregisterCounter() {
        return calculateInPeriodUnregisterCounter;
    }

    public void setCalculateInPeriodUnregisterCounter(Boolean calculateInPeriodUnregisterCounter) {
        this.calculateInPeriodUnregisterCounter = calculateInPeriodUnregisterCounter;
    }

    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInput departmentInput) {
        this.departmentInput = departmentInput;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
