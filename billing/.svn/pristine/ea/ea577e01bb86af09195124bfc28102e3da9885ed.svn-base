package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class PsycalPayerValidator extends AbstractValidator<PhysicalPayer> {
    @Override
    public boolean validateToInsert(Connection connection,PhysicalPayer value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,PhysicalPayer value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,PhysicalPayer value)   {
        return false;
    }
}
