package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 03.04.2015.
 */
public class LockServiceToInvoiceQuery extends AbstractModifyQuery<Void> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [SysLock]\n" +
                "   SET \n" +
                "      [Status]  = 1";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Void value) throws SQLException {

    }
}
