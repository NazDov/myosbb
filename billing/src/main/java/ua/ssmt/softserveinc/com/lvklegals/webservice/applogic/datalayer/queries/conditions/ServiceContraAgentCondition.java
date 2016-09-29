package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;


import java.util.Date;

/**
 * Created by vostap on 05.09.2014.
 */
public class ServiceContraAgentCondition  {

    private Long contraAgentID;
    private Date period;

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
}
