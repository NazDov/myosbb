package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 19.09.2014.
 */
public class PaymentTypeValidator extends AbstractValidator<PaymentType> {

    @Override
    public boolean validateToInsert(Connection connection,PaymentType value)   {
        if (value.getCode() == null) throw new ValidateException(messages.get("ERROR_PAYMENT_TYPE_ID_CANNOT_BE_NULL"));
        if (value.getName() == null) throw new ValidateException(messages.get("ERROR_PAYMENT_TYPE_NAME_CANNOT_BE_NULL"));

        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,PaymentType value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_PAYMENT_TYPE_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,PaymentType value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_PAYMENT_TYPE_ID_CANNOT_BE_NULL"));
        return true;
    }
}
