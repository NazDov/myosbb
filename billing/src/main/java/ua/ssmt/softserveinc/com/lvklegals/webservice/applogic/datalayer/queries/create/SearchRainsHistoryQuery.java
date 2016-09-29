package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 01.12.2014.
 */
public class SearchRainsHistoryQuery extends AbstractSelectQuery<Rains,RainsCondition> {
    public SearchRainsHistoryQuery(RainsCondition condition) {
        super(condition);
    }

    @Override
    protected Rains parseResultSet(ResultSet rs) throws SQLException {
        Rains res = new Rains();
        res.setId(rs.getLong("ID"));
        res.setArea(rs.getDouble("Area"));
        res.setAreaType(fillAreaType(rs));
        res.setDepartment(fillDepartment(rs));
        res.setPeriod(rs.getDate("Period"));
        res.setDistributedCoeficient(rs.getDouble("DistributedCoef"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("departmentID"));
        return res;
    }

    private AreaType fillAreaType(ResultSet rs) throws SQLException {
        AreaType res = new AreaType();
        res.setId(rs.getLong("AreaTypeID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]   ");
        sb.append(" ,[departmentID]  ");
        sb.append(" ,[AreaTypeID]  ");
        sb.append(" ,[Area]   ");
        sb.append(" ,[Period]");
        sb.append(" ,[DistributedCoef]  ");
        sb.append(" FROM [dbo].[RegRains]  ");
        sb.append("  where 1=1 and Period < dbo.getCurrentPeriod()  ");
        if (condition.getDepartmentID() != null)
            sb.append(" and departmentID = "+condition.getDepartmentID());
        if (condition.getAreaTypeID() != null){
            sb.append(" and AreaTypeID = "+condition.getAreaTypeID());
        }
        if (condition.getPeriod() != null){
            sb.append(" and [Period] = "+this.getDateAsString(condition.getPeriod()));
        }
        sb.append(" order by period desc");
        ////(sb.toString());
        return sb.toString();
    }
}
