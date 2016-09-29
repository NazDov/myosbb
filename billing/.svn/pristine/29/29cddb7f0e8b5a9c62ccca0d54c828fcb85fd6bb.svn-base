package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.koef;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Koef;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class KoefCache {
    private List<Koef> documents;
    private TransactionManager<Koef> tm = TransactionManager.getInstance();
    public KoefCache(){
        this.documents = tm.doSelectOperation(new AllKoefOperation());
    }
    public synchronized List<Koef>  getDocuments() {
        return documents;
    }
}
