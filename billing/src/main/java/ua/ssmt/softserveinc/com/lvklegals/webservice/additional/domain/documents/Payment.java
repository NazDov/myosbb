package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vstoian on 24.11.2014.
 */
public class Payment {

    private Long id;
    private Date datePayment;
    private ContraAgent contraAgent;
    private Agreement agreement;
    private Double sumPayment;
    private ServicePayment servicePayment;
    private String numberDocPayment;
    private PaymentType paymentType;
    private String reason;
    private Bank bank;
    private String bankAccount;
    private Integer isAutomated;
    private OwnerBankAccount ownerBankAccount;
    private Correction correction;
    private SourceInputPayment sourceInputPayment;
    private Department department;
    private Agreement agreementDep;


    public Correction getCorrection() {
        return correction;
    }

    public void setCorrection(Correction correction) {
        this.correction = correction;
    }

    public Payment(){
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();
        this.servicePayment = new ServicePayment();
        this.paymentType = new PaymentType();
        this.ownerBankAccount = new OwnerBankAccount();
        this.bank = new Bank();
        this.correction = new Correction();
        this.sourceInputPayment = new SourceInputPayment();
        this.department = new Department();
        this.agreementDep = new Agreement();
    }

    public Payment(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDatePayment() {
        return datePayment;
    }

    public void setDatePayment(Date datePayment) {
        this.datePayment = datePayment;
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

    public Double getSumPayment() {
        return sumPayment;
    }

    public void setSumPayment(Double sumPayment) {
        this.sumPayment = sumPayment;
    }

    public ServicePayment getServicePayment() {
        return servicePayment;
    }

    public void setServicePayment(ServicePayment servicePayment) {
        this.servicePayment = servicePayment;
    }

    public String getNumberDocPayment() {
        return numberDocPayment;
    }

    public void setNumberDocPayment(String numberDocPayment) {
        this.numberDocPayment = numberDocPayment;
    }

    public PaymentType getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(PaymentType paymentType) {
        this.paymentType = paymentType;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Bank getBank() {
        return bank;
    }

    public void setBank(Bank bank) {
        this.bank = bank;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    public Integer getIsAutomated() {
        return isAutomated;
    }

    public void setIsAutomated(Integer isAutomated) {
        this.isAutomated = isAutomated;
    }

    public OwnerBankAccount getOwnerBankAccount() {
        return ownerBankAccount;
    }

    public void setOwnerBankAccount(OwnerBankAccount ownerBankAccount) {
        this.ownerBankAccount = ownerBankAccount;
    }

    public SourceInputPayment getSourceInputPayment() {
        return sourceInputPayment;
    }

    public void setSourceInputPayment(SourceInputPayment sourceInputPayment) {
        this.sourceInputPayment = sourceInputPayment;
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


}
