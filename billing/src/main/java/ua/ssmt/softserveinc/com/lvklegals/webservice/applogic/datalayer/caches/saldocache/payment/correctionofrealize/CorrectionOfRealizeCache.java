package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;


import java.util.List;

/**
 * Created by vostap on 14.01.2016.
 */
public class CorrectionOfRealizeCache {
    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();
    public CorrectionOfRealizeCache(){
        this.documents = tm.doSelectOperation(new AllCorrectionOfRealizeOperation());
    }

    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
