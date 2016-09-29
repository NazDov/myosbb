package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ControllerReferenceValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteControllerReferenseQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class DeleteControllerReferenseOperation extends AbstractModifyOperation<ControllersReferense> {
    public DeleteControllerReferenseOperation() {
        super(new ControllerReferenceValidator());
    }

    @Override
    protected long _doOperation(Connection connection, ControllersReferense value)   {
        return  new DeleteControllerReferenseQuery().execute(connection,value);

    }

    @Override
    public boolean validate(Connection connection,ControllersReferense value)   {
        return this.validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
