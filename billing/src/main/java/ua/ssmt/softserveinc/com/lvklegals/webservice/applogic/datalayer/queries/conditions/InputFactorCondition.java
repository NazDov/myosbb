package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import java.util.Date;

/**
 * Created by vostap on 17.10.2014.
 */
public class InputFactorCondition {
    private Long registerCounterID;
    private Long unregisterCounterID;
    private Long counterID;
    private Long correctionCounterID;
    private Long kontragentId;
    private Long id;
    private Long subRouteID;
    private Long routeID;
    private Date period;

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Long getRegisterCounterID() {
        return registerCounterID;
    }

    public void setRegisterCounterID(Long registerCounterID) {
        this.registerCounterID = registerCounterID;
    }

    public Long getUnregisterCounterID() {
        return unregisterCounterID;
    }

    public void setUnregisterCounterID(Long unregisterCounterID) {
        this.unregisterCounterID = unregisterCounterID;
    }

    public Long getCounterID() {
        return counterID;
    }

    public void setCounterID(Long counterID) {
        this.counterID = counterID;
    }

    public Long getCorrectionCounterID() {
        return correctionCounterID;
    }

    public void setCorrectionCounterID(Long correctionCounterID) {
        this.correctionCounterID = correctionCounterID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSubRouteID() {
        return subRouteID;
    }

    public void setSubRouteID(Long subRouteID) {
        this.subRouteID = subRouteID;
    }

    public Long getKontragentId() {
        return kontragentId;
    }

    public void setKontragentId(Long kontragentId) {
        this.kontragentId = kontragentId;
    }

    public Long getRouteID() {
        return routeID;
    }

    public void setRouteID(Long routeID) {
        this.routeID = routeID;
    }
}
