package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vstoian on 15.01.2015.
 */
public class UnparsedPaymentCondition {
    private Long id;
    private String mfo;
    private String numberDocPayment;
    private String ownerBankAccount;
    private String payerBankAccount;
    private Float sumPayment;
    private String payer;
    private String reason;
    private Date datePayment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMfo() {
        return mfo;
    }

    public void setMfo(String mfo) {
        this.mfo = mfo;
    }

    public String getNumberDocPayment() {
        return numberDocPayment;
    }

    public void setNumberDocPayment(String numberDocPayment) {
        this.numberDocPayment = numberDocPayment;
    }

    public String getOwnerBankAccount() {
        return ownerBankAccount;
    }

    public void setOwnerBankAccount(String ownerBankAccount) {
        this.ownerBankAccount = ownerBankAccount;
    }

    public String getPayerBankAccount() {
        return payerBankAccount;
    }

    public void setPayerBankAccount(String payerBankAccount) {
        this.payerBankAccount = payerBankAccount;
    }

    public Float getSumPayment() {
        return sumPayment;
    }

    public void setSumPayment(Float sumPayment) {
        this.sumPayment = sumPayment;
    }

    public String getPayer() {
        return payer;
    }

    public void setPayer(String payer) {
        this.payer = payer;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Date getDatePayment() {
        return datePayment;
    }

    public void setDatePayment(Date datePayment) {
        this.datePayment = datePayment;
    }
}
