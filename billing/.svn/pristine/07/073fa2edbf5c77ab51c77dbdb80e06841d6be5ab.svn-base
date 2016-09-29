package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correction;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreatePaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeletePaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateCorrectionQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 27.01.2015.
 */
public class UpdateCorrectionOperation extends AbstractModifyOperation<Correction> {
    public UpdateCorrectionOperation() {
        super(new CorrectionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Correction value)   {
        new UpdateCorrectionQuery().execute(connection,value);
        deletePayments(connection,value);
        createPayments(connection, value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgentOne());
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgentTwo());
        if (value.getAgreementDepOne() != null && value.getAgreementDepOne().getId() != null)
            new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDepOne(),value.getDepartmentOne(),connection);
        if (value.getAgreementDepTwo() != null && value.getAgreementDepTwo().getId() != null)
            new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDepTwo(),value.getDepartmentTwo(),connection);
        return 0;
    }

    private void createPayments(Connection connection, Correction value) {
        Payment payment = createFirstPaymentFromCorrection(connection,value, value.getPaymentType());
        Payment payment2 = createSecondPaymentFromCorrection(connection,value, value.getPaymentType());
        new CreatePaymentQuery().execute(connection, payment);
        new CreatePaymentQuery().execute(connection,payment2);
    }

    private void deletePayments(Connection connection, Correction value) {
        PaymentCondition paymentCondition = new PaymentCondition();
        paymentCondition.setCorrectionId(value.getId());
        List<Payment> payments = new SearchPaymentQuery(paymentCondition).execute(connection);
        for (Payment payment: payments){
           new DeletePaymentQuery().execute(connection,payment);
        }

    }

    private Payment createFirstPaymentFromCorrection (Connection connection,Correction correction, PaymentType paymentType)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(correction.getContraAgentOne().getId());
        List <Agreement> agreements = new SearchAgreementQuery(cond).execute(connection);
        if (agreements.size() > 0)
            payment.setAgreement(agreements.get(0));
        payment.setContraAgent(correction.getContraAgentOne());
        payment.setServicePayment(correction.getServicePayment());
        payment.setNumberDocPayment(correction.getDocNumberOne().getAgreementNumber());
        payment.setCorrection(correction);
        payment.setDatePayment(correction.getDateCorrection());
        payment.setIsAutomated(0);
        payment.setReason("створено з документу корекції");
        payment.setSumPayment(correction.getSumCorrection());
        payment.setPaymentType(paymentType);
      //  payment.setDepartment(correction.getDepartmentOne());
        if (correction.getAgreementDepOne()==null)
            payment.setAgreementDep(new Agreement());
        else
        payment.setAgreementDep(correction.getAgreementDepOne());
        return payment;
    }

    private Payment createSecondPaymentFromCorrection (Connection connection,Correction correction, PaymentType paymentType)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(correction.getContraAgentTwo().getId());
        List <Agreement> agreements = new SearchAgreementQuery(cond).execute(connection);
        if (agreements.size() > 0)
            payment.setAgreement(agreements.get(0));
        payment.setContraAgent(correction.getContraAgentTwo());
        payment.setServicePayment(correction.getServicePaymentsecond());
        payment.setNumberDocPayment(correction.getDocNumberTwo().getAgreementNumber());
        payment.setCorrection(correction);
        payment.setDatePayment(correction.getDateCorrection());
        payment.setIsAutomated(0);
        payment.setReason("створено з документу корекції");
        payment.setSumPayment(-1d * correction.getSumCorrection());
        payment.setPaymentType(paymentType);
   //     payment.setDepartment(correction.getDepartmentTwo());
        if (correction.getAgreementDepTwo()==null)
            payment.setAgreementDep(new Agreement());
        else
        payment.setAgreementDep(correction.getAgreementDepTwo());
        return payment;
    }

    @Override
    public boolean validate(Connection connection, Correction value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
