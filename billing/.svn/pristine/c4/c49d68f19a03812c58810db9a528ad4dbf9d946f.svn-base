package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class RegisterOfCounterDocumentsCache {

    private List<RegisterOfCounter> documents;
    private TransactionManager<RegisterOfCounter> tm = TransactionManager.getInstance();
    public RegisterOfCounterDocumentsCache(){
        this.documents = tm.doSelectOperation(new GetAllDocumentsRegisterOfCounterOperation());
    }

    public synchronized List<RegisterOfCounter>  getDocuments() {
        return documents;
    }
}
