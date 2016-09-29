package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 13.01.2016.
 */
public class GetAllInvoiceSumOperation extends AbstractSelectOperation<SaldoInvoiceSum> {
    private String tableName;
    private String agreementColumnName;

    public GetAllInvoiceSumOperation (String tableName,String agreementColumnName){
        this.tableName = tableName;
        this.agreementColumnName = agreementColumnName;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<SaldoInvoiceSum> doOperation(Connection connection) {
        return new GetAllInvoiceSumQuery(tableName,agreementColumnName).execute(connection);
    }
}
