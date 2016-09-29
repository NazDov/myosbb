package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 24.12.2015.
 */
public class NextValueToCalcInvoiceResult extends AbstractSelectPreCompileQuery<Long,Void> {
    public NextValueToCalcInvoiceResult(Connection connection, Void condition) {
        super(connection, condition);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {

    }

    @Override
    protected Long parseResultSet(ResultSet rs) throws SQLException {
        return rs.getLong(1);
    }

    @Override
    protected String getSQLQuery() {
        return "exec getNextValueToCalcInvoiceResult";
    }
    /*public NextValueToCalcInvoiceResult(Void condition) {
        super(condition);
    }

    @Override
    protected Long parseResultSet(ResultSet rs) throws SQLException {
        return rs.getLong(1);
    }

    @Override
    protected String getSQLQuery() {
        return "exec getNextValueToCalcInvoiceResult";
    }*/
}
