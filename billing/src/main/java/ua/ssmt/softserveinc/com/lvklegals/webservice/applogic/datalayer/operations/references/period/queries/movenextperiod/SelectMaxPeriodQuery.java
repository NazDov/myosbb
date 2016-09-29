package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.movenextperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import javax.lang.model.type.NullType;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

/**
 * Created by vostap on 10.09.2014.
 */
public class SelectMaxPeriodQuery extends AbstractSelectQuery<Date,NullType> {

    public SelectMaxPeriodQuery(NullType condition) {
        super(condition);
    }

    @Override
    protected Date parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDate("maxPeriod");
    }

    @Override
    protected String getSQLQuery() {
        return "select max()";
    }


}
