package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

/**
 * Created by ykhav on 22.05.15.
 */
public class DepartamentFreeKontoCondition {
    private Long routeID;
    private Long subRouteID;


    public Long getSubRouteID() {
        return subRouteID;
    }

    public void setSubRouteID(Long subRouteID) {
        this.subRouteID = subRouteID;
    }

    public Long getRouteID() {
        return routeID;
    }

    public void setRouteID(Long routeID) {
        this.routeID = routeID;
    }
}
