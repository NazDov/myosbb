package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.saldodetails;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 18.01.2016.
 */
public class SaldoDetisesCache  {
    private List<SaldoDetails> documents;
    private TransactionManager<SaldoDetails> tm = TransactionManager.getInstance();
    public SaldoDetisesCache(){
        this.documents = tm.doSelectOperation(new AllSaldoDetaillsesOperation());
    }

    public synchronized List<SaldoDetails>  getDocuments() {
        return documents;
    }
}
