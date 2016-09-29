package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;


import java.util.List;

/**
 * Created by vostap on 14.01.2016.
 */
public class PaymentCache{
    private SumPaymentCondition condition;
    private List<SaldoInvoiceSum> documents;
    private TransactionManager<SaldoInvoiceSum> tm = TransactionManager.getInstance();
    public PaymentCache(){
        this.documents = tm.doSelectOperation(new AllPaymentOperation());
    }

    public synchronized List<SaldoInvoiceSum>  getDocuments() {
        return documents;
    }
}
