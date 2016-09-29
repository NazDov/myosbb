package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.LockServiceToInvoiceQuery;

import java.sql.Connection;

/**
 * Created by vostap on 09.04.2015.
 */
public class LockDBForInvoiceOperation extends AbstractModifyOperation<Void> {
    public LockDBForInvoiceOperation() {
        super(null);
    }

    @Override
    protected long _doOperation(Connection connection, Void value) {
        return new LockServiceToInvoiceQuery().execute(connection,null);
    }

    @Override
    public boolean validate(Connection connection, Void value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
