package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoicetohotwattersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllCalcInvoiceToHotWatterSupplierOperation extends AbstractSelectOperation<CalcInvoice> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoice> doOperation(Connection connection) {
        return new AllCalcInoviceToHotWatterSupplierQuery(null).execute(connection);
    }
}
