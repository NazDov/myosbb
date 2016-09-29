package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vostap on 06.11.2014.
 */
public class ContinueRepairOrCheckValidator extends AbstractValidator<ContinueRepairOrCheck> {
    @Override
    public boolean validateToInsert(Connection connection, ContinueRepairOrCheck value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection, ContinueRepairOrCheck value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, ContinueRepairOrCheck value)   {
        return false;
    }
}
