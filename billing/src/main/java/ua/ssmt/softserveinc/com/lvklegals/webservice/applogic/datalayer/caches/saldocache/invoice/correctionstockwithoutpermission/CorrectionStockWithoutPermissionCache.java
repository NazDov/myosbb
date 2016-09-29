package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.correctionstockwithoutpermission;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 02.03.2016.
 */
public class CorrectionStockWithoutPermissionCache {
    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();
    public CorrectionStockWithoutPermissionCache(){
        this.documents = tm.doSelectOperation(new AllCorrectionStockWithoutPermissionOpeation());
    }
    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
