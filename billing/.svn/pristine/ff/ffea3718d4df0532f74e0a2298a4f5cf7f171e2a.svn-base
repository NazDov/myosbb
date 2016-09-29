package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 15.01.2015.
 */
public class DeleteDepartmentSubRouteQuery extends AbstractModifyQuery<DepartmentSubRoute> {
    @Override
    protected String getSQLQuery() {
        return "delete FROM [dbo].[RegDepartmentSubRoute] where id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentSubRoute value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
