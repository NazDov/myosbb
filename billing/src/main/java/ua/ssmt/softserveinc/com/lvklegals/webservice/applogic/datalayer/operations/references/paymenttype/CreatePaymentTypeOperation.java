package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.PaymentTypeValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreatePaymentTypeQuery;

import java.sql.Connection;

/**
 * Created by vostap on 23.08.2014.
 */
public class CreatePaymentTypeOperation extends AbstractModifyOperation<PaymentType> {

    public CreatePaymentTypeOperation() {
        super(new PaymentTypeValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PaymentType paymentType)   {
        long paymentTypeID = new CreatePaymentTypeQuery().execute(connection,paymentType);
        paymentType.setId(paymentTypeID);
        new CreatePaymentTypeQuery().execute(connection,paymentType);
        return paymentTypeID;
    }

    @Override
    public boolean validate(Connection connection,PaymentType value)   {
        return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
