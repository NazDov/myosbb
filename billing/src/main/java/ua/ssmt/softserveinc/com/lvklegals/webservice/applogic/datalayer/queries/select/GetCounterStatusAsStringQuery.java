package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.12.2014.
 */
public class GetCounterStatusAsStringQuery extends AbstractSelectQuery<String,Long> {
    public GetCounterStatusAsStringQuery(Long condition) {
        super(condition);
    }

    @Override
    protected String parseResultSet(ResultSet rs) throws SQLException {
        return null;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top "+ Options.getMaxCountToSelectRow()+" doc.CounterID,OnDate,t.Name from DocRegisterCounter as doc  ");
        sb.append(" left join  SysCounterStatuses s on doc.CounterID = s.CounterID  ");
        sb.append("  left join SysCounterStatusTypes t on s.CounterStatusID = t.id   ");
        return sb.toString();
    }
}
