package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 18.09.2014.
 */
public class CreateCounterQuery extends AbstractModifyQuery<Counter> {


    @Override
    protected String getSQLQuery() {
        return  "INSERT INTO [dbo].[RefCounters]\n" +
                "           ([Number]\n" +
                "           ,[DiameterID]\n" +
                "           ,[UnitOfMeasurementID]\n" +
                "           ,[ModelID],[typeCounterID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?)\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Counter value) throws SQLException {
        st.setString(1,value.getNumber());
        st.setLong(2,value.getDiameter().getId());
        st.setLong(3,value.getUnitOfMeasurement().getId());
        st.setLong(4,value.getModel().getId());
        if (value.getTypeCounter().getId() == null)
            st.setNull(5, Types.BIGINT);
        else
           st.setLong(5,value.getTypeCounter().getId());
    }
}
