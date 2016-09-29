package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentToDelete;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeletePaymentToDeleteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 19.05.2016.
 */
public class DeletePaymentToDeleteOperation extends AbstractModifyOperation<PaymentToDelete> {
    public DeletePaymentToDeleteOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PaymentToDelete value) {
        new DeletePaymentToDeleteQuery().execute(connection,value);
        return 0;
    }

    @Override
    public boolean validate(Connection connection, PaymentToDelete value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
