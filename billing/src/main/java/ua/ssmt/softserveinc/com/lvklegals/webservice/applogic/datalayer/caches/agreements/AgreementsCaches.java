package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.inputfactord.GetAllInputFactorsOperation;

import java.util.List;

/**
 * Created by vostap on 24.12.2015.
 */
public class AgreementsCaches {
    private List<Agreement> documents;
    private TransactionManager<Agreement> tm = TransactionManager.getInstance();
    public AgreementsCaches(){
        this.documents = tm.doSelectOperation(new AllAgreementOperartion());
    }

    public synchronized List<Agreement>  getDocuments() {
        return documents;
    }
}
