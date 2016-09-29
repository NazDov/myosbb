package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vostap on 11/26/2015.
 */
public class SumPaymentCondition  {
    private Long contraAgentID;
    private Long servicePaymentID;
    private Date date1;
    private Date date2;
    private Long agreementID;

    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Long getServicePaymentID() {
        return servicePaymentID;
    }

    public void setServicePaymentID(Long servicePaymentID) {
        this.servicePaymentID = servicePaymentID;
    }

    public Date getDate1() {
        return date1;
    }

    public void setDate1(Date date1) {
        this.date1 = date1;
    }

    public Date getDate2() {
        return date2;
    }

    public void setDate2(Date date2) {
        this.date2 = date2;
    }

    public Long getAgreementID() {
        return agreementID;
    }

    public void setAgreementID(Long agreementID) {
        this.agreementID = agreementID;
    }
}
