package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounters;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters.GetAllDocumentsRegisterOfCounterOperation;

import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class UnregisterOfCounterDocumentsCache {
    private List<UnregisterOfCounter> documents;
    private TransactionManager<UnregisterOfCounter> tm = TransactionManager.getInstance();
    public UnregisterOfCounterDocumentsCache(){
        this.documents = tm.doSelectOperation(new GetAllUnregisterOfCounterDocumentOperation());
    }
    public synchronized List<UnregisterOfCounter>  getDocuments() {
        return documents;
    }
}
