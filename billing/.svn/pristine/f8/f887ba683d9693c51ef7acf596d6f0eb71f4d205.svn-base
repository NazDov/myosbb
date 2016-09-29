package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.PeriodValidator;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.movenextperiod.MoveContraAgentToNextPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.movenextperiod.MoveDepartmentToNextPeriodQuery;

import java.sql.Connection;

/**
 * Created by vostap on 31.08.2014.
 */
public class MoveToNextPeriodOperation extends AbstractModifyOperation<Period> {
    public MoveToNextPeriodOperation() {
        super(new PeriodValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Period value)   {

        return 0;
    }

    @Override
    public boolean validate(Connection connection,Period value)   {
        return true;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    private void moveToNextPeriod(Connection connection)   {
        new MoveContraAgentToNextPeriodQuery().execute(connection,null);
        new MoveDepartmentToNextPeriodQuery().execute(connection,null);
    }
}
