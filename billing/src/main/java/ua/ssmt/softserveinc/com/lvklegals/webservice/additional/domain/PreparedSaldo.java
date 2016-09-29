package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

/**
 * Created by vostap on 12/7/2015.
 */
public class PreparedSaldo {
    private ContraAgent contraAgent;
    private Agreement agreement;

    private double sumaInvoiceVVVP;
    private double sumInvoiceRains;
    private double sumInvoiceCorrectionRealize;
    private double sumInvoiceByLkp;
    private double sumInvoicePhys;

    private double sumPaymentVVVP;
    private double sumPaymentP33;
    private double sumPaymentToPromyv;
    private double sumPaymentCommision;

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

    public double getSumaInvoiceVVVP() {
        return sumaInvoiceVVVP;
    }

    public void setSumaInvoiceVVVP(double sumaInvoiceVVVP) {
        this.sumaInvoiceVVVP = sumaInvoiceVVVP;
    }

    public double getSumInvoiceRains() {
        return sumInvoiceRains;
    }

    public void setSumInvoiceRains(double sumInvoiceRains) {
        this.sumInvoiceRains = sumInvoiceRains;
    }

    public double getSumInvoiceCorrectionRealize() {
        return sumInvoiceCorrectionRealize;
    }

    public void setSumInvoiceCorrectionRealize(double sumInvoiceCorrectionRealize) {
        this.sumInvoiceCorrectionRealize = sumInvoiceCorrectionRealize;
    }

    public double getSumInvoiceByLkp() {
        return sumInvoiceByLkp;
    }

    public void setSumInvoiceByLkp(double sumInvoiceByLkp) {
        this.sumInvoiceByLkp = sumInvoiceByLkp;
    }

    public double getSumInvoicePhys() {
        return sumInvoicePhys;
    }

    public void setSumInvoicePhys(double sumInvoicePhys) {
        this.sumInvoicePhys = sumInvoicePhys;
    }

    public double getSumPaymentVVVP() {
        return sumPaymentVVVP;
    }

    public void setSumPaymentVVVP(double sumPaymentVVVP) {
        this.sumPaymentVVVP = sumPaymentVVVP;
    }

    public double getSumPaymentP33() {
        return sumPaymentP33;
    }

    public void setSumPaymentP33(double sumPaymentP33) {
        this.sumPaymentP33 = sumPaymentP33;
    }

    public double getSumPaymentToPromyv() {
        return sumPaymentToPromyv;
    }

    public void setSumPaymentToPromyv(double sumPaymentToPromyv) {
        this.sumPaymentToPromyv = sumPaymentToPromyv;
    }

    public double getSumPaymentCommision() {
        return sumPaymentCommision;
    }

    public void setSumPaymentCommision(double sumPaymentCommision) {
        this.sumPaymentCommision = sumPaymentCommision;
    }
}
