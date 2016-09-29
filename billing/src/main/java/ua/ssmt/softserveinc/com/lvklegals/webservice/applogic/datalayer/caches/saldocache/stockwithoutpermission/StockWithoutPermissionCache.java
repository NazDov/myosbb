package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 18.01.2016.
 */
public class StockWithoutPermissionCache {

    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();
    public StockWithoutPermissionCache(){
        this.documents = tm.doSelectOperation(new AllStockWithoutPermissionOperation());
    }

    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
