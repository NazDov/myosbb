package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.InputValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateInputQuery;

import java.sql.Connection;

/**
 * Created by vostap on 18.09.2014.
 */
public class UpdateInputOperation extends AbstractModifyOperation<Input> {
    public UpdateInputOperation() {
        super(new InputValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Input value)   {
        return new UpdateInputQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,Input value)   {
        return validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
