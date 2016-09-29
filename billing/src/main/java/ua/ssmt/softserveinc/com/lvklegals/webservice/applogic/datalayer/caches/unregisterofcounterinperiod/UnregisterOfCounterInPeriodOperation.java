package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounterinperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class UnregisterOfCounterInPeriodOperation extends AbstractSelectOperation<UnregisterOfCounter> {

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<UnregisterOfCounter> doOperation(Connection connection) {
        return new UnregisterOfCounterInPeriodQuery(null).execute(connection);
    }
}
