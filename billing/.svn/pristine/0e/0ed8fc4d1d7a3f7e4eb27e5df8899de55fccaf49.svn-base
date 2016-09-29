package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;


import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class StockWithoutPermissionCache {
    private List<StockWithoutPermission> documents;
    private TransactionManager<StockWithoutPermission> tm = TransactionManager.getInstance();
    public StockWithoutPermissionCache(){
        this.documents = tm.doSelectOperation(new AllStockWithoutPermissionOperation());
    }

    public synchronized List<StockWithoutPermission>  getDocuments() {
        return documents;
    }
}
