package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;

import java.util.Date;

/**
 * Created by vostap on 06.11.2014.
 */
public class ContinueRepairOrCheck {
    private Long id;
    private ContraAgent contraAgent;
    private Department department;
    private Input input;
    private Counter counter;
    private String numberAct;
    private Date dateToReturn;
    private Date specefiedDate;
    private UnregisterOfCounter unregisterOfCounter;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Date getDateToReturn() {
        return dateToReturn;
    }

    public void setDateToReturn(Date dateToReturn) {
        this.dateToReturn = dateToReturn;
    }

    public Date getSpecefiedDate() {
        return specefiedDate;
    }

    public void setSpecefiedDate(Date specefiedDate) {
        this.specefiedDate = specefiedDate;
    }

    public String getNumberAct() {
        return numberAct;
    }

    public void setNumberAct(String numberAct) {
        this.numberAct = numberAct;
    }

    public UnregisterOfCounter getUnregisterOfCounter() {
        return unregisterOfCounter;
    }

    public void setUnregisterOfCounter(UnregisterOfCounter unregisterOfCounter) {
        this.unregisterOfCounter = unregisterOfCounter;
    }
}
