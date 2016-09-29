package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdatefCounterStatusQueryRegisterOfCounter extends AbstractModifyQuery<SysCounterStatus> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[SysCounterStatuses]\n" +
                "   SET [CounterID] = ?\n" +
                "      ,[CounterStatusID] = 2\n" +
                "      ,[Period] = dbo.getCurrentPeriod()\n" +
                "      ,[StatusesDate] = GetDate()\n" +
                "      ,[DocRegisterCounterID] = ?\n" +
                "      ,[DocUnregisterCounterID] = null\n" +
                " WHERE CounterID = ? and Period = dbo.getCurrentPeriod()\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SysCounterStatus value) throws SQLException {
        st.setLong(1,value.getCounterID());
        st.setLong(2,value.getDocRegisterCounterID());
        st.setLong(3,value.getCounterID());
    }
}
