package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DiscountNBUValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteRateNBUQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class DeleteDiscountRateOperation extends AbstractModifyOperation<DiscountRateNBU> {
    public DeleteDiscountRateOperation() {
        super(new DiscountNBUValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DiscountRateNBU value)   {
        return new DeleteRateNBUQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,DiscountRateNBU value)   {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
