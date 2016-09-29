package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 29.09.2014.
 */
public class GetLastInputFactorQuery extends AbstractSelectQuery<InputFactor,Long> {
    public GetLastInputFactorQuery(Long condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor f = new InputFactor();
        f.setId(rs.getLong("ID"));
        f.setBeginFactor(rs.getInt("BeginFactor"));
        f.setEndFactor(rs.getInt("EndFactor"));
        f.setVolume(f.getEndFactor()-f.getBeginFactor());
        f.getCounter().setId(rs.getLong("CounterID"));
        f.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));
        f.setInputDate(rs.getDate("OnDate"));
        f.setFactorTypeID(rs.getLong("FactorType"));
        f.setPeriod(rs.getDate("Period"));
        return f;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select  top 1    ");
        sb.append("        [id]  ");
        sb.append(" ,[OnDate]   ");
        sb.append(" ,[CounterID]   ");
        sb.append(" ,[BeginFactor]   ");
        sb.append(" ,[FactorType]    ");
        sb.append(" ,[DocumentID]    ");
        sb.append(" ,[DocType]      ");
        sb.append(" ,[Period]       ");
        sb.append(" ,[EndFactor]    ");
        sb.append(" ,[FactorOnBeginMonth]      ");
        sb.append(" from DocInputFactors  ");
        sb.append(" where Period <= dbo.getCurrentPeriod()  ");
        sb.append(" and CounterID =  "+condition);
        sb.append("   order by [OnDate] desc   ");
        return sb.toString();
    }

}
