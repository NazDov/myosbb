package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains.norma;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.RainNorma;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains.GetAllRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 04.04.2016.
 */
public class GetAllRainsNormaOperation extends AbstractSelectOperation<RainNorma> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<RainNorma> doOperation(Connection connection) {
        return new GetAllRainsNormaQuery(null).execute(connection);
    }
}
