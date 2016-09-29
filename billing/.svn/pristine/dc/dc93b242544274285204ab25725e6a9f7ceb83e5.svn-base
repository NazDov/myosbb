package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.counters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.CounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCounterStatusQuery;

import java.sql.Connection;

/**
 * Created by vostap on 18.09.2014.
 */
public class DeleteCounterOperation extends AbstractModifyOperation<Counter> {

    public DeleteCounterOperation() {
        super(new CounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Counter value)   {
        SysCounterStatus s = new SysCounterStatus();
        s.setCounterID(value.getId());
        new DeleteCounterStatusQuery().execute(connection,s);
        return new DeleteCounterQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,Counter value)   {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
