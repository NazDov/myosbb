package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.10.2014.
 */
public class GetCurrentStatusCounterFromHistoryQuery extends AbstractSelectQuery<SysCounterStatus,CounterCondition> {
    public GetCurrentStatusCounterFromHistoryQuery(CounterCondition condition) {
        super(condition);
    }

    @Override
    protected SysCounterStatus parseResultSet(ResultSet rs) throws SQLException {
        SysCounterStatus sysCounterStatus = new SysCounterStatus();
        sysCounterStatus.setId(rs.getLong("id"));
        sysCounterStatus.setStatusTypeID(rs.getLong("CounterStatusID"));
        sysCounterStatus.setCounterID(rs.getLong("CounterID"));
        sysCounterStatus.setDocRegisterCounterID(rs.getLong("DocRegisterCounterID"));
        sysCounterStatus.setDocUnregisterCounterID(rs.getLong("DocUnregisterCounterID"));
        sysCounterStatus.setStatusDate(rs.getDate("StatusesDate"));
        return sysCounterStatus;
    }

    @Override
    protected String getSQLQuery() {
        String qry =
         " SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "      ,[CounterID]\n" +
                "      ,[CounterStatusID]\n" +
                "      ,[Period]\n" +
                "      ,[StatusesDate]\n" +
                "      ,[DocRegisterCounterID]\n" +
                "      ,[DocUnregisterCounterID]\n" +
                "  FROM [dbo].[SysCounterStatusesHistory]\n" +
                "  where CounterID = "+condition.getId() +
                "  order by id desc";
         return qry;
    }
}
