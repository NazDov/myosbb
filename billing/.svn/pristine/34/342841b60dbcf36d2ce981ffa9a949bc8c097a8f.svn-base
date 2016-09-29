package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SysCounterStatusCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 15.10.2014.
 */
public class GetCurrentCounterStatusQuery extends AbstractSelectQuery<SysCounterStatus,SysCounterStatusCondition> {
    public GetCurrentCounterStatusQuery(SysCounterStatusCondition condition) {
        super(condition);
    }

    @Override
    protected SysCounterStatus parseResultSet(ResultSet rs) throws SQLException {
        SysCounterStatus res = new SysCounterStatus();
        res.setId(rs.getLong("ID"));
        res.setStatusTypeID(rs.getLong("CounterStatusID"));
        res.setCounterID(rs.getLong("CounterID"));
        res.setStatusDate(rs.getDate("StatusesDate"));
        res.setDocRegisterCounterID(rs.getLong("DocRegisterCounterID"));
        res.setDocUnregisterCounterID(rs.getLong("DocUnregisterCounterID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[CounterID] ");
        sb.append(" ,[CounterStatusID] ");
        sb.append(" ,[Period]  ");
        sb.append(" ,[StatusesDate] ");
        sb.append(" ,[DocRegisterCounterID] ");
        sb.append(" ,[DocUnregisterCounterID]  ");
        sb.append(" FROM [dbo].[SysCounterStatuses] where 1=1 ");
        if (condition.getCounterID() != null)
            sb.append(" and counterID = "+condition.getCounterID());
        return sb.toString();
    }

}
