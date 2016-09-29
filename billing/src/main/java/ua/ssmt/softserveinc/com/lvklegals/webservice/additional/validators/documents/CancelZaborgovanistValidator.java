package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CancelZaborgovanistValidator extends AbstractValidator<CancelZaborgovanist> {
    @Override
    public boolean validateToInsert(Connection connection,CancelZaborgovanist value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,CancelZaborgovanist value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,CancelZaborgovanist value)   {
        return false;
    }
}
