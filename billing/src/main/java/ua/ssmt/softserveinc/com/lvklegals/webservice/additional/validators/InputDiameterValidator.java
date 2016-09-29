package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 19.09.2014.
 */
public class InputDiameterValidator extends AbstractValidator<InputDiameter> {
    @Override
    public boolean validateToInsert(Connection connection,InputDiameter value)   {
        if (value.getDiameter() == null) throw new ValidateException(this.messages.get("ERROR_DIAMETER_CANNOT_BE_NULL"));
        if (value.getCapacity() == null) throw new ValidateException(this.messages.get("ERROR_CAPACITY_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,InputDiameter value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("ERROR_INPUT_DIAMETER_CANNOT_BE_NULL"));

        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,InputDiameter value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("ERROR_INPUT_DIAMETER_CANNOT_BE_NULL"));
        return true;
    }
}
