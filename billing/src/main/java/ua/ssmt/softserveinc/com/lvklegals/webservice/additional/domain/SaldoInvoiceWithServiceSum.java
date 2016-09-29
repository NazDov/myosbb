package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

/**
 * Created by vostap on 01.03.2016.
 */
public class SaldoInvoiceWithServiceSum {
    private Agreement agreement;
    private double sum;
    private double servicePaymentID;
    private ServicePayment servicePayment;

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public double getSum() {
        return sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }

    public double getServicePaymentID() {
        return servicePaymentID;
    }

    public void setServicePaymentID(double servicePaymentID) {
        this.servicePaymentID = servicePaymentID;
    }

    public ServicePayment getServicePayment() {
        return servicePayment;
    }

    public void setServicePayment(ServicePayment servicePayment) {
        this.servicePayment = servicePayment;
    }
}

