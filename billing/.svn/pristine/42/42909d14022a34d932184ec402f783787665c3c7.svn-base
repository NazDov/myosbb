package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.countermodel;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.CounterModelValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCounterModelQuery;

import java.sql.Connection;

/**
 * Created by vostap on 10.09.2014.
 */
public class DeleteCounterModelOperation extends AbstractModifyOperation<CounterModel> {
    public DeleteCounterModelOperation() {
        super(new CounterModelValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CounterModel value)   {
        new DeleteCounterModelQuery().execute(connection,value);
        return 0;
    }

    @Override
    public boolean validate(Connection connection,CounterModel value)   {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
