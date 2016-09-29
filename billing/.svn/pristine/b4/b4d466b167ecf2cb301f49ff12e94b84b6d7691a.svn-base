package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounterinperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounters.GetAllUnregisterOfCounterDocumentOperation;

import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class UnregisterOfCounterInPeriodCache_ {
    private List<UnregisterOfCounter> documents;
    private TransactionManager<UnregisterOfCounter> tm = TransactionManager.getInstance();
    public UnregisterOfCounterInPeriodCache_(){
        this.documents = tm.doSelectOperation(new UnregisterOfCounterInPeriodOperation());
    }
    public synchronized List<UnregisterOfCounter>  getDocuments() {
        return documents;
    }
}
