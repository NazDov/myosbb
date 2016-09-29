package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 19.12.2014.
 */
public class UpdatePeriodQuery extends AbstractModifyQuery<Period> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[CurrentPeriod]\n" +
                "   SET [CurrentPeriod] = ?" +
                //"      ,[userID] = ?\n" +
                "      ,[currentDate] = GETDATE()\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Period value) throws SQLException {
        st.setDate(1,new Date(value.getCurrentPeriod().getTime()));
        //st.setLong(2,value.getUserId());
    }
}
