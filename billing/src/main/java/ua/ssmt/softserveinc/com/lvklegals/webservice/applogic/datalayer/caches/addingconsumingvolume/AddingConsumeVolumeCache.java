package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.addingconsumingvolume;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.GetAllCalcInvoiceOperation;

import java.util.List;

/**
 * Created by vostap on 30.12.2015.
 */
public class AddingConsumeVolumeCache {
    private List<AddingByConsumingVolume> documents;
    private TransactionManager<AddingByConsumingVolume> tm = TransactionManager.getInstance();
    public AddingConsumeVolumeCache(){
        this.documents = tm.doSelectOperation(new GetAllConsumeVolumeOperation());
    }

    public synchronized List<AddingByConsumingVolume>  getDocuments() {
        return documents;
    }
}
