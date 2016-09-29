package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system.CheckForLockQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 09.04.2015.
 */
public class CheckForLockOperaiton extends AbstractSelectOperation<Boolean> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Boolean> doOperation(Connection connection) {
        return new CheckForLockQuery(null).execute(connection);
    }
}
