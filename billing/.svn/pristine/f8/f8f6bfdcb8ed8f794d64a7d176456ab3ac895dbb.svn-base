package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 19.09.2014.
 */
public class AddressValidator extends AbstractValidator<Address> {
    @Override
    public boolean validateToInsert(Connection connection,Address value)   {
        if (value.getNumber() == null || value.getNumber().isEmpty())
            throw new ValidateException(this.messages.get("ERROR_NUMBER_HOUSE_CANNOT_BE_NULL"));
        if (value.getStreet() == null)
            throw new ValidateException(this.messages.get("ERROR_STREET_CANNOT_BE_NULL"));
        if (value.getStreet().getId() == null)
            throw new ValidateException(this.messages.get("ERROR_STREET_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,Address value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("ERROR_ADDRESS_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,Address value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("ERROR_ADDRESS_ID_CANNOT_BE_NULL"));
        return true;
    }
}
