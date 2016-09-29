package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 24.11.2014.
 */
public class PaymentValidator extends AbstractValidator<Payment> {
    @Override
    public boolean validateToInsert(Connection connection,Payment value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,Payment value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,Payment value)   {
        return false;
    }
}
