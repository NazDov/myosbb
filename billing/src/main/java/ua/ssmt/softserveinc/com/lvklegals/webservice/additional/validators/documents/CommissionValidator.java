package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CommissionValidator extends AbstractValidator<Commission> {
    @Override
    public boolean validateToInsert(Connection connection,Commission value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,Commission value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,Commission value)   {
        return false;
    }
}
