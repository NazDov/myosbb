package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CSCounterStatusHistory;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CSCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 04.12.2014.
 */
public class SearchCounterHistoryQueryUnregisterDocQuery extends AbstractSelectQuery<CSCounterStatusHistory,CSCounterStatusCondition> {
    public SearchCounterHistoryQueryUnregisterDocQuery(CSCounterStatusCondition condition) {
        super(condition);
    }

    @Override
    protected CSCounterStatusHistory parseResultSet(ResultSet rs) throws SQLException {
        CSCounterStatusHistory res = new CSCounterStatusHistory();
        res.setIsCorrect(rs.getBoolean("correction"));
        res.setOnDate(rs.getDate("OnDate"));
        res.setBegingFactor(rs.getInt("BeginFactor"));
        res.setEndFactor(rs.getInt("EndFactor"));
        res.setVolume(rs.getInt("volume"));
        res.setPeriod(rs.getDate("period"));
        res.setType(rs.getString("OperType"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top "+ Options.getMaxCountToSelectRow()+"  ");
        sb.append(" ureg.period,  ");
        sb.append(" ureg.OnDate,  ");
        sb.append(" fac.BeginFactor,  ");
        sb.append(" fac.EndFactor,  ");
        sb.append(" fac.EndFactor - fac.BeginFactor as volume, ");
        sb.append(" 'UNREGISTER' as OperType  ");
        sb.append(" ,0 as correction  ");
        sb.append(" from DocUnregisterCounter as ureg  ");
        sb.append(" left join DocInputFactors as fac on ureg.id = fac.UnregisterDocumentID  ");
        sb.append(" where 1=1 ");
        if (condition.getDepartmentInput() != null)
            sb.append(" InputID =   " + condition.getDepartmentInput().getInput().getId());
        return sb.toString();
    }
}
