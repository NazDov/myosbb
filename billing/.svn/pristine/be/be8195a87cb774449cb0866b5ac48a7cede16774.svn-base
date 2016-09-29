package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CSCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CSCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.05.2016.
 */
public class SearchCurrentCounterStatus extends AbstractSelectQuery<CSCounterStatus,CSCounterStatusCondition> {
    public SearchCurrentCounterStatus(CSCounterStatusCondition condition) {
        super(condition);
    }

    @Override
    protected CSCounterStatus parseResultSet(ResultSet rs) throws SQLException {
        CSCounterStatus res = new CSCounterStatus();

        res.setCounterStatusID(rs.getLong("CounterStatusID"));
        return res;
    }


    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select * from SysCounterStatuses where 1=1 ");
        if (condition.getCounterID() != null)
            sb.append(" and CounterID = "+ condition.getCounterID());
        return sb.toString();
    }
}
