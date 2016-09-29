package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.UnLockServiceToInvoiceQuery;

import java.sql.Connection;

/**
 * Created by vostap on 09.04.2015.
 */
public class UnlockDBForInvoicesOperaion extends AbstractModifyOperation<Void> {
    public UnlockDBForInvoicesOperaion() {
        super(null);
    }

    @Override
    protected long _doOperation(Connection connection, Void value) {
        return new UnLockServiceToInvoiceQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, Void value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
