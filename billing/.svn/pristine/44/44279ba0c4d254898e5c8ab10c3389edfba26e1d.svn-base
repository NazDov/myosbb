package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 19.09.2014.
 */
public class CounterModelValidator extends AbstractValidator<CounterModel> {
    @Override
    public boolean validateToInsert(Connection connection,CounterModel value)   {
        if (value.getName() == null || value.getName().isEmpty() == true)
            throw new ValidateException(this.messages.get("ERROR_COUNTER_MODEL_CANNOT_BE_NULL"));
        if (value.getMaxLength() == null)
            throw new ValidateException(this.messages.get("ERROR_COUNTER_MODEL_MAX_LENGTH"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,CounterModel value)   {
        if (value.getId() == null)
            throw new ValidateException(this.messages.get("ERROR_COUNTER_MODEL_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,CounterModel value)   {
        if (value.getId() == null)
            throw new ValidateException(this.messages.get("ERROR_COUNTER_MODEL_ID_CANNOT_BE_NULL"));
        return true;
    }
}
