package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 9/17/2015.
 */
public class GetCurrentStavkaPDVQuery extends AbstractSelectQuery<Double,Void> {

    public GetCurrentStavkaPDVQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("st");
    }

    @Override
    protected String getSQLQuery() {
        return "select dbo.getPdvStavka()  as st   ";
    }
}
