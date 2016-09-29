package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.koef;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Koef;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchKoefficientQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllKoefOperation extends AbstractSelectOperation<Koef>{
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Koef> doOperation(Connection connection) {
        return new SearchKoefficientQuery(null).execute(connection);
    }
}
