package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 19.09.2014.
 */
public class DeleteDepartmentQuery extends AbstractModifyQuery<Department> {

    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RefDepartaments]\n" +
                "      WHERE ID = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
