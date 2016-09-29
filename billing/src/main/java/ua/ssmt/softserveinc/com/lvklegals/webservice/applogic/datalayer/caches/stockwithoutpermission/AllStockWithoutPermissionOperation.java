package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllStockWithoutPermissionOperation extends AbstractSelectOperation<StockWithoutPermission> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<StockWithoutPermission> doOperation(Connection connection) {
        List<StockWithoutPermission> list =  new AllStockWithoutPermissionQuery(null).execute(connection);
        return list;
    }
}
