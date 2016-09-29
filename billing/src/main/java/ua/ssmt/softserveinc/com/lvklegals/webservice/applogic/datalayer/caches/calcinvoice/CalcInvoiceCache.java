package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.inputfactord.GetAllInputFactorsOperation;

import java.util.List;

/**
 * Created by vostap on 28.12.2015.
 */
public class CalcInvoiceCache {
    private List<CalcInvoice> documents;
    private TransactionManager<CalcInvoice> tm = TransactionManager.getInstance();
    public CalcInvoiceCache(){
        this.documents = tm.doSelectOperation(new GetAllCalcInvoiceOperation());
    }

    public synchronized List<CalcInvoice>  getDocuments() {
        return documents;
    }
}
