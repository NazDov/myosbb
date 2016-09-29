package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CSCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CSCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.12.2014.
 */
public class SearchCSCounterStatusQuery extends AbstractSelectQuery<CSCounterStatus,CSCounterStatusCondition> {
    public SearchCSCounterStatusQuery(CSCounterStatusCondition condition) {
        super(condition);
    }

    @Override
    protected CSCounterStatus parseResultSet(ResultSet rs) throws SQLException {
        CSCounterStatus res = new CSCounterStatus();
        res.setCounter(this.fillCounter(rs));
        res.setDateLastRegister(rs.getDate("OnDate"));
        res.setCounterStatus(rs.getString("Name"));
        res.setCounterStatusID(rs.getLong("CounterStatusID"));
        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        res.setNumber(rs.getString("Number"));
        res.getModel().setName(rs.getString("ModelName"));
        res.getDiameter().setDiameter(rs.getDouble("DiamName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top "+ Options.getMaxCountToSelectRow()+" doc.CounterID,OnDate,t.Name,s.CounterStatusID,c.Number,m.Name as ModelName,cd.name as DiamName from DocRegisterCounter as doc    ");
        sb.append(" left join  SysCounterStatuses s on doc.CounterID = s.CounterID  ");
        sb.append("  left join SysCounterStatusTypes t on s.CounterStatusID = t.id   ");
        sb.append("  left join RefCounters as c on doc.CounterID=c.id ");
        sb.append("  left join RefCounterModels as m on c.ModelID = m.id ");
        sb.append("  left join RefCounterDiametr as cd on cd.id = c.DiameterID ");
        return sb.toString();
    }
}
