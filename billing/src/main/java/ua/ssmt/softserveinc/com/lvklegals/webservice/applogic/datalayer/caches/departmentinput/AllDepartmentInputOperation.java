package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.DepartmentInputInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllDepartmentInputOperation extends AbstractSelectOperation<DepartmentInputInvoice> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<DepartmentInputInvoice> doOperation(Connection connection) {
        return new AllDepartmentInputQuery(null).execute(connection);
    }
}
