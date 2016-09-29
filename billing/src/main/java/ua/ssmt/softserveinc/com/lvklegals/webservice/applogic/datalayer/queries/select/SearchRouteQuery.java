package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RouteConditions;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchRouteQuery extends AbstractSelectQuery<Route,RouteConditions> {
    public SearchRouteQuery(RouteConditions condition) {
        super(condition);
    }

    @Override
    protected Route parseResultSet(ResultSet rs) throws SQLException {
        Route res = new Route();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id] ");
        sb.append(" ,[Name]   ");
        sb.append(" FROM [dbo].[RefRoutes]  ");
        sb.append(" where 1=1  ");
        if (condition.getName() != null)
            sb.append("  and  [name] like '%"+condition.getName()+"%'  ");
        return sb.toString();
    }
}
