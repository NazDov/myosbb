package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;

import java.sql.Connection;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateCorrectionOfCounterQuery extends AbstractModifyOperation<Counter> {
    public UpdateCorrectionOfCounterQuery(Validator<Counter> validator) {
        super(validator);
    }

    @Override
    protected long _doOperation(Connection connection, Counter value)   {
        return 0;
    }

    @Override
    public boolean validate(Connection connection,Counter value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
