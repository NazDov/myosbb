package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CSCounterStatusHistory;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CSCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 03.12.2014.
 */
public class SearchCounterHistoryQuery extends AbstractSelectQuery<CSCounterStatusHistory,CSCounterStatusCondition> {
    public SearchCounterHistoryQuery(CSCounterStatusCondition condition) {
        super(condition);
    }

    @Override
    protected CSCounterStatusHistory parseResultSet(ResultSet rs) throws SQLException {
        CSCounterStatusHistory res = new CSCounterStatusHistory();
        res.setBegingFactor(rs.getInt("BeginFactor"));
        res.setEndFactor(rs.getInt("EndFactor"));
        res.setVolume(rs.getInt("volume"));
        res.setType(rs.getString("OperType"));
        res.setIsCorrect(rs.getBoolean("correction"));
        res.setPeriod(rs.getDate("period"));
        res.setOnDate(rs.getDate("OnDate"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top "+ Options.getMaxCountToSelectRow()+"   ");
        sb.append(" reg.period, ");
        sb.append("         reg.OnDate,  ");
        sb.append("         fac.BeginFactor,  ");
        sb.append("         fac.EndFactor,   ");
        sb.append("         fac.EndFactor - fac.BeginFactor as volume, ");
        sb.append("         'REGISTER' as OperType  ");
        sb.append(" ,0 as correction  ");
        sb.append(" from DocRegisterCounter as reg   ");
        sb.append("  left join DocInputFactors as fac on reg.id = fac.DocumentID  ");
        sb.append("  where reg.RegInfDepartmentInputsID = ?   ");

        return sb.toString();
    }
}
