package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.input;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;


import java.util.List;

/**
 * Created by vostap on 01.02.2016.
 */
public class InputCache {
    private List<Input> documents;
    private TransactionManager<Input> tm = TransactionManager.getInstance();
    public InputCache(){
        this.documents = tm.doSelectOperation(new GetAllInputOperation());
    }
    public synchronized List<Input>  getDocuments() {
        return documents;
    }
}
