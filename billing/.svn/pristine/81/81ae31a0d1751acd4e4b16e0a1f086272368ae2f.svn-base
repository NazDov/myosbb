package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains.norma;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.RainNorma;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 04.04.2016.
 */
public class RainsNormaCache {
    private List<RainNorma> documents;
    private TransactionManager<RainNorma> tm = TransactionManager.getInstance();
    public RainsNormaCache(){
        this.documents = tm.doSelectOperation(new GetAllRainsNormaOperation());
    }
    public synchronized List<RainNorma>  getDocuments() {
        return documents;
    }
}
