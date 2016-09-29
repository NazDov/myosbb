package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.io.IOException;
import java.sql.SQLException;
import java.text.*;
import java.util.*;

/**
 *
 *
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class CreateCommissTest {
    private static ReferencesService service = new ReferencesServiceImpl();

    private static User getUser() {
        User user = new User();
        user.setId(1L);
        user.setName("admin");
        user.setUserPassword("admin");
        return user;
    }

    /**
     * Return payments for create Commission document using date range
     * @param dateBegin start date of payments
     * @param dateEnd   end date of payments
     * @return list of Payments
     * @
     */
    private static List <Payment> getPayments (Date dateBegin, Date dateEnd)   {
        PaymentCondition paymentCondition = new PaymentCondition();
        paymentCondition.setDateBegin(dateBegin);
        paymentCondition.setDateEnd(dateEnd);
        return service.searchPayment(paymentCondition,getUser());
    }

    /**
     * Return payments Department for create Commission document using date range
     * @param dateBegin start date of payments
     * @param dateEnd   end date of payments
     * @return list of Payments
     * @
     */
    private static List <PaymentDepartment> getPaymentsDepartment (Date dateBegin, Date dateEnd)   {
        PaymentDepartmentCondition paymentDepartmentCondition = new PaymentDepartmentCondition();
        paymentDepartmentCondition.setDateBegin(dateBegin);
        paymentDepartmentCondition.setDateEnd(dateEnd);
        return service.searchPaymentDepartment(paymentDepartmentCondition,getUser());
    }

    /**
     * Calculate summary of Commission for contragent based on algorithm
     * @param contragent contragent for calculation
     * @param sumPayment summary from payment
     * @param algorithm  algorithm
     * @return summary of Commission
     */
    private static Double calcCommissionSum(ContraAgent contragent, Double sumPayment, Long algorithm){
        Double percent = contragent.getProperty().getPercentCommiss();
        Double sumCommission = 0.0d;
        if (algorithm.equals(1L))
            sumCommission = sumPayment *(percent/100*(1-percent/100));
        if (algorithm.equals(2L))
            sumCommission = sumPayment *percent/100;
        return sumCommission;
    }

    /**
     * Fill commission from payments document
     * @param payment Payment
     * @return        Commission
     */
    private static Commission fillCommission(Payment payment)  {
        Commission commission = new Commission();
        commission.setNotes(payment.getReason());
        Date date = service.getCurrentPeriod(getUser()).getCurrentPeriod();
        commission.setDateComission(service.getLastDayOfPeriod(date,getUser()));
        ContraAgent contragent = payment.getContraAgent();
        commission.setContraAgent(contragent);
        commission.setAlgorithm(contragent.getProperty().getAlgorithm());
        Double sum = calcCommissionSum(contragent, payment.getSumPayment(),contragent.getProperty().getAlgorithm().getId());
        commission.setSumCommission(sum);
        commission.setSumPayment(payment.getSumPayment());
        commission.setAgreement(payment.getAgreement());
        return commission;
    }

    /**
     * Fill commission from payment department document
     * @param paymentDepartment PaymentDepartment
     * @return        Commission
     */
    private static Commission fillCommission(PaymentDepartment paymentDepartment)  {
        Commission commission = new Commission();
        commission.setNotes(paymentDepartment.getNote());
        Date date = service.getCurrentPeriod(getUser()).getCurrentPeriod();
        commission.setDateComission(service.getLastDayOfPeriod(date,getUser()));
        ContraAgent contragent = paymentDepartment.getContraAgent();
        commission.setContraAgent(contragent);
        commission.setAlgorithm(contragent.getProperty().getAlgorithm());
        Double sum = calcCommissionSum(contragent, paymentDepartment.getSumPayment(),contragent.getProperty().getAlgorithm().getId());
        commission.setSumCommission(sum);
        commission.setSumPayment(paymentDepartment.getSumPayment());
        commission.setAgreement(paymentDepartment.getAgreement());
        commission.setDepartment(paymentDepartment.getDepartment());
        return commission;
    }

    /**
     * Verify is Commission Document is created
     * @param commission Commission
     * @return result of search
     * @
     */
    private static boolean isCommissionCreated (Commission commission)   {
        CommissionCondition commissionCondition =new CommissionCondition();
        commissionCondition.setNotes(commission.getNotes());
        commissionCondition.setDateCommission(commission.getDateComission());
        commissionCondition.setContraAgentID(commission.getContraAgent().getId());
        commissionCondition.setAlgorithm(commission.getAlgorithm().getId());
        commissionCondition.setSumCommission(commission.getSumCommission());
        commissionCondition.setSumPayment(commission.getSumPayment());
        commissionCondition.setAgreementID(commission.getAgreement().getId());
        commissionCondition.setDepartmentID(commission.getDepartment().getId());
        List<Commission> list = service.searchCommission(commissionCondition,getUser());
        return list.size() > 0;
    }

    /**
     *  Create Commmission document from Payments by period
     * @param dateBegin Begin of period
     * @param dateEnd   End of period
     * @return
     */
    public static Long createCommissionFromPayments (Date dateBegin, Date dateEnd)  {
        List <Payment> payments = getPayments(dateBegin, dateEnd);
        for (Payment payment : payments){
            if (payment.getContraAgent().getProperty().getFlagCommiss()){
                Commission commission = fillCommission(payment);
                Boolean isCreate = isCommissionCreated(commission);
                if (!isCreate)
                    service.createCommission(commission, getUser());
            }
        }
        return 1L;
    }

    /**
     *  Create Commmission document from Payments by period
     * @param dateBegin Begin of period
     * @param dateEnd   End of period
     * @return
     */
    public static Long createCommissionFromPaymentDepartment (Date dateBegin, Date dateEnd)   {
        List <PaymentDepartment> paymentDepartments = getPaymentsDepartment(dateBegin, dateEnd);
        for (PaymentDepartment paymentDepartment : paymentDepartments){
            if (paymentDepartment.getContraAgent().getProperty().getFlagCommiss()){
                Commission commission = fillCommission(paymentDepartment);
                Boolean isCreate = isCommissionCreated(commission);
                if (!isCreate)
                    service.createCommission(commission, getUser());
            }
        }
        return 1L;
    }
    public static void  main(String[] args) throws SQLException, IOException, ValidateException, StorageException, ParseException {
        Date dateBeginString = new Date("2014-11-14");
        Date dateEndString = new Date("2014-11-14");

        List <PaymentDepartment> paymentDepartments = getPaymentsDepartment(dateBeginString, dateEndString);

        for (PaymentDepartment paymentDepartment : paymentDepartments){
            if (paymentDepartment.getContraAgent().getProperty().getFlagCommiss()){
                Commission commission = fillCommission(paymentDepartment);
                Boolean isCreate = isCommissionCreated(commission);
                if (!isCreate)
                    service.createCommission(commission, getUser());
            }
        }



    }
}
