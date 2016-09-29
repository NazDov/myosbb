package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vstoian on 27.01.2015.
 */
public class Commission {

    private Long id;
    private Date dateComission;
    private Agreement agreement;
    private ContraAgent contraAgent;
    private Department department;
    private Double sumCommission;
    private String notes;
    private Algorithm algorithm;
    private Double sumPayment;
    private Date period;
    private ServicePayment servicePayment;
    private Agreement agreementDep;
    private Integer isAutomated;

    public Double getSumPayment() {
        return sumPayment;
    }

    public void setSumPayment(Double sumPayment) {
        this.sumPayment = sumPayment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateComission() {
        return dateComission;
    }

    public void setDateComission(Date dateComission) {
        this.dateComission = dateComission;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
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

    public Double getSumCommission() {
        return sumCommission;
    }

    public void setSumCommission(Double sumCommission) {
        this.sumCommission = sumCommission;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Algorithm getAlgorithm() {
        return algorithm;
    }

    public void setAlgorithm(Algorithm algorithm) {
        this.algorithm = algorithm;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public ServicePayment getServicePayment() {
        return servicePayment;
    }

    public void setServicePayment(ServicePayment servicePayment) {
        this.servicePayment = servicePayment;
    }

    public Agreement getAgreementDep() {
        return agreementDep;
    }

    public void setAgreementDep(Agreement agreementDep) {
        this.agreementDep = agreementDep;
    }

    public Integer getIsAutomated() {
        return isAutomated;
    }

    public void setIsAutomated(Integer isAutomated) {
        this.isAutomated = isAutomated;
    }

    public Commission(){
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();
        this.department = new Department();
        this.servicePayment = new ServicePayment();
        this.agreementDep = new Agreement();
    }

    public Commission(Long id) {
        this();
        this.id = id;
    }


}
