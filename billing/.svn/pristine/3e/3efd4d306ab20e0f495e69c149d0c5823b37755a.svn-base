package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 13.10.2014.
 */
public class SearchBeginFactorByDocumentIDQuery extends AbstractSelectQuery<InputFactor,RegisterOfCounterCondition> {
    public SearchBeginFactorByDocumentIDQuery(RegisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        res.setBeginFactor(rs.getInt("BeginFactor"));
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
                "  FROM [dbo].[DocInputFactors]\n" +
                " where Period =" + this.getDateAsString(condition.getPeriod())+
                " and FactorType in (1,3)\n" +
                " and DocumentID = "+condition.getRegisterOfCounterID();
    }
}
