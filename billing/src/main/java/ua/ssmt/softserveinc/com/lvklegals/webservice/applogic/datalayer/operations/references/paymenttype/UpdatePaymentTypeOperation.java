package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.PaymentTypeValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdatePaymentTypeQuery;

import java.sql.Connection;

/**
 * Created by vostap on 11.11.2014.
 */
public class UpdatePaymentTypeOperation extends AbstractModifyOperation<PaymentType> {
    public UpdatePaymentTypeOperation() {
        super(new PaymentTypeValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PaymentType value)   {
        return new UpdatePaymentTypeQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, PaymentType value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
