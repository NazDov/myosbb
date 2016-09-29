package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DiscountNBUValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateRateDiscountNBUQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateDiscountRateOperation extends AbstractModifyOperation<DiscountRateNBU> {
    public UpdateDiscountRateOperation() {
        super(new DiscountNBUValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DiscountRateNBU value)   {
        return new UpdateRateDiscountNBUQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,DiscountRateNBU value)   {
        return validator.validateToUpdate(connection,value) && validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
