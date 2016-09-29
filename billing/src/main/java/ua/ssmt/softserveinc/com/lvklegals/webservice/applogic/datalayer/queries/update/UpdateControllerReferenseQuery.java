package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateControllerReferenseQuery extends AbstractModifyQuery<ControllersReferense> {
    @Override
    protected String getSQLQuery() {
        return
                "UPDATE [dbo].[RefControllers]\n" +
                "   SET [Name] =?\n" +
                " WHERE id = ?";

    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ControllersReferense value) throws SQLException {
        st.setString(1,value.getName());
        st.setLong(2,value.getId());
    }
}
