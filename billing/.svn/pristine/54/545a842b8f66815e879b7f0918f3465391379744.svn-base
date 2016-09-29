package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SubRouteCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchSubRouteQuery extends AbstractSelectQuery<SubRoute,SubRouteCondition> {
    public SearchSubRouteQuery(SubRouteCondition condition) {
        super(condition);
    }

    @Override
    protected SubRoute parseResultSet(ResultSet rs) throws SQLException {
        SubRoute res = new SubRoute();
        res.setName(rs.getString("Name"));
        res.setId(rs.getLong("id"));
        res.setRoute(this.fillRoute(rs));
        return res;
    }

    private Route fillRoute(ResultSet rs) throws SQLException {
        Route res = new Route();
        res.setId(rs.getLong("RouteID"));
        res.setName(rs.getString("RouteName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" s.[id]   ");
        sb.append(" ,s.[RouteID]   ");
        sb.append(" ,s.[Name]     ");
        sb.append(" ,r.[Name] as RouteName");
        sb.append(" FROM [RefSubRoutes] as s left join [RefRoutes] as r on  s.RouteID= r.ID   ");
        sb.append(" where 1=1   ");
        if (condition.getSubRouteName() != null && condition.getSubRouteName().isEmpty() == false)
            sb.append(" and s.Name like '%"+this.condition.getSubRouteName().trim()+"%'" );
        if (condition.getRouteName() != null && condition.getRouteName().isEmpty() == false)
            sb.append(" and r.Name like '%"+this.condition.getRouteName().trim()+"%'");
        if (condition.getId() != null)
            sb.append(" and s.[id] = "+condition.getId());
        if (condition.getRouteID() != null)
            sb.append(" and s.[RouteID] = "+condition.getRouteID());
        return sb.toString();
    }
}
