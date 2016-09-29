package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;

import java.util.Date;

/**
 * Created by vostap on 21.10.2014.
 */
public class AddingByCapacityTube {
    private Long id;
    private ContraAgent contraAgent;
    private Department department;
    private Input input;
    private Double volumeWatterSupply;
    private Double volumeWatterOut;
    private Double sumWatterSupply;
    private Double sumWatterOut;
    private String label;
    private Agreement agreement;
    private Date period;

    public AddingByCapacityTube(){
        this.contraAgent = new ContraAgent();
        this.department = new Department();
        this.input = new Input();
    }

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

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Double getVolumeWatterOut() {
        return volumeWatterOut;
    }

    public void setVolumeWatterOut(Double volumeWatterOut) {
        this.volumeWatterOut = volumeWatterOut;
    }

    public Double getVolumeWatterSupply() {
        return volumeWatterSupply;
    }

    public void setVolumeWatterSupply(Double volumeWatterSupply) {
        this.volumeWatterSupply = volumeWatterSupply;
    }

    public Double getSumWatterSupply() {
        return sumWatterSupply;
    }

    public void setSumWatterSupply(Double sumWatterSupply) {
        this.sumWatterSupply = sumWatterSupply;
    }

    public Double getSumWatterOut() {
        return sumWatterOut;
    }

    public void setSumWatterOut(Double sumWatterOut) {
        this.sumWatterOut = sumWatterOut;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }
}
