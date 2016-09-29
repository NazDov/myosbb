package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.subservices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class GetAllSubServiceOperation extends AbstractSelectOperation<SubService> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SubService> doOperation(Connection connection) {
        return new GetAllSubServiceQuery(null).execute(connection);
    }
}
