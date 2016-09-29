package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.subservices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters.GetAllDocumentsRegisterOfCounterOperation;

import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class SubserviceCache {

    private List<SubService> documents;
    private TransactionManager<SubService> tm = TransactionManager.getInstance();
    public SubserviceCache(){
        this.documents = tm.doSelectOperation(new GetAllSubServiceOperation());
    }

    public synchronized List<SubService>  getDocuments() {
        return documents;
    }

}
