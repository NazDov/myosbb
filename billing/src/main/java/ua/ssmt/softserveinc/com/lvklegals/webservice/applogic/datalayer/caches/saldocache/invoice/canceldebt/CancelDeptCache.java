package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.canceldebt;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceWithServiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.GetAllInvoiceSumOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.AllPaymentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;

import java.util.List;

/**
 * Created by vostap on 01.03.2016.
 */
public class CancelDeptCache {

    private List<SaldoInvoiceWithServiceSum> documents;
    private TransactionManager<SaldoInvoiceWithServiceSum> tm = TransactionManager.getInstance();
    public CancelDeptCache(){
        this.documents = tm.doSelectOperation(new GetAllCancelDeptOperation());
    }

    public synchronized List<SaldoInvoiceWithServiceSum>  getDocuments() {
        return documents;
    }
}
