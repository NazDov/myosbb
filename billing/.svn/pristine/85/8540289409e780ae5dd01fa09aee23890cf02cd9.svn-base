package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vstoian on 24.11.2014.
 */
public class PaymentDepartment {

    private Long id;
    private Date datePayment;
    private ContraAgent contraAgent;
    private Agreement agreement;
    private Agreement contragentAgreement;
    private ServicePayment servicePayment;
    private PaymentType paymentType;
    private Date period;
    private Department department;
    private Double sumPayment;
    private String note;


    public PaymentDepartment(){
        this.contraAgent = new ContraAgent();
        this.department = new Department();
        this.contragentAgreement = new Agreement();
        this.agreement = new Agreement();
        this.servicePayment = new ServicePayment();
        this.paymentType = new PaymentType();

    }

    public PaymentDepartment(Long id) {
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

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Double getSumPayment() {
        return sumPayment;
    }

    public void setSumPayment(Double sumPayment) {
        this.sumPayment = sumPayment;
    }

     public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Agreement getContragentAgreement() {
        return contragentAgreement;
    }

    public void setContragentAgreement(Agreement contragentAgreement) {
        this.contragentAgreement = contragentAgreement;
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

    public PaymentType getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(PaymentType paymentType) {
        this.paymentType = paymentType;
    }
}
