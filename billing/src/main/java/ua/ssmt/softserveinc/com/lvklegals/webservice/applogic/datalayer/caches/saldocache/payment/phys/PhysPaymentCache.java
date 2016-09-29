package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.phys;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 13.01.2016.
 */
public class PhysPaymentCache {
    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();
    public PhysPaymentCache(){
        this.documents = tm.doSelectOperation(new AllPhysPaymentOperation());
    }

    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
