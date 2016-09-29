package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vostap on 6/2/2015.
 */
public class CalcInvoiceVolumeLKPCondition {
    private Long contraAgentID;
    private Date period;
    private Long departmentID;
    private Long departmentAgreementID;

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

    public Long getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(Long departmentID) {
        this.departmentID = departmentID;
    }

    public Long getDepartmentAgreementID() {
        return departmentAgreementID;
    }

    public void setDepartmentAgreementID(Long departmentAgreementID) {
        this.departmentAgreementID = departmentAgreementID;
    }
}
