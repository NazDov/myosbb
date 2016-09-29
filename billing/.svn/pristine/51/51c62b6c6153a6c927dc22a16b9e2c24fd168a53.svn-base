package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentToDelete;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentNotLoadedQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 10/1/2015.
 */
public class SearchPaymentNotLoadedOperation extends AbstractSelectOperation<PaymentToDelete> {

    private PaymentCondition condition;

    public SearchPaymentNotLoadedOperation(PaymentCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<PaymentToDelete> doOperation(Connection connection)   {
        List<PaymentToDelete> list = new SearchPaymentNotLoadedQuery(condition).execute(connection);
        for (PaymentToDelete p:list){
            p.setContraAgent(new ContraAgent());
            p.setPaymentType(this.getFillers().getPaymentTypeByID(connection,p.getPaymentType().getId()));
            p.setAgreement(new Agreement());
            p.setServicePayment(this.getFillers().getServicePaymentByID(connection,p.getServicePayment().getId()));
            p.setBank(this.getFillers().getBankByID(connection,p.getBank().getId()));
            p.setOwnerBankAccount(this.getFillers().getOwnerBankAccount(connection,p.getOwnerBankAccount().getId()));
        }
        return list;
    }

}
