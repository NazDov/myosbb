package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 04.09.2014.
 */
public class CreateDepartmentQuery extends AbstractModifyQuery<Department> {
    @Override
    protected String getSQLQuery() {
         return  "INSERT INTO [dbo].[RefDepartaments]\n" +
              "           ([ConraAgentID])\n" +
              "     VALUES\n" +
              "           (?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
    }
}
