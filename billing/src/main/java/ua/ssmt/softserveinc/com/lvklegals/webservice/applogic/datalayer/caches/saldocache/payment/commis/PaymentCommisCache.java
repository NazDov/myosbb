package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.commis;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 15.01.2016.
 */
public class PaymentCommisCache {

    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();
    public PaymentCommisCache(){
        this.documents = tm.doSelectOperation(new AllPaymentCommisOperation());
    }

    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
