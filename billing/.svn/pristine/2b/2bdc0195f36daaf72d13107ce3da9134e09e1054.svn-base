package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.calcinvoiceformpreviosperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;


import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class CalcInvoiceFromPreviousPeriodCache {
    private List<CalcInvoice> documents;
    private TransactionManager<CalcInvoice> tm = TransactionManager.getInstance();
    private CalcInvoiceCondition condition;

    public CalcInvoiceFromPreviousPeriodCache(CalcInvoiceCondition condition){
        System.out.println("Start cache  CalcInvoiceFromPreviousPeriodCache");
        this.condition = condition;
        this.documents = tm.doSelectOperation(new CalcInvoiceFromPreviousPeriodOperation(condition));
        System.out.println("End cache  CalcInvoiceFromPreviousPeriodCache");
    }


    public synchronized List<CalcInvoice>  getDocuments() {
        return documents;
    }
}
