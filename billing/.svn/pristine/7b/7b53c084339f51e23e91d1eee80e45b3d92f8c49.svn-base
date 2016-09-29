package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters.GetAllDocumentsRegisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class GetAllUnregisterOfCounterDocumentOperation extends AbstractSelectOperation<UnregisterOfCounter> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<UnregisterOfCounter> doOperation(Connection connection) {
        return new GetAllUnregisterOfCounterQuery(null).execute(connection);
    }
}
