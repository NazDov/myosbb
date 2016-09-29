package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.correctionstockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 02.03.2016.
 */
public class AllCorrectionStockWithoutPermissionOpeation extends AbstractSelectOperation<SaldoInvoiceSum> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SaldoInvoiceSum> doOperation(Connection connection) {
        return new AllCorrctionStockWithoutPermissionQuery(null).execute(connection);
    }
}
