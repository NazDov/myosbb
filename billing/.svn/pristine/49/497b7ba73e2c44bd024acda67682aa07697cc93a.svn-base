package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SysCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentCounterStatusQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.09.2014.
 */
public class CounterValidator extends AbstractValidator<Counter> {
    @Override
    public boolean validateToInsert(Connection connection,Counter value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,Counter value)   {
        SysCounterStatusCondition condition = new SysCounterStatusCondition();
        condition.setCounterID(value.getId());
        try {
            List<SysCounterStatus> list = new GetCurrentCounterStatusQuery(condition).execute(connection);
            if (list.size() >0 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_DELETE_COUNTER_CAUSE_REGISTRATION_OR_UNREGISTER"));

            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }


    @Override
    public boolean validateToUpdate(Connection connection,Counter value)   {
        return false;
    }
}
