package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateSubRouteQuery extends AbstractModifyQuery<SubRoute> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RefSubRoutes]\n" +
                "   SET [RouteID] = ? \n" +
                "      ,[Name] = ? \n" +
                "      ,[userID] = ?  \n" +
                "      ,[currentDate] = GETDATE()  \n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SubRoute value) throws SQLException {
        st.setLong(1,value.getRoute().getId());
        st.setString(2,value.getName());
        st.setLong(3,value.getUserId());
        st.setLong(4,value.getId());
    }
}
