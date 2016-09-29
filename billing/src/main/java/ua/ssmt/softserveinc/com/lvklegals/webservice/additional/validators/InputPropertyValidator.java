package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 13.11.2014.
 */
public class InputPropertyValidator extends AbstractValidator<InputProperty> {
    @Override
    public boolean validateToInsert(Connection connection, InputProperty value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection, InputProperty value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, InputProperty value)   {
        return false;
    }
}
