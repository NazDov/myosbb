package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.counters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.CounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCounterStatusHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCounterStatusQuery;

import java.sql.Connection;

/**
 * Created by vostap on 18.09.2014.
 */
public class CreateCounterOperation extends AbstractModifyOperation<Counter> {
    public CreateCounterOperation() {
        super(new CounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Counter value)   {
        Long counterID = new CreateCounterQuery().execute(connection,value);
        SysCounterStatus sysCounterStatus = new SysCounterStatus();
        sysCounterStatus.setCounterID(counterID);
        sysCounterStatus.setStatusTypeID(1L);
        new CreateCounterStatusQuery().execute(connection,sysCounterStatus);
        return new CreateCounterStatusHistoryQuery().execute(connection,sysCounterStatus);
    }

    @Override
    public boolean validate(Connection connection,Counter value)   {
        if (value.getDiameter().getId() == null) throw new ValidateException(Messages.getInstance().get("ERROR_ID_DIAMETER_CANNOT_BE_NULL"));
        if (value.getModel() == null) throw new ValidateException(Messages.getInstance().get("ERROR_ID_COUNTER_MODEL_CANNOT_BE_NULL"));
        if (value.getUnitOfMeasurement().getId() == null) throw new ValidateException(Messages.getInstance().get("ERROR_ID_UNIT_OF_MEASUREMENT"));
        if (value.getNumber() == null)  throw new ValidateException(Messages.getInstance().get("ERROR_GOV_NUMBER_FOR_COUNTER_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
