package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 04.09.2014.
 */
public class UpdateDepartmentQuery extends AbstractModifyQuery<Department> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RefDepartaments]\n" +
                "    set  [ConraAgentID] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getId());
    }
}
