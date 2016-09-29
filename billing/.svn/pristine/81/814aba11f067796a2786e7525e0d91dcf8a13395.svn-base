package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.invoicebylkp;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 01.04.2016.
 */
public class InvoiceByLKPSumCache {
    public InvoiceByLKPSumCache(String tableName,String agreementColumnName){
        this.documents = tm.doSelectOperation(new GetAllInvoiceByLKPSumOperation(tableName,agreementColumnName));
    }
    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();


    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
