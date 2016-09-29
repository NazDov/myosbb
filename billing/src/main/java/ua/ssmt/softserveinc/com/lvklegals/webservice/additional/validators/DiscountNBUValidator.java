package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class DiscountNBUValidator extends AbstractValidator<DiscountRateNBU> {

    @Override
    public boolean validateToInsert(Connection connection, DiscountRateNBU value) {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection, DiscountRateNBU value) {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, DiscountRateNBU value) {
        return false;
    }
}
