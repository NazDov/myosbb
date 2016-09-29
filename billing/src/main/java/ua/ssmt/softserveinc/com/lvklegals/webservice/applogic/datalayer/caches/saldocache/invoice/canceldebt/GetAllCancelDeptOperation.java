package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.canceldebt;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceWithServiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 01.03.2016.
 */
public class GetAllCancelDeptOperation extends AbstractSelectOperation<SaldoInvoiceWithServiceSum> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SaldoInvoiceWithServiceSum> doOperation(Connection connection) {
        return new GetAddCancelDeptQuery(null).execute(connection);
    }
}
