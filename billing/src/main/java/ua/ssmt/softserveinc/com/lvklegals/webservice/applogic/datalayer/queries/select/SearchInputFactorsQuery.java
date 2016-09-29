package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.10.2014.
 */
public class SearchInputFactorsQuery extends AbstractSelectQuery<InputFactor,InputFactorCondition> {
    public SearchInputFactorsQuery(InputFactorCondition condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor factor = new InputFactor();
        factor.setBeginFactor(rs.getInt("BeginFactor"));
        factor.setId(rs.getLong("id"));
        factor.setCounter(new Counter(rs.getLong("CounterID")));
        factor.setDocumentID(rs.getLong("DocumentID"));
        factor.setUnregisterDocumentID(rs.getLong("UnregisterDocumentID"));
        factor.setEndFactor(rs.getInt("EndFactor"));
        factor.setWiringID(rs.getLong("RegInfDepartmentInputID"));
        factor.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));
        factor.setOnDate(rs.getDate("OnDate"));
        factor.setFactorTypeID(rs.getLong("FactorType"));
        return factor;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[OnDate]   ");
        sb.append(" ,[CounterID]  ");
        sb.append(" ,[BeginFactor]  ");
        sb.append(" ,[FactorType]  ");
        sb.append(" ,[DocumentID]  ");
        sb.append(" ,[DocType] ");
        sb.append(" ,[Period] ");
        sb.append(" ,[EndFactor] ");
        sb.append(" ,[RegInfDepartmentInputID] ");
        sb.append(" ,[UnregisterDocumentID] ");
        sb.append(" ,[CorrectionDocumentID],[FactorOnBeginMonth]");
        sb.append(" FROM [dbo].[DocInputFactors] where 1=1 ");
        if (condition.getRegisterCounterID() != null)
            sb.append(" and DocumentID = "+condition.getRegisterCounterID());
        if (condition.getUnregisterCounterID() != null)
            sb.append(" and UnregisterDocumentID = "+condition.getUnregisterCounterID());
        if (condition.getCorrectionCounterID() != null)
            sb.append(" and CorrectionDocumentID = "+condition.getCorrectionCounterID());
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        if (condition.getPeriod() != null)
            sb.append(" and Period = "+this.getDateAsString(condition.getPeriod()));
        if (condition.getCounterID() != null)
            sb.append(" and CounterID = "+condition.getCounterID());
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        sb.append(" order by OnDate desc");
        ////(sb.toString());

        return sb.toString();
    }
}
