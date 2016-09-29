package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vostap on 9/30/2015.
 */
public class PaymentToDelete {

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
    private String edrpo;

    public Correction getCorrection() {
        return correction;
    }

    public void setCorrection(Correction correction) {
        this.correction = correction;
    }

    public PaymentToDelete(){
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();
        this.servicePayment = new ServicePayment();
        this.paymentType = new PaymentType();
        this.ownerBankAccount = new OwnerBankAccount();
        this.bank = new Bank();
        this.correction = new Correction();
    }

    public PaymentToDelete(Long id) {
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

    public String getEdrpo() {
        return edrpo;
    }

    public void setEdrpo(String edrpo) {
        this.edrpo = edrpo;
    }
}
