package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteStreetQuery;

import java.sql.Connection;

/**
 * Created by vostap on 8/11/2015.
 */
public class DeleteStreetOperation extends AbstractModifyOperation<Street> {
    public DeleteStreetOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Street value) {
        new DeleteStreetQuery().execute(connection,value);
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
