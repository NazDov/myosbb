package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12.11.2014.
 */
public class DeleteInputSubRouteContainsQuery extends AbstractModifyQuery<DepartmentInput> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RegInputSubServiceContains]\n" +
                "   where regInfDepartmentInputID = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentInput value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
