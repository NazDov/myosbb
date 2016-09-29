package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 30.03.2016.
 */
public class DeleteListPaymentOperation extends AbstractModifyOperation<List<Payment>> {

    public DeleteListPaymentOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, List<Payment> value) {
        return new DeleteListPaymentQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, List<Payment> value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
