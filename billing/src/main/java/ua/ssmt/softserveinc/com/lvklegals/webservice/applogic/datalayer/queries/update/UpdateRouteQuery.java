package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateRouteQuery extends AbstractModifyQuery<Route> {
    @Override
    protected String getSQLQuery() {
        return  "UPDATE [dbo].[RefRoutes]\n" +
                "   SET [Name] = ?\n" +
                "      ,[userID] = ?  \n" +
                "      ,[currentDate] = GETDATE()  \n" +
                " WHERE ID = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Route value) throws SQLException {
        st.setString(1,value.getName());
        st.setLong(2, value.getUserId());
        st.setLong(3,value.getId());
    }
}
