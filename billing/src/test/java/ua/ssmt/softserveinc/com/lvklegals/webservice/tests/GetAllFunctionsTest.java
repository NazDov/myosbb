package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.io.IOException;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class GetAllFunctionsTest {
    private static ReferencesService service = new ReferencesServiceImpl();

    private static User getUser() {
        User user = new User();
        user.setId(1L);
        user.setName("admin");
        user.setUserPassword("admin");
        return user;
    }


    private static Agreement getAgreementOne()  {
        AgreementCondition agreementCondition = new AgreementCondition();
        agreementCondition.setAgreementNumber("100020");
        List<Agreement> list = service.searchAgreement(agreementCondition, getUser());
        return list.get(0);
    }

    private static Agreement getAgreementTwo()  {
        AgreementCondition agreementCondition = new AgreementCondition();
        agreementCondition.setAgreementNumber("100024");
        List<Agreement> list = service.searchAgreement(agreementCondition, getUser());
        return list.get(0);
    }

    private static ContraAgent getContraAgentOne()  {
        ContraAgentCondition contraAgentCondition = new ContraAgentCondition();
        contraAgentCondition.setEdrpo("1111");
        List<ContraAgent> list = service.searchContraAgent(contraAgentCondition, getUser());
        return list.get(0);
    }

    private static ContraAgent getContraAgentTwo()   {
        ContraAgentCondition contraAgentCondition = new ContraAgentCondition();
        contraAgentCondition.setEdrpo("1111");
        List<ContraAgent> list = service.searchContraAgent(contraAgentCondition, getUser());
        return list.get(0);
    }

    private static PaymentType getPaymentType()  {
        PaymentType paymentType = new PaymentType();
        paymentType.setId(1L);
        paymentType.setCode("01");
        paymentType.setName("оплата по банку");
        return paymentType;
    }

    private static ServicePayment getServicePayment()  {
        ServicePayment servicePayment = new ServicePayment();
        servicePayment.setId(1L);
        servicePayment.setName("ВП");
        return servicePayment;
    }
    private static Correction getCorrection()   {
        Correction correction = new Correction();
        //correction.setId(1L);
        correction.setContraAgentOne(getContraAgentOne());
        correction.setContraAgentTwo(getContraAgentTwo());
        correction.setDocNumberOne(getAgreementOne());
        correction.setDocNumberTwo(getAgreementTwo());
        correction.setSumCorrection(155.25d);
        correction.setNotes("Test Notes");
        correction.setInternalTurnOver(new InternalTurnOver(1L));
        correction.setPaymentType(getPaymentType());
        correction.setServicePayment(getServicePayment());
        correction.setServicePaymentsecond(getServicePayment());
        Calendar cal = Calendar.getInstance();
        cal.set(2013, Calendar.JANUARY, 9); //Year, month and day of month
        Date date = cal.getTime();
        correction.setDateCorrection(date);
        return correction;
    }

    private static Payment createFirstPaymentFromCorrection (Correction correction)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber("100095");
        //cond.setContraAgentID(correction.getContraAgentOne().getId());
        Agreement agreement = service.searchAgreement(cond, getUser()).get(0);
        payment.setAgreement(agreement);
        payment.setContraAgent(correction.getContraAgentOne());
        payment.setPaymentType(correction.getPaymentType());
        payment.setServicePayment(correction.getServicePayment());
        payment.setNumberDocPayment(correction.getDocNumberOne().getAgreementNumber());
        payment.setCorrection(correction);
        payment.setDatePayment(correction.getDateCorrection());
        payment.setIsAutomated(0);
        payment.setReason("create from Correction Document");
        payment.setSumPayment(correction.getSumCorrection());
        return payment;
    }

    private static Payment createSecondPaymentFromCorrection (Correction correction)   {
        Payment payment = new Payment();
        AgreementCondition cond = new AgreementCondition();
        cond.setAgreementNumber("100095");
        //cond.setContraAgentID(correction.getContraAgentOne().getId());
        Agreement agreement = service.searchAgreement(cond, getUser()).get(0);
        payment.setAgreement(agreement);
        payment.setContraAgent(correction.getContraAgentTwo());
        payment.setPaymentType(correction.getPaymentType());
        payment.setServicePayment(correction.getServicePayment());
        payment.setNumberDocPayment(correction.getDocNumberTwo().getAgreementNumber());
        payment.setCorrection(correction);
        payment.setDatePayment(correction.getDateCorrection());
        payment.setIsAutomated(0);
        payment.setReason("create from Correction Document");
        payment.setSumPayment(-1f * correction.getSumCorrection());
        return payment;
    }

    public static void  main(String[] args) throws SQLException, IOException, ValidateException, StorageException, ParseException {
        //service.getAllPaymentServices(getUser());
      //  service.createCorrection(getCorrection(),getUser());
    }
}
