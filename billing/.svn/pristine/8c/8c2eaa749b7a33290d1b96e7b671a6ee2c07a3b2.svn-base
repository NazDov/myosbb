package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 24.09.2014.
 */

// ,[Period]
//,[StatusesDate]
public class CreateCounterStatusQuery extends AbstractModifyQuery<SysCounterStatus> {
    @Override
    protected String getSQLQuery() {
        return  "INSERT INTO [dbo].[SysCounterStatuses]\n" +
                "           ([CounterID]\n" +
                "           ,[CounterStatusID]\n" +
                "           ,[Period]\n" +
                "           ,[StatusesDate]\n" +
                "           ,[DocRegisterCounterID]\n" +
                "           ,[DocUnregisterCounterID])\n" +
                "     VALUES\n" +
                "           (?,?,(select top 1 CurrentPeriod from CurrentPeriod),(getDate()),?,?)\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SysCounterStatus value) throws SQLException {
        st.setLong(1,value.getCounterID());
        st.setLong(2,value.getStatusTypeID());
        if (value.getDocRegisterCounterID() == null)
            st.setNull(3, Types.BIGINT);
        else
            st.setLong(3,value.getDocRegisterCounterID());

        if (value.getDocUnregisterCounterID() == null)
            st.setNull(4,Types.BIGINT);
        else
            st.setLong(4,value.getDocUnregisterCounterID());

    }
}
