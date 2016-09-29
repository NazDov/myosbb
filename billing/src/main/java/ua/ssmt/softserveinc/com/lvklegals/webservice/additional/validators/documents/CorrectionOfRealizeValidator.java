package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vostap on 22.10.2014.
 */
public class CorrectionOfRealizeValidator extends AbstractValidator<CorrectionOfRealize> {
    @Override
    public boolean validateToInsert(Connection connection, CorrectionOfRealize value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection, CorrectionOfRealize value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, CorrectionOfRealize value)   {
        return false;
    }
}
