package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CorrectionCondition {
    private Long id;
    private Long docNumber1ID;
    private Long contraAgent1ID;
    private Long docNumber2ID;
    private Long contraAgent2ID;
    private Float sumCorrection;
    private Long servicePaymentID;
    private Long paymentTypeID;
    private String note;
    private Date dateStart;
    private Date dateEnd;
    private Long departmentID;
    private Long agreementDepartmentID;
    private Long agreementDepartmentID2;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public Long getContraAgent1ID() {
        return contraAgent1ID;
    }

    public void setContraAgent1ID(Long contraAgent1ID) {
        this.contraAgent1ID = contraAgent1ID;
    }

    public Long getDocNumber1ID() {
        return docNumber1ID;
    }

    public void setDocNumber1ID(Long docNumber1ID) {
        this.docNumber1ID = docNumber1ID;
    }

    public Long getDocNumber2ID() {
        return docNumber2ID;
    }

    public void setDocNumber2ID(Long docNumber2ID) {
        this.docNumber2ID = docNumber2ID;
    }

    public Long getContraAgent2ID() {
        return contraAgent2ID;
    }

    public void setContraAgent2ID(Long contraAgent2ID) {
        this.contraAgent2ID = contraAgent2ID;
    }

    public Float getSumCorrection() {
        return sumCorrection;
    }

    public void setSumCorrection(Float sumCorrection) {
        this.sumCorrection = sumCorrection;
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

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public void setDateStart(Date dateStart) {
        this.dateStart = dateStart;
    }

    public Date getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(Date dateEnd) {
        this.dateEnd = dateEnd;
    }

    public Long getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(Long departmentID) {
        this.departmentID = departmentID;
    }

    public Long getAgreementDepartmentID() {
        return agreementDepartmentID;
    }

    public void setAgreementDepartmentID(Long agreementDepartmentID) {
        this.agreementDepartmentID = agreementDepartmentID;
    }

    public Long getAgreementDepartmentID2() {
        return agreementDepartmentID2;
    }

    public void setAgreementDepartmentID2(Long agreementDepartmentID2) {
        this.agreementDepartmentID2 = agreementDepartmentID2;
    }
}
