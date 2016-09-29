package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class Correction {
    Long id;
    Date dateCorrection;
    Agreement docNumberOne;
    ContraAgent contraAgentOne;
    PaymentType paymentType;
    Agreement docNumberTwo;
    ContraAgent contraAgentTwo;
    Double sumCorrection;
    ServicePayment servicePayment;
    ServicePayment servicePaymentsecond;
    InternalTurnOver internalTurnOver;
    String notes;
    Date period;
    Department departmentOne;
    Department departmentTwo;
    Agreement agreementDepOne;
    Agreement agreementDepTwo;
    List<Payment> payments = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateCorrection() {
        return dateCorrection;
    }

    public void setDateCorrection(Date dateCorrection) {
        this.dateCorrection = dateCorrection;
    }

    public Agreement getDocNumberOne() {
        return docNumberOne;
    }

    public void setDocNumberOne(Agreement docNumberOne) {
        this.docNumberOne = docNumberOne;
    }

    public ContraAgent getContraAgentOne() {
        return contraAgentOne;
    }

    public void setContraAgentOne(ContraAgent contraAgentOne) {
        this.contraAgentOne = contraAgentOne;
    }

    public PaymentType getPaymentType() {
        return paymentType;
    }

    public void setPaymentType(PaymentType paymentType) {
        this.paymentType = paymentType;
    }

    public Agreement getDocNumberTwo() {
        return docNumberTwo;
    }

    public void setDocNumberTwo(Agreement docNumberTwo) {
        this.docNumberTwo = docNumberTwo;
    }

    public ContraAgent getContraAgentTwo() {
        return contraAgentTwo;
    }

    public void setContraAgentTwo(ContraAgent contraAgentTwo) {
        this.contraAgentTwo = contraAgentTwo;
    }

    public Double getSumCorrection() {
        return sumCorrection;
    }

    public void setSumCorrection(Double sumCorrection) {
        this.sumCorrection = sumCorrection;
    }

    public ServicePayment getServicePayment() {
        return servicePayment;
    }

    public void setServicePayment(ServicePayment servicePayment) {
        this.servicePayment = servicePayment;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public ServicePayment getServicePaymentsecond() {;
        return servicePaymentsecond;
    }

    public void setServicePaymentsecond(ServicePayment servicePaymentsecond) {
        this.servicePaymentsecond = servicePaymentsecond;
    }

    public InternalTurnOver getInternalTurnOver() {
        return internalTurnOver;
    }

    public void setInternalTurnOver(InternalTurnOver internalTurnOver) {
        this.internalTurnOver = internalTurnOver;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Department getDepartmentOne() {
        return departmentOne;
    }

    public void setDepartmentOne(Department departmentOne) {
        this.departmentOne = departmentOne;
    }

    public Department getDepartmentTwo() {
        return departmentTwo;
    }

    public void setDepartmentTwo(Department departmentTwo) {
        this.departmentTwo = departmentTwo;
    }

    public Agreement getAgreementDepOne() {
        return agreementDepOne;
    }

    public void setAgreementDepOne(Agreement agreementDepOne) {
        this.agreementDepOne = agreementDepOne;
    }

    public Agreement getAgreementDepTwo() {
        return agreementDepTwo;
    }

    public void setAgreementDepTwo(Agreement agreementDepTwo) {
        this.agreementDepTwo = agreementDepTwo;
    }

    public List<Payment> getPayments() {
        return payments;
    }

    public void setPayments(List<Payment> payments) {
        this.payments = payments;
    }
}
