package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 24.11.2014.
 */
public class PaymentDepartmentValidator extends AbstractValidator<PaymentDepartment> {
    @Override
    public boolean validateToInsert(Connection connection,PaymentDepartment value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,PaymentDepartment value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,PaymentDepartment value)   {
        return false;
    }
}
