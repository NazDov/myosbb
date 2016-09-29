package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.Invoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 29.09.2014.
 */
public class InsertNewInvoiceQuery extends AbstractModifyQuery<Invoice> {
    @Override
    protected String getSQLQuery() {
        return null;
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Invoice value) throws SQLException {

    }
}
