package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 20.09.2014.
 */
public class DeleteDepartmentPropertyQuery extends AbstractModifyQuery<Department> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [RegInfDepartamentCharacters] \n" +
                "      WHERE DepartmentID =?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
          st.setLong(1,value.getId());
          st.setLong(1,value.getId());
    }
}
