package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.10.2014.
 */
public class GetFactorByCounterIDQuery extends AbstractSelectQuery<InputFactor,Long> {
    public GetFactorByCounterIDQuery(Long condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor factor = new InputFactor();
        factor.setBeginFactor(rs.getInt("BeginFactor"));
        factor.setId(rs.getLong("id"));
        factor.setCounter(new Counter(rs.getLong("CounterID")));
        factor.setDocumentID(rs.getLong("DocumentID"));
        factor.setEndFactor(rs.getInt("EndFactor"));
        return factor;
    }

    @Override
    protected String getSQLQuery() {
        return "\n" +
                "SELECT top  "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "      ,[OnDate]\n" +
                "      ,[CounterID]\n" +
                "      ,[BeginFactor]\n" +
                "      ,[FactorType]\n" +
                "      ,[DocumentID]\n" +
                "      ,[DocType]\n" +
                "      ,[Period]\n" +
                "      ,[EndFactor]\n" +
                "      ,[InputID]\n" +
                "  FROM [dbo].[DocInputFactors]\n" +
                "  where CounterID = "+condition;
    }
}
