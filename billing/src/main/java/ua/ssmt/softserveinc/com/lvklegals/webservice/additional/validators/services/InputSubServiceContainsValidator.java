package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputSubServiceContain;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vostap on 13.11.2014.
 */
public class InputSubServiceContainsValidator extends AbstractValidator<InputSubServiceContain> {
    @Override
    public boolean validateToInsert(Connection connection, InputSubServiceContain value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection, InputSubServiceContain value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, InputSubServiceContain value)   {
        return false;
    }
}
