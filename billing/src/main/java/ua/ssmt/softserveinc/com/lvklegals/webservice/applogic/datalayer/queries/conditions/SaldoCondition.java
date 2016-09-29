package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vostap on 6/7/2015.
 */
public class SaldoCondition {
    private Long contraAgentID;
    private Date period;
    private Long agreementID;
    private Long saldoGroupID;


    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Long getAgreementID() {
        return agreementID;
    }

    public void setAgreementID(Long agreementID) {
        this.agreementID = agreementID;
    }

    public Long getSaldoGroupID() {
        return saldoGroupID;
    }

    public void setSaldoGroupID(Long saldoGroupID) {
        this.saldoGroupID = saldoGroupID;
    }
}
