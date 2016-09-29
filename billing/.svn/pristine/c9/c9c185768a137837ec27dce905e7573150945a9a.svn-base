package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.DepartmentInputInvoice;


import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class DepartmentInputCache {
    private List<DepartmentInputInvoice> documents;
    private TransactionManager<DepartmentInputInvoice> tm = TransactionManager.getInstance();
    public DepartmentInputCache(){
        this.documents = tm.doSelectOperation(new AllDepartmentInputOperation());
    }
    public synchronized List<DepartmentInputInvoice>  getDocuments() {
        return documents;
    }
}
