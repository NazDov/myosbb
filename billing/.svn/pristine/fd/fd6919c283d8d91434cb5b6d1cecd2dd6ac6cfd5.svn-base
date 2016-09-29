package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentSubRouteCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 28.10.2014.
 */
public class SearchDepartmentSubRouteQuery extends AbstractSelectQuery<DepartmentSubRoute,DepartmentSubRouteCondition> {
    public SearchDepartmentSubRouteQuery(DepartmentSubRouteCondition condition) {
        super(condition);
    }

    @Override
    protected DepartmentSubRoute parseResultSet(ResultSet rs) throws SQLException {
        DepartmentSubRoute res = new DepartmentSubRoute();
        res.setId(rs.getLong("id"));
        res.setSubRoute(this.fillSubRoute(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }

    private SubRoute fillSubRoute(ResultSet rs) throws SQLException {
        SubRoute res = new SubRoute();
        res.setId(rs.getLong("SubRouteID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" id  ");
        sb.append(" ,[SubRouteID]   ");
        sb.append(" ,[Period]   ");
        sb.append("  ,[CreateDate]   ");
        sb.append("  ,[DepartmentID]   ");
        sb.append(" FROM [dbo].[RegDepartmentSubRoute] as dsr  ");
        sb.append(" where Period <= dbo.getCurrentPeriod()  ");
        if (condition.getDepartmentID() != null)
            sb.append(" and DepartmentID = "+condition.getDepartmentID());
        if (condition.getPeriod() != null)
            sb.append(" and Period = '"+new Fillers().getDateAsString(condition.getPeriod())+"'");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        sb.append(" order by Period desc");
        //(sb.toString());
        return sb.toString();
    }
}
