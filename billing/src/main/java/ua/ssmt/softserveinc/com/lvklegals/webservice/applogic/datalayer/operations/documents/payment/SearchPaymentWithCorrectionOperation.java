package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 20.11.2015.
 */
public class SearchPaymentWithCorrectionOperation extends AbstractSelectOperation<Payment> {
    private PaymentCondition condition;

    public SearchPaymentWithCorrectionOperation(PaymentCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Payment> doOperation(Connection connection)   {
        List<Payment> list = new SearchPaymentQuery(condition).execute(connection);
        for (Payment p:list){
            p.setContraAgent(this.getFillers().getContraAgentByID(connection,p.getContraAgent().getId()));
            p.setPaymentType(this.getFillers().getPaymentTypeByID(connection,p.getPaymentType().getId()));
            p.setAgreement(this.getFillers().getAgreementByID(connection,p.getAgreement().getId()));
            p.setServicePayment(this.getFillers().getServicePaymentByID(connection,p.getServicePayment().getId()));
            p.setBank(this.getFillers().getBankByID(connection,p.getBank().getId()));
            p.setOwnerBankAccount(this.getFillers().getOwnerBankAccount(connection,p.getOwnerBankAccount().getId()));
            p.setPaymentType(this.getFillers().getPaymentTypeByID(connection,p.getPaymentType().getId()));
            p.setCorrection(this.getFillers().getCorrectionByID(connection,p.getCorrection().getId()));
        }
        return list;
    }
}
