package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/13/2015.
 */
public class SelectCountDocumentRegisterAndUnregisterCounterAfterDateQuery extends AbstractSelectQuery<Long,RegisterOfCounterCondition> {
    public SelectCountDocumentRegisterAndUnregisterCounterAfterDateQuery(RegisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected Long parseResultSet(ResultSet rs) throws SQLException {
        return rs.getLong("cnt");
    }

    @Override
    protected String getSQLQuery() {
        return "select (select count(*) from DocRegisterCounter where CounterID = "+condition.getCounterID()+" and OnDate >"+getDateAsString(condition.getMoreDate())+")+(select count(*) from DocUnregisterCounter where CounterID = "+condition.getCounterID()+" and OnDate >"+condition.getMoreDate()+") as cnt";
    }
}
