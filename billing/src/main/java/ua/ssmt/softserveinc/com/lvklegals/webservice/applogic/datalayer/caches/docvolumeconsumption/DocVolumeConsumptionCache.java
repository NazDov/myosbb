package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.docvolumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.hotwattersupplier.HotWatterSupplierOperation;

import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class DocVolumeConsumptionCache {
    private List<VolumeConsumption> documents;
    private TransactionManager<VolumeConsumption> tm = TransactionManager.getInstance();
    public DocVolumeConsumptionCache(){
        this.documents = tm.doSelectOperation(new AllDocVolumeConsumptionOperation());
    }
    public synchronized List<VolumeConsumption>  getDocuments() {
        return documents;
    }
}
