package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ControllerReferenceValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateControllerReferenseQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateControllerReferenseOperation extends AbstractModifyOperation<ControllersReferense> {

    public UpdateControllerReferenseOperation() {
        super(new ControllerReferenceValidator());
    }

    @Override
    protected long _doOperation(Connection connection, ControllersReferense value)   {
        return new UpdateControllerReferenseQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,ControllersReferense value)   {
        return validator.validateToUpdate(connection,value) && validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}


