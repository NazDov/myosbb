package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correction;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.FormCorrection;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCorrectionQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreatePaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionMaxIdQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 04.02.2015.
 */
public class CreateCorrectionOperation extends AbstractModifyOperation<Correction> {
    public  CreateCorrectionOperation() {
        super(new CorrectionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Correction value)   {
        new CreateCorrectionQuery().execute(connection,value);
        createCorrectionWithPayment(value,connection);

        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgentOne());
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgentTwo());
        new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDepOne(),value.getDepartmentOne(),connection);
        new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDepTwo(),value.getDepartmentTwo(),connection);
        return 0;
    }

    @Override
    public boolean validate(Connection connection, Correction value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    private long createCorrectionWithPayment (Correction correction,Connection connection)   {
        List<Correction> maxCorrectionId = new SearchCorrectionMaxIdQuery(null).execute(connection);
        if (maxCorrectionId.size() > 0 && maxCorrectionId.size() > 0) {
            Payment payment = createFirstPaymentFromCorrection(maxCorrectionId.get(0), correction.getPaymentType(), connection);
            Payment payment2 = createSecondPaymentFromCorrection(maxCorrectionId.get(0), correction.getPaymentType(), connection);
            new CreatePaymentQuery().execute(connection,payment);
            new CreatePaymentQuery().execute(connection,payment2);
            return 0;
        } else return 1;

    }

    private Payment createFirstPaymentFromCorrection (Correction correction, PaymentType paymentType,Connection connection)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(correction.getContraAgentOne().getId());
        List <Agreement> agreements =  new SearchAgreementQuery(cond).execute(connection);
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

    private static Payment createSecondPaymentFromCorrection (Correction correction, PaymentType paymentType,Connection connection)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(correction.getContraAgentTwo().getId());
        List <Agreement> agreements = new SearchAgreementQuery(cond).execute(connection);
        if (agreements.size() > 0)
            payment.setAgreement(agreements.get(0));
        payment.setContraAgent(correction.getContraAgentTwo());
        payment.setServicePayment(correction.getServicePayment());
        payment.setNumberDocPayment(correction.getDocNumberTwo().getAgreementNumber());
        payment.setCorrection(correction);
        payment.setDatePayment(correction.getDateCorrection());
        payment.setIsAutomated(0);
        payment.setReason("створено з документу корекції");
        payment.setSumPayment(-1d * correction.getSumCorrection());
        payment.setPaymentType(paymentType);
        //    payment.setDepartment(correction.getDepartmentTwo());
        if (correction.getAgreementDepOne()==null)
            payment.setAgreementDep(new Agreement());
        else
            payment.setAgreementDep(correction.getAgreementDepTwo());
        return payment;
    }


}
