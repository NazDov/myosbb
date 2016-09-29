package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoicetohotwattersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;


import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class CalcInvoiceHotWatterSupplierCache {
    private List<CalcInvoice> documents;
    private TransactionManager<CalcInvoice> tm = TransactionManager.getInstance();
    public CalcInvoiceHotWatterSupplierCache(){
        this.documents = tm.doSelectOperation(new AllCalcInvoiceToHotWatterSupplierOperation());
    }
    public synchronized List<CalcInvoice>  getDocuments() {
        return documents;
    }
}
