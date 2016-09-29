package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.02.2015.
 */
public class SearchRainsLevelQuery extends AbstractSelectQuery<Double,Void>
{
    public SearchRainsLevelQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getBigDecimal("Val").doubleValue();
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  top 1[id]  ");
        sb.append(" ,[Val]   ");
        sb.append(" ,[Period]   ");
        sb.append(" FROM [dbo].[RegRainsLevel]   ");
        return sb.toString();
    }
}
