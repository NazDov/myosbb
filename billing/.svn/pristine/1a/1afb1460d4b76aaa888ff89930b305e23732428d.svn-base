package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounterinperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters.GetAllDocumentsRegisterOfCounterOperation;

import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class RegisterOfCounterInPeriodCache_ {
    private List<RegisterOfCounter> documents;
    private TransactionManager<RegisterOfCounter> tm = TransactionManager.getInstance();
    public RegisterOfCounterInPeriodCache_(){
        this.documents = tm.doSelectOperation(new RegisterOfCounterInPeriodOperation());
    }

    public synchronized List<RegisterOfCounter>  getDocuments() {
        return documents;
    }
}
