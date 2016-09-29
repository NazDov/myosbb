package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class ControllerReferenceValidator extends AbstractValidator<ControllersReferense> {

    @Override
    public boolean validateToInsert(Connection connection,ControllersReferense value)   {
        if (value.getName() == null) throw new ValidateException(this.messages.get("ERROR_CONTROLLER_NAME_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,ControllersReferense value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("CONTROLLER_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,ControllersReferense value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("CONTROLLER_ID_CANNOT_BE_NULL"));
        return true;
    }
}
