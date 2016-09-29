package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains.norma;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.RainNorma;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 04.04.2016.
 */
public class GetAllRainsNormaQuery extends AbstractSelectQuery<RainNorma,Void> {
    public GetAllRainsNormaQuery(Void condition) {
        super(condition);
    }

    @Override
    protected RainNorma parseResultSet(ResultSet rs) throws SQLException {
        RainNorma res = new RainNorma();
        res.setId(rs.getLong("id"));
        res.setNorma(rs.getDouble("RainsNorma"));
        res.setPeriod(rs.getDate("Period"));
        res.setDepartment(new Department(rs.getLong("DepartmentID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(" ,[DepartmentID]  ");
        sb.append("  ,[RainsNorma]   ");
        sb.append(" ,[Period]   ");
        sb.append(" FROM [dbo].[RegInfDepartmentRainsAddingNorma]   ");
        sb.append(" where    ");
        sb.append(" Period <= dbo.getCurrentPeriod()   ");
        sb.append(" order by period desc   ");
        return sb.toString();
    }
}
