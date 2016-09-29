package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.RegisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateRegisterOfCounterCounterQuery;

import java.sql.Connection;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateRegisterOfCounterCounterOperation extends AbstractModifyOperation<RegisterOfCounter> {
    public UpdateRegisterOfCounterCounterOperation() {
        super(new RegisterOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, RegisterOfCounter value)   {
        return new UpdateRegisterOfCounterCounterQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,RegisterOfCounter value)   {
        this.validateDateInPeriod(connection,value);
        return true;
    }

    private void validateDateInPeriod(Connection connection, RegisterOfCounter value)   {
        Date period = null;
        try {
            period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        Date lastDayMonthInPeriod = this.getLastDayInPeriod(period);
        if (value.getOnDate().getTime()>lastDayMonthInPeriod.getTime())
            throw new ValidateException("DATE NOT IN PERIOD");
        if (value.getOnDate().getTime()<period.getTime())
            throw new ValidateException("DATE NOT IN PERIOD");
    }

    private Date getLastDayInPeriod(Date period) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(period);

        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        calendar.add(Calendar.DATE, -1);

        Date lastDayOfMonth = calendar.getTime();
        return lastDayOfMonth;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
