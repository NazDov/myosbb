package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;

import java.util.Date;

/**
 * Created by vostap on 23.09.2014.
 */
public class RegisterOfCounter extends CounterDocuments {
    private Date onDate;
    private String  number;
    private Date metrCheckDate;
    private String plombNumber1;
    private String plombNumber2;
    private String MetrPlomba;
    private Long regInfDepartmentInputsID;
    private Integer beginFactor;
    private Date period;
    private String surname;

    private Input input;
    private Department department;
    private Counter counter;
    private ContraAgent contraAgent;
    private boolean returned;


    public Date getOnDate() {
        return onDate;
    }

    public void setOnDate(Date onDate) {
        this.onDate = onDate;
        this.setDocumentDate(onDate);
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public Date getMetrCheckDate() {
        return metrCheckDate;
    }

    public void setMetrCheckDate(Date metrCheckDate) {
        this.metrCheckDate = metrCheckDate;
    }

    public String getPlombNumber1() {
        return plombNumber1;
    }

    public void setPlombNumber1(String plombNumber1) {
        this.plombNumber1 = plombNumber1;
    }

    public String getPlombNumber2() {
        return plombNumber2;
    }

    public void setPlombNumber2(String plombNumber2) {
        this.plombNumber2 = plombNumber2;
    }

    public Long getRegInfDepartmentInputsID() {
        return regInfDepartmentInputsID;
    }

    public void setRegInfDepartmentInputsID(Long regInfDepartmentInputsID) {
        this.regInfDepartmentInputsID = regInfDepartmentInputsID;
    }

    public Integer getBeginFactor() {
        return beginFactor;
    }

    public void setBeginFactor(Integer beginFactor) {
        this.beginFactor = beginFactor;
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

    public Counter getCounter() {
        return counter;
    }

    public void setCounter(Counter counter) {
        this.counter = counter;
    }

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public String getMetrPlomba() {
        return MetrPlomba;
    }

    public void setMetrPlomba(String metrPlomba) {
        MetrPlomba = metrPlomba;
    }

    @Override
    public String toString() {
        return "RegisterOfCounter{" +
                "id=" + getId() +
                ", onDate=" + onDate +
                ", number='" + number + '\'' +
                ", beginFactor=" + beginFactor +
                ", department=" + department +
                ", contraAgent=" + contraAgent +
                '}';
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public boolean isReturned() {
        return returned;
    }

    public void setReturned(boolean returned) {
        this.returned = returned;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }
}
