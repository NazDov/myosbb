package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class DeleteRegisterControllerQuery extends AbstractModifyQuery<Controller> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RegInfSubRouteController]\n" +
                "      WHERE controllerID = ? and Period = (select top 1 currentPeriod from currentPeriod)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Controller value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
