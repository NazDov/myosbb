package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.inputfactord;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class InputFactorsCache {
    private List<InputFactor> documents;
    private TransactionManager<InputFactor> tm = TransactionManager.getInstance();
    public InputFactorsCache(){
        this.documents = tm.doSelectOperation(new GetAllInputFactorsOperation());
    }

    public synchronized List<InputFactor>  getDocuments() {
        return documents;
    }
}
