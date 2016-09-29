package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.paymentdepartment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentSum;

import java.util.List;

/**
 * Created by vostap on 14.03.2016.
 */
public class DepartmentDepartmentPaymentCache {
    private List<DepartmentPaymentSum> documents;
    private TransactionManager<DepartmentPaymentSum> tm = TransactionManager.getInstance();
    public DepartmentDepartmentPaymentCache(){
        this.documents = tm.doSelectOperation(new DepartmentDepartmentPaymentOperation());
    }
    public synchronized List<DepartmentPaymentSum>  getDocuments() {
        return documents;
    }
}
