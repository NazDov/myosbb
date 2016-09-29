package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 30.12.2014.
 */
public class SearchCountersFromInputFactors extends AbstractSelectQuery<InputFactor,InputFactorCondition> {
    public SearchCountersFromInputFactors(InputFactorCondition condition) {
        super(condition);
    }

    @Override
    protected InputFactor parseResultSet(ResultSet rs) throws SQLException {
        InputFactor inputFactor = new InputFactor();
        inputFactor.setCounter(this.fillCounter(rs));
        return inputFactor;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter counter = new Counter();
        counter.setId(rs.getLong("CounterID"));
        return counter;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select distinct CounterID from DocInputFactors  ");
        sb.append(" where Period = "+this.getDateAsString(this.condition.getPeriod()));
        return sb.toString();
    }
}
