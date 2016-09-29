package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentToDelete;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.SourceInputPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreatePaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteNotLoadedPaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoQuery;

import java.sql.Connection;

/**
 * Created by vostap on 10/2/2015.
 */
public class FixPaymentOperation extends AbstractModifyOperation<PaymentToDelete> {

    public FixPaymentOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PaymentToDelete value) {
        Payment p = covert(value);
        new CreatePaymentQuery().execute(connection,p);
        new DeleteNotLoadedPaymentQuery().execute(connection,value);
        new UpdateSaldoQuery().execute(connection,p.getContraAgent().getId());
        return 0;
    }

    private Payment covert(PaymentToDelete value) {
        Payment res = new Payment();
        res.setOwnerBankAccount(value.getOwnerBankAccount());
        res.setDatePayment(value.getDatePayment());
        res.setId(value.getId());
        res.setIsAutomated(value.getIsAutomated());
        res.setAgreement(value.getAgreement());
        res.setBank(value.getBank());
        res.setContraAgent(value.getContraAgent());
        res.setBankAccount(value.getBankAccount());
        res.setPaymentType(value.getPaymentType());
        res.setNumberDocPayment(value.getNumberDocPayment());
        res.setReason(value.getReason());
        res.setServicePayment(value.getServicePayment());
        res.setSumPayment(value.getSumPayment());
        res.setCorrection(value.getCorrection());
        res.setSourceInputPayment(new SourceInputPayment(3L));
        return res;
    }

    @Override
    public boolean validate(Connection connection, PaymentToDelete value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
