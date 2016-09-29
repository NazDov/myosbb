package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.periodmanagment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Period;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteSaldoOnCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdatePeriodQuery;

import java.sql.Connection;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by vostap on 19.12.2014.
 */
public class MovePeriodToPreviousOperation extends AbstractModifyOperation<Period> {
    public MovePeriodToPreviousOperation() {
        super(null);
    }

    @Override
    protected long _doOperation(Connection connection, Period value)   {
        Date currentPeriod = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentPeriod);
        calendar.add(Calendar.MONTH,-1);
        Date newPeriod = calendar.getTime();
        Period p = new Period();
        p.setCurrentPeriod(newPeriod);
        deleteSaldoOnCurrentPeriod(connection);
        new UpdatePeriodQuery().execute(connection,p);
        return 0;
    }

    private void deleteSaldoOnCurrentPeriod(Connection connection) {
        new DeleteSaldoOnCurrentPeriodQuery().execute(connection,null);
    }

    @Override
    public boolean validate(Connection connection, Period value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
