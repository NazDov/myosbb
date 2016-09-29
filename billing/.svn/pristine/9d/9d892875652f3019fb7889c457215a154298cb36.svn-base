package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.saldodetails.AllSaldoDetaillsesOperation;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 13.01.2016.
 */
public class SaldoCache {
    private List<Saldo> documents;
    private TransactionManager<Saldo> tm = TransactionManager.getInstance();
    public SaldoCache(){
        this.documents = tm.doSelectOperation(new GetAllSaldoOperation());
    }
    public synchronized List<Saldo>  getDocuments() {
        return documents;
    }
}
