package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputdiameters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.InputDiameterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateInputDiameterQuery;

import java.sql.Connection;

/**
 * Created by vostap on 17.09.2014.
 */
public class UpdateInputDiameterOperation extends AbstractModifyOperation<InputDiameter> {
    public UpdateInputDiameterOperation() {
        super(new InputDiameterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, InputDiameter value)   {
        return new UpdateInputDiameterQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,InputDiameter value)   {
        return validator.validateToInsert(connection,value) && validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
