package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentinvoicebylkp;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 14.03.2016.
 */
public class AllDepartmentInvoiceOperation extends AbstractSelectOperation<DepartmentPaymentSum> {

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<DepartmentPaymentSum> doOperation(Connection connection) {
        return new AllDepartmentInvoiceQuery(null).execute(connection);
    }
}
