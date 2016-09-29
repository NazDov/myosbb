package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.invoicebylkp;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.GetAllInvoiceSumQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 01.04.2016.
 */
public class GetAllInvoiceByLKPSumOperation extends AbstractSelectOperation<SaldoInvoiceSum> {
    private String tableName;
    private String agreementColumnName;

    public GetAllInvoiceByLKPSumOperation (String tableName,String agreementColumnName){
        this.tableName = tableName;
        this.agreementColumnName = agreementColumnName;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SaldoInvoiceSum> doOperation(Connection connection) {
        return new GetAllInvoiceByLKPSumQuery(tableName,agreementColumnName).execute(connection);
    }
}