package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateStreetQuery;

import java.sql.Connection;

/**
 * Created by vostap on 8/11/2015.
 */
public class UpdateStreetOperation extends AbstractModifyOperation<Street> {
    public UpdateStreetOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Street value) {
        new UpdateStreetQuery().execute(connection,value);
        return 0;
    }

    @Override
    public boolean validate(Connection connection, Street value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
