package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vostap on 23.09.2014.
 */
public class CorrectionOfCounterCondition {
    private Long contraAgentID;
    private Long departmentID;
    private Long counterID;
    private Date period;
    private Long id;

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Long getCounterID() {
        return counterID;
    }

    public void setCounterID(Long counterID) {
        this.counterID = counterID;
    }

    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Long getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(Long departmentID) {
        this.departmentID = departmentID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
