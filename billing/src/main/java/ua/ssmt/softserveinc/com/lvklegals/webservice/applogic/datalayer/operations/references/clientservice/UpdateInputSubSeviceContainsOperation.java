package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputSubServiceContain;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.services.InputSubServiceContainsValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateInputSubServiceContainsQuery;

import java.sql.Connection;

/**
 * Created by vostap on 13.11.2014.
 */
public class UpdateInputSubSeviceContainsOperation extends AbstractModifyOperation<InputSubServiceContain> {
    public UpdateInputSubSeviceContainsOperation() {
        super(new InputSubServiceContainsValidator());
    }

    @Override
    protected long _doOperation(Connection connection, InputSubServiceContain value)   {
        return new UpdateInputSubServiceContainsQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, InputSubServiceContain value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
