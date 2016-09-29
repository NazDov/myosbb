package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class GetAllRainsOperation extends AbstractSelectOperation<Rains> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Rains> doOperation(Connection connection) {
        return new GetAllRainsQuery(null).execute(connection);
    }
}
