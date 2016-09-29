package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class VolumeConsumptionValidator extends AbstractValidator<VolumeConsumption> {
    @Override
    public boolean validateToInsert(Connection connection,VolumeConsumption value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,VolumeConsumption value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,VolumeConsumption value)   {
        return false;
    }
}
