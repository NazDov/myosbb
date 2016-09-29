package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.subservices.GetAllSubServiceOperation;

import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class RainsCache {
    private List<Rains> documents;
    private TransactionManager<Rains> tm = TransactionManager.getInstance();
    public RainsCache(){
        this.documents = tm.doSelectOperation(new GetAllRainsOperation());
    }
    public synchronized List<Rains>  getDocuments() {
        return documents;
    }
}
