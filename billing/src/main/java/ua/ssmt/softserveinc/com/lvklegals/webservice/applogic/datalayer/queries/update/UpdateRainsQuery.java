package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 01.12.2014.
 */
public class UpdateRainsQuery extends AbstractModifyQuery<Rains> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegRains]\n" +
                "   SET\n" +
                "       [Area] = ?\n" +
                "       ,[DistributedCoef] = ?\n" +
                "       ,[AreaTypeID] = ?\n" +
                "   WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Rains value) throws SQLException {
        st.setDouble(1,value.getArea());
        st.setDouble(2,value.getDistributedCoeficient());
        st.setLong(3,value.getAreaType().getId());
        st.setLong(4,value.getId());
    }
}
