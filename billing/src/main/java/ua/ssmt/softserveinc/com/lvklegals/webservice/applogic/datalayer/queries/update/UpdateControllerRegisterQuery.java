package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateControllerRegisterQuery extends AbstractModifyQuery<Controller> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfSubRouteController]\n" +
                "   SET [SubRouteID] = ? \n" +
                "      ,[ControllerID] = ? \n" +
                " WHERE ID = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Controller value) throws SQLException {
        st.setLong(1,value.getSubRoute().getId());
        st.setLong(2,value.getId());
        st.setLong(3,value.getRegisterID());

    }


}
