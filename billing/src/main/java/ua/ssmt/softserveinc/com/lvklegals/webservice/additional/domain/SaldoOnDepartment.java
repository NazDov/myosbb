package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

/**
 * Created by vostap on 12/9/2015.
 */
public class SaldoOnDepartment {
    private ContraAgent contraAgent;
    private Agreement agreement;
    private Department department;
    private double saldoOnBegin;
    private double invoice;
    private double payments;
    private double soldoOnEnd;

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

    public double getSaldoOnBegin() {
        return saldoOnBegin;
    }

    public void setSaldoOnBegin(double saldoOnBegin) {
        this.saldoOnBegin = saldoOnBegin;
    }

    public double getInvoice() {
        return invoice;
    }

    public void setInvoice(double invoice) {
        this.invoice = invoice;
    }

    public double getPayments() {
        return payments;
    }

    public void setPayments(double payments) {
        this.payments = payments;
    }

    public double getSoldoOnEnd() {
        return soldoOnEnd;
    }

    public void setSoldoOnEnd(double soldoOnEnd) {
        this.soldoOnEnd = soldoOnEnd;
    }
}
