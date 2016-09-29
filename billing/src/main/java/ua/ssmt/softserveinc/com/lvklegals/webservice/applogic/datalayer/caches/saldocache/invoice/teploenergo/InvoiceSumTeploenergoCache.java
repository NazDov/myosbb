package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.teploenergo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.GetAllInvoiceSumOperation;

import java.util.List;

/**
 * Created by vostap on 04.03.2016.
 */
public class InvoiceSumTeploenergoCache {
    public InvoiceSumTeploenergoCache(){
        this.documents = tm.doSelectOperation(new AllInvoiceTeploenergoOperation());
    }
    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();


    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
