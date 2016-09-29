package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unparsedpayment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnparsedPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.UnparsedPaymentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteUnParsedPaymentQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeleteUnparsedPaymentOperation extends AbstractModifyOperation<UnparsedPayment> {
    public DeleteUnparsedPaymentOperation() {
        super(new UnparsedPaymentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, UnparsedPayment value)   {
        return new DeleteUnParsedPaymentQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, UnparsedPayment value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
