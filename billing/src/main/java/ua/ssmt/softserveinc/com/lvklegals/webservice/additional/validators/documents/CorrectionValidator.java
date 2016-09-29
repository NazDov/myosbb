package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CorrectionValidator extends AbstractValidator<Correction> {
    @Override
    public boolean validateToInsert(Connection connection,Correction value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,Correction value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,Correction value)   {
        return false;
    }
}
