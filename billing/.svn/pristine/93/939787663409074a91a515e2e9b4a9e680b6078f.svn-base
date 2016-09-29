package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 25.12.2015.
 */
public class GetAllRainsQuery extends AbstractSelectQuery<Rains,Void> {
    public GetAllRainsQuery(Void condition) {
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
        sb.append("  where 1=1 and Period <= dbo.getCurrentPeriod()  ");
        sb.append(" order by period desc");
        return sb.toString();
    }
}
