package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class GetAllTariffOperation extends AbstractSelectOperation<Tariff> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Tariff> doOperation(Connection connection) {
        return new GetAllTarrifQuery(null).execute(connection);
    }
}
