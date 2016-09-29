package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.hotwattersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 04.01.2016.
 */
public class HotWatterSupplierOperation extends AbstractSelectOperation<HotWaterSupplier> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<HotWaterSupplier> doOperation(Connection connection) {
        return new HotWatterSupplierQuery(null).execute(connection);
    }
}
