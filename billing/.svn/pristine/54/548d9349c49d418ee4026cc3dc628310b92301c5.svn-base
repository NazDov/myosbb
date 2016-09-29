package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CorrectionOfRealizeSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 10.03.2016.
 */
public class CorrectionOfRealizeDepartmentSaldoCache {
    private List<CorrectionOfRealizeSum> documents;
    private TransactionManager<CorrectionOfRealizeSum> tm = TransactionManager.getInstance();
    public CorrectionOfRealizeDepartmentSaldoCache(){
        this.documents = tm.doSelectOperation(new AllCorrectionOfRealizeSaldoDepartmentOperation());
    }
    public synchronized List<CorrectionOfRealizeSum>  getDocuments() {
        return documents;
    }

}
