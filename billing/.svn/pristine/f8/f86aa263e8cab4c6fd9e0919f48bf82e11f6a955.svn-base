package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 11.03.2016.
 */
public class DepartmentPaymentCache {
    private List<DepartmentPaymentSum> documents;
    private TransactionManager<DepartmentPaymentSum> tm = TransactionManager.getInstance();
    public DepartmentPaymentCache(){
        this.documents = tm.doSelectOperation(new AllDepartmentPaymentOperation());
    }
    public synchronized List<DepartmentPaymentSum>  getDocuments() {
        return documents;
    }
}
