package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 30.10.2014.
 */
public class UpdateDepartmentTariffCategoryQuery extends AbstractModifyQuery<Department> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfDepartamentCharacters]\n" +
                "   SET [CategoryID] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Department value) throws SQLException {
        st.setLong(1,value.getProperty().getCategoryOfTariff().getId());
        st.setLong(2,value.getProperty().getId());
    }
}
