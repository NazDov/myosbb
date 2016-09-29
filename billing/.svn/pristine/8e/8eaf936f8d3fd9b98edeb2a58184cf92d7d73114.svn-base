package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.inputfactord;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class GetAllInputFactorsOperation extends AbstractSelectOperation<InputFactor> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<InputFactor> doOperation(Connection connection) {
        return new GetAllInputFactorsQuery(null).execute(connection);
    }
}
