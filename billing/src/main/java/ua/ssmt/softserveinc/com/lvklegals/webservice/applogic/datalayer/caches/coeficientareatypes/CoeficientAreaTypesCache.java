package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.coeficientareatypes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vasyl on 06.01.16.
 */
public class CoeficientAreaTypesCache {
    private List<AreaType> documents;
    private TransactionManager<AreaType> tm = TransactionManager.getInstance();
    public CoeficientAreaTypesCache(){
        this.documents = tm.doSelectOperation(new CoeficientAreaTypesOperation());
    }
    public synchronized List<AreaType>  getDocuments() {
        return documents;
    }
}
