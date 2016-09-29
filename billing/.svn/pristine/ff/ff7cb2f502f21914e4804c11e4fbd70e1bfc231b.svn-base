package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ControllerValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteControllerQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteRegisterControllerQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class DeleteControllerOperation extends AbstractModifyOperation<Controller> {
    public DeleteControllerOperation() {
        super(new ControllerValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Controller value)   {
        new DeleteRegisterControllerQuery().execute(connection,value);
        return  new DeleteControllerQuery().execute(connection,value);

    }

    @Override
    public boolean validate(Connection connection,Controller value)   {
        return this.validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
