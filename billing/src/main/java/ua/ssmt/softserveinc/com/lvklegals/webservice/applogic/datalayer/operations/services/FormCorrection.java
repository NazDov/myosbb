package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.util.List;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class FormCorrection {
    private static ReferencesService service = new ReferencesServiceImpl();

    private static Payment createFirstPaymentFromCorrection (Correction correction, PaymentType paymentType,User user)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(correction.getContraAgentOne().getId());
        List <Agreement> agreements = service.searchAgreement(cond, user);
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

    private static Payment createSecondPaymentFromCorrection (Correction correction, PaymentType paymentType, User user)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setContraAgentID(correction.getContraAgentTwo().getId());
        List <Agreement> agreements = service.searchAgreement(cond, user);
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

    public static long createCorrectionWithPayment (Correction correction, User user)   {
        List<Correction> maxCorrectionId = service.getMaxCorrectionId(null, user);
        if (maxCorrectionId.size() > 0 && maxCorrectionId.size() > 0) {
            Payment payment = createFirstPaymentFromCorrection(maxCorrectionId.get(0), correction.getPaymentType(), user);
            Payment payment2 = createSecondPaymentFromCorrection(maxCorrectionId.get(0), correction.getPaymentType(), user);
            service.createPayment(payment, user);
            service.createPayment(payment2, user);
            return 0;
        } else return 1;

    }

    public static long updateCorrectionWithPayment (Correction correction, User user)   {
        PaymentCondition paymentCondition = new PaymentCondition();
        paymentCondition.setCorrectionId(correction.getId());
        List<Payment> payments = service.searchPayment(paymentCondition,user);
        for (Payment payment: payments){
            service.deletePayment(payment,user);
        }
        service.updateCorrection(correction,user);
        if (correction.getId() != null) {
            Payment payment = createFirstPaymentFromCorrection(correction, correction.getPaymentType(), user);
            Payment payment2 = createSecondPaymentFromCorrection(correction, correction.getPaymentType(), user);
            service.createPayment(payment, user);
            service.createPayment(payment2, user);
            return 0;
        } else return 1;
    }

    public static long deleteCorrectionWithPayment (Correction correction, User user) {
        PaymentCondition paymentCondition = new PaymentCondition();
        paymentCondition.setCorrectionId(correction.getId());
        List<Payment> payments = service.searchPayment(paymentCondition,user);
        for (Payment payment: payments){
            service.deletePayment(payment,user);
        }
        service.deleteCorrection(correction, user);
        return 0;
    }
}
