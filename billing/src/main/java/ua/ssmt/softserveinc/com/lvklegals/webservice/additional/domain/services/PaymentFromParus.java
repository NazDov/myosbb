package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

import java.util.Date;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class PaymentFromParus {
    private String mfo;
    private String numberDoc;
    private String ownerBankAccount;
    private String payerBankAccount;
    private Double sumPayment;
    private String edrpo;
    private String reason;
    private Date datePayment;
    private Date dateD;
    private Long ownerBankAccountID;
    private String info;


    public Date getDatePayment() {
        return datePayment;
    }

    public void setDatePayment(Date datePayment) {
        this.datePayment = datePayment;
    }

    public String getMfo() {
        return mfo;
    }

    public void setMfo(String mfo) {
        this.mfo = mfo;
    }

    public String getNumberDoc() {
        return numberDoc;
    }

    public void setNumberDoc(String numberDoc) {
        this.numberDoc = numberDoc;
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

    public Double getSumPayment() {
        return sumPayment;
    }

    public void setSumPayment(Double sumPayment) {
        this.sumPayment = sumPayment;
    }

    public String getEdrpo() {
        return edrpo;
    }

    public void setEdrpo(String edrpo) {
        this.edrpo = edrpo;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public Long getOwnerBankAccountID() {
        return ownerBankAccountID;
    }

    public void setOwnerBankAccountID(Long ownerBankAccountID) {
        this.ownerBankAccountID = ownerBankAccountID;
    }

    public Date getDateD() {
        return dateD;
    }

    public void setDateD(Date dateD) {
        this.dateD = dateD;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
