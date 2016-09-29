package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 14.10.2014.
 */
public class UpdateCounterStatusQuery extends AbstractModifyQuery<SysCounterStatus> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[SysCounterStatuses]\n" +
                "   SET [CounterID] = ?\n" +
                "      ,[CounterStatusID] = ?\n" +
                "      ,[Period] = dbo.getCurrentPeriod()\n" +
                "      ,[StatusesDate] = ?\n" +
                "      ,[DocRegisterCounterID] = ?\n" +
                "      ,[DocUnregisterCounterID] =?\n" +
                " WHERE CounterID = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SysCounterStatus value) throws SQLException {
        st.setLong(1,value.getCounterID());
        st.setLong(2,value.getStatusTypeID());
        st.setDate(3,new Date(value.getStatusDate().getTime()));

        if (value.getDocRegisterCounterID() == null || value.getDocRegisterCounterID()==0)
            st.setNull(4, Types.BIGINT);
        else
            st.setLong(4,value.getDocRegisterCounterID());

        if (value.getDocUnregisterCounterID() == null || value.getDocUnregisterCounterID() == 0)
            st.setNull(5,Types.BIGINT);
        else
            st.setLong(5,value.getDocUnregisterCounterID());

        st.setLong(6,value.getCounterID());

    }
}
