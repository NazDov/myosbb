package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vostap on 05.11.2014.
 */
public class AddingByConsumingVolume {
    private Long id;
    private ContraAgent contraAgent;
    private Department department;
    private Input input;
    private Counter counter;
    private Double volume;
    private String label;
    private Date period;
    private DepartmentInput departmentInput;


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

    public Double getVolume() {
        return volume;
    }

    public void setVolume(Double volume) {
        this.volume = volume;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInput departmentInput) {
        this.departmentInput = departmentInput;
    }
}
