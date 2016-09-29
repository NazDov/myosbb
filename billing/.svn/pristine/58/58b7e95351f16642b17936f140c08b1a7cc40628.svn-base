package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 18.09.2014.
 */
public class UpdateCounterQuery extends AbstractModifyQuery<Counter> {

    @Override
    protected String getSQLQuery() {
        return  " UPDATE [dbo].[RefCounters]\n" +
                "   SET [Number] = ? \n" +
                "      ,[DiameterID] = ?  \n" +
                "      ,[UnitOfMeasurementID] = ? \n" +
                "      ,[ModelID] = ? \n" +
                "      ,[typeCounterID] = ? \n" +
                " WHERE [ID] = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Counter value) throws SQLException {
        st.setString(1,value.getNumber());
        st.setLong(2, value.getDiameter().getId());
        st.setLong(3,value.getUnitOfMeasurement().getId());
        st.setLong(4,value.getModel().getId());
        if (value.getTypeCounter().getId() == null)
            st.setNull(5, Types.BIGINT);
        else
            st.setLong(5,value.getTypeCounter().getId());
        st.setLong(6,value.getId());

    }
}
