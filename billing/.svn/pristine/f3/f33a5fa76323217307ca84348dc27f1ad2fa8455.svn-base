package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

/**
 * Created by vostap on 05.09.2014.
 */
public class GetCurrentPeriodQuery extends AbstractSelectQuery<Date,Void> {

    public GetCurrentPeriodQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Date parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDate("currPer");
    }

    @Override
    protected String getSQLQuery() {
        return "select top 1 currentPeriod as currPer from CurrentPeriod";
    }
}
