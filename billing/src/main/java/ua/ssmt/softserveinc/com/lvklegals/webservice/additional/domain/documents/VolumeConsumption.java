package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class VolumeConsumption {
    Long id;
    Date date;
    Date period;
    ContraAgent contraAgent;
    Agreement agreement;
    Department department;
    Agreement agreementDep;
    Input input;
    Double volumeVp;
    Double volumeVv;
    Double volumeVPHotWatter;
    DepartmentInput departmentInput;
    private Service service;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Agreement getAgreementDep() {
        return agreementDep;
    }

    public void setAgreementDep(Agreement agreementDep) {
        this.agreementDep = agreementDep;
    }

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public Double getVolumeVp() {
        return volumeVp;
    }

    public void setVolumeVp(Double volumeVp) {
        this.volumeVp = volumeVp;
    }

    public Double getVolumeVv() {
        return volumeVv;
    }

    public void setVolumeVv(Double volumeVv) {
        this.volumeVv = volumeVv;
    }

    public Double getVolumeVPHotWatter() {
        return volumeVPHotWatter;
    }

    public void setVolumeVPHotWatter(Double volumeVPHotWatter) {
        this.volumeVPHotWatter = volumeVPHotWatter;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInput departmentInput) {
        this.departmentInput = departmentInput;
    }
}
