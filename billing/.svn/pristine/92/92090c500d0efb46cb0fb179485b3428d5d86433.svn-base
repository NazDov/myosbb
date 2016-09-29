package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchRegisterControllerQuery extends AbstractSelectQuery<Long,Long> {
    public SearchRegisterControllerQuery(Long condition) {
        super(condition);
    }

    @Override
    protected Long parseResultSet(ResultSet rs) throws SQLException {
         return rs.getLong("id");
    }

    @Override
    protected String getSQLQuery() {
        return "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +

                "  FROM [RegInfSubRouteController]\n" +
                "where \n" +
                "\t period = (select top 1 CurrentPeriod from CurrentPeriod)\n" +
                "and ControllerID = "+condition;
    }
}
