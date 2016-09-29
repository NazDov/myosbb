package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.11.2014.
 */
public class GetCurrentPeriodQuery extends AbstractSelectQuery<Period,Void> {
    public GetCurrentPeriodQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Period parseResultSet(ResultSet rs) throws SQLException {
        Period res = new Period();
        res.setCurrentPeriod(rs.getDate("period"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        return "select top "+ Options.getMaxCountToSelectRow()+"  dbo.getCurrentPeriod() as period";
    }
}
