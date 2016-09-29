package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ControllerCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchControllerQuery extends AbstractSelectQuery<Controller,ControllerCondition> {
    public SearchControllerQuery(ControllerCondition condition) {
        super(condition);
    }

    @Override
    protected Controller parseResultSet(ResultSet rs) throws SQLException {
        Controller res = new Controller();
        res.setId(rs.getLong("controllerID"));
        res.setName(rs.getString("controllerName"));
        res.setRegisterID(rs.getLong("registrID"));
        res.setPeriod(rs.getDate("period"));
        res.setSubRoute(this.fillSubRoute(rs));
        return res;
    }

    private SubRoute fillSubRoute(ResultSet rs) throws SQLException {
        SubRoute res = new SubRoute();
        res.setId(rs.getLong("subrouteID"));
        res.setName(rs.getString("SrouteName"));
        res.setRoute(this.fillRoute(rs));
        return res;
    }

    private Route fillRoute(ResultSet rs) throws SQLException {
        Route res = new Route();
        res.setId(rs.getLong("routeID"));
        res.setName(rs.getString("RouteName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" reg.[id] as registrID   ");
        sb.append(" ,[RouteID] as routeID          ");
        sb.append(" ,[ControllerID] as controllerID ");
        sb.append(" ,sr.[Name] as SrouteName            ");
        sb.append(" ,c.[Name] as controllerName  ");
        sb.append(" ,routes.Name as RouteName  ");
        sb.append(" ,sr.ID as subrouteID  ");
        sb.append(" ,reg.[Period] as period");
        sb.append(" FROM [dbo].[RegInfSubRouteController] reg   ");
        sb.append(" left join [RefControllers] as c on  ");
        sb.append(" c.id = reg.ControllerID    ");
        sb.append(" left join [RefSubRoutes] as sr on  ");
        sb.append(" sr.id = reg.SubRouteID     ");
        sb.append(" left join RefRoutes as routes on  ");
        sb.append(" sr.RouteID = routes.id  ");
        sb.append(" where 1=1   ");
        if (condition.getName() != null)
            sb.append(" and sr.Name like '%"+condition.getName().trim()+"%'" );
        if (condition.getId() != null)
            sb.append(" and ControllerID ="+condition.getId());
        sb.append(" order by reg.[Period] desc");
        return sb.toString();
    }
}
