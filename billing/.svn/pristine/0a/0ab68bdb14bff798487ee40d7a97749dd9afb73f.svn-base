package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 28.05.15.
 */
public class SearchEndFactorByDocumentIDQuery extends AbstractSelectQuery<InputFactor,UnregisterOfCounterCondition> {
    public SearchEndFactorByDocumentIDQuery(UnregisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        res.setEndFactor(rs.getInt("EndFactor"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        return "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "      ,[OnDate]\n" +
                "      ,[CounterID]\n" +
                "      ,[BeginFactor]\n" +
                "      ,[FactorType]\n" +
                "      ,[DocumentID]\n" +
                "      ,[DocType]\n" +
                "      ,[Period]\n" +
                "      ,[EndFactor]\n" +
                "      ,[RegInfDepartmentInputID]\n" +
                "      ,[UnregisterDocumentID]" +
                "  FROM [dbo].[DocInputFactors]\n" +
                " where Period =" + this.getDateAsString(condition.getPeriod())+
                " and FactorType in (2,3) \n" +
                " and UnregisterDocumentID = "+condition.getUnregisterOfCounterID();
    }
}

