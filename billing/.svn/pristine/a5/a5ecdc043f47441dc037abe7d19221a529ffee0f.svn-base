package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.hotwattersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 04.01.2016.
 */
public class HotWatterSupplierCache {
    private List<HotWaterSupplier> documents;
    private TransactionManager<HotWaterSupplier> tm = TransactionManager.getInstance();
    public HotWatterSupplierCache(){
        this.documents = tm.doSelectOperation(new HotWatterSupplierOperation());
    }
    public synchronized List<HotWaterSupplier>  getDocuments() {
        return documents;
    }
}
