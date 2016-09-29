package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 08.10.2014.
 */
public class GetCounterTypeByIDQuery extends AbstractSelectQuery<CounterType,Long> {
    public GetCounterTypeByIDQuery(Long condition) {
        super(condition);
    }

    @Override
    protected CounterType parseResultSet(ResultSet rs) throws SQLException {
        CounterType service = new CounterType();
        service.setId(rs.getLong("id"));
        service.setName(rs.getString("Name"));
        return service;

    }

    @Override
    protected String getSQLQuery() {
        return "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "      ,[Name]\n" +
                "  FROM [dbo].[RefServices]\n" +
                "where id = "+condition;
    }
}
