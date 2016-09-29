package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class GetAllDocumentsRegisterOfCounterOperation extends AbstractSelectOperation<RegisterOfCounter> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<RegisterOfCounter> doOperation(Connection connection) {
        return new GetAllDocumentsRegisterOfCounterQuery(null).execute(connection);
    }
}
