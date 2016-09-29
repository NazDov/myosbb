package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.rains;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceRainsInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.GetCurrentInvoiceRainOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;

import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class CalcInvoiceRainsCache {

    private List<CalcInvoiceRainsInvoice> documents;
    private TransactionManager<CalcInvoiceRainsInvoice> tm = TransactionManager.getInstance();
    public CalcInvoiceRainsCache(CalcInvoiceCondition condition){
        System.out.println("Start CalcInvoiceRainsCache.... ");
        this.documents = tm.doSelectOperation(new GetCurrentInvoiceRainOperation(condition));
        System.out.println("End CalcInvoiceRainsCache.... ");
    }

    public synchronized List<CalcInvoiceRainsInvoice>  getDocuments() {
        return documents;
    }
}
