package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.04.2015.
 */
public class GetTarrifCategoryByDepartmentIDPQquery extends AbstractSelectPreCompileQuery<CategoryOfTariff,Long> {
    public GetTarrifCategoryByDepartmentIDPQquery(Connection connection, Long condition) {
        super(connection, condition);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        st.setLong(1,condition);
    }

    @Override
    protected CategoryOfTariff parseResultSet(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("CategoryID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select CategoryID from (  ");
        sb.append("         select max(id) as id, DepartmentID, max(Period) as period from RegInfDepartamentCharacters  ");
        sb.append("         where Period <= dbo.getCurrentPeriod()  ");
        sb.append("         group by DepartmentID) as tmp   ");
        sb.append("  left join RegInfDepartamentCharacters as c on   ");
        sb.append("  tmp.id = c.id   ");
        sb.append("  where tmp.DepartmentID = ?  ");
        return sb.toString();
    }
}
