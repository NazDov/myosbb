package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vstoian on 27.01.2015.
 */
public class PaymentCondition {
    private Long id;
    private Long contraAgentID;
    private Long agreementID;
    private Long servicePaymentID;
    private Long paymentTypeID;
    private Long accountOwner;
    private String reason;
    private Double nSum;
    private String docNumber;
    private Date dateBegin;
    private Date dateEnd;
    private Long correctionId;
    private Date paymentDate;
    private String agreementNumber;
    private Long agreementDepartmentID;


    public Long getCorrectionId() {
        return correctionId;
    }

    public void setCorrectionId(Long correctionId) {
        this.correctionId = correctionId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateBegin() {
        return dateBegin;
    }

    public void setDateBegin(Date dateBegin) {
        this.dateBegin = dateBegin;
    }

    public Date getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(Date dateEnd) {
        this.dateEnd = dateEnd;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        reason = reason;
    }

    public Double getnSum() {
        return nSum;
    }

    public void setnSum(Double nSum) {
        this.nSum = nSum;
    }

    public String getDocNumber() {
        return docNumber;
    }

    public void setDocNumber(String docNumber) {
        this.docNumber = docNumber;
    }

    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Long getAgreementID() {
        return agreementID;
    }

    public void setAgreementID(Long agreementID) {
        this.agreementID = agreementID;
    }

    public Long getServicePaymentID() {
        return servicePaymentID;
    }

    public void setServicePaymentID(Long servicePaymentID) {
        this.servicePaymentID = servicePaymentID;
    }

    public Long getPaymentTypeID() {
        return paymentTypeID;
    }

    public void setPaymentTypeID(Long paymentTypeID) {
        this.paymentTypeID = paymentTypeID;
    }

    public Long getAccountOwner() {
        return accountOwner;
    }

    public void setAccountOwner(Long accountOwner) {
        this.accountOwner = accountOwner;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    public Long getAgreementDepartmentID() {
        return agreementDepartmentID;
    }

    public void setAgreementDepartmentID(Long agreementDepartmentID) {
        this.agreementDepartmentID = agreementDepartmentID;
    }
}
