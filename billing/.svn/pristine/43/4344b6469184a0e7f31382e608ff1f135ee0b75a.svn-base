package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 21.09.2014.
 */
public class TariffValidator extends AbstractValidator<Tariff> {
    @Override
    public boolean validateToInsert(Connection connection,Tariff value)   {
        if (value.getSubService() == null) throw new ValidateException(messages.get("SUBSERVICE_ID_CANNOT_BE_NULL"));
        if (value.getCategory().getId() == null) throw new ValidateException(messages.get("CATEGORY_ID_CANNOT_BE_NULL"));
        if (value.getTariff() == null) throw new ValidateException(messages.get("TARIFF_CANNOT_BE_NULL"));
        if (value.getDateInAction() == null) throw new ValidateException(messages.get("DATE_IN_ACTION_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,Tariff value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("TARIFF_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,Tariff value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("TARIFF_ID_CANNOT_BE_NULL"));
        return true;
    }
}
