package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CommissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentDepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class FormCommission {
    private static ReferencesService service = new ReferencesServiceImpl();
    private Connection connection;
    public FormCommission(Connection connection) {
        this.connection = connection;}
    /**
     * Return payments for create Commission document using date range
     * @param dateBegin start date of payments
     * @param dateEnd   end date of payments
     * @return list of Payments
     * @throws ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException
     */
    private static List<Payment> getPayments (Date dateBegin, Date dateEnd, Long id, User user)   {
        PaymentCondition paymentCondition = new PaymentCondition();
        if (id == null) {
            paymentCondition.setDateBegin(dateBegin);
            paymentCondition.setDateEnd(dateEnd);
        } else paymentCondition.setId(id);
        return service.searchPayment(paymentCondition,user);
    }

    /**
     * Return payments Department for create Commission document using date range
     * @param dateBegin start date of payments
     * @param dateEnd   end date of payments
     * @return list of Payments
     * @
     */
    private static List <PaymentDepartment> getPaymentsDepartment (Date dateBegin, Date dateEnd, Long id, User user)   {
        PaymentDepartmentCondition paymentDepartmentCondition = new PaymentDepartmentCondition();
        if (id == null) {
            paymentDepartmentCondition.setDateBegin(dateBegin);
            paymentDepartmentCondition.setDateEnd(dateEnd);
        } else paymentDepartmentCondition.setId(id);
        return service.searchPaymentDepartment(paymentDepartmentCondition, user);
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
        if (algorithm.equals(2L))
            sumCommission = sumPayment *(percent/100/(1-percent/100));
        if (algorithm.equals(3L))
            sumCommission = sumPayment *percent/100;
        return sumCommission;
    }

    /**
     * Fill commission from payments document
     * @param payment Payment
     * @param user    User
     * @return        Commission
     */
    private static Commission fillCommission(Payment payment, User user) {
        Commission commission = new Commission();
        commission.setNotes(payment.getReason());
        Date date = service.getCurrentPeriod(user).getCurrentPeriod();
        commission.setDateComission(payment.getDatePayment());
        ContraAgent contragent = payment.getContraAgent();
        commission.setContraAgent(contragent);
        commission.setAlgorithm(contragent.getProperty().getAlgorithm());
        Double sum = calcCommissionSum(contragent, payment.getSumPayment(),contragent.getProperty().getAlgorithm().getId());
        commission.setSumCommission(sum);
        commission.setSumPayment(payment.getSumPayment());
        commission.setAgreement(payment.getAgreement());
        commission.setServicePayment(payment.getServicePayment());
        commission.setIsAutomated(3);
        return commission;
    }

    /**
     * Fill commission from payment department document
     * @param paymentDepartment PaymentDepartment
     * @param user              User
     * @return        Commission
     */
    private static Commission fillCommission(PaymentDepartment paymentDepartment, User user) {
        Commission commission = new Commission();

        commission.setNotes(paymentDepartment.getNote());
        Date date = service.getCurrentPeriod(user).getCurrentPeriod();
        commission.setDateComission(paymentDepartment.getDatePayment());
        ContraAgent contragent = paymentDepartment.getContraAgent();
        commission.setContraAgent(contragent);
        commission.setAlgorithm(contragent.getProperty().getAlgorithm());
        Double sum = calcCommissionSum(contragent, paymentDepartment.getSumPayment(),contragent.getProperty().getAlgorithm().getId());
        commission.setSumCommission(sum);
        commission.setSumPayment(paymentDepartment.getSumPayment());
        commission.setAgreement(paymentDepartment.getAgreement());
        commission.setAgreementDep(paymentDepartment.getContragentAgreement());
        commission.setDepartment(paymentDepartment.getDepartment());
        commission.setServicePayment(paymentDepartment.getServicePayment());
        commission.setIsAutomated(3);
        return commission;
    }

    /**
     * Verify is Commission Document is created
     * @param commission Commission
     * @return result of search
     * @
     */
    private static boolean isCommissionCreated (Commission commission, User user)   {
        CommissionCondition commissionCondition =new CommissionCondition();
        commissionCondition.setNotes(commission.getNotes());
        commissionCondition.setDateCommission(commission.getDateComission());
        commissionCondition.setContraAgentID(commission.getContraAgent().getId());
        commissionCondition.setAlgorithm(commission.getAlgorithm().getId());
        commissionCondition.setSumCommission(commission.getSumCommission());
        commissionCondition.setSumPayment(commission.getSumPayment());
        commissionCondition.setAgreementID(commission.getAgreement().getId());
        commissionCondition.setDepartmentID(commission.getDepartment().getId());
        List<Commission> list = service.searchCommission(commissionCondition,user);
        return list.size() > 0;
    }

    /**
     *  Create Commission document from Payments by period
     * @param dateBegin Begin of period
     * @param dateEnd   End of period
     * @param user      User
     * @return          Return true if commission is created
     */
    public static boolean  createCommissionFromPayments (Date dateBegin, Date dateEnd, Long id, User user){
    List <Payment> payments = getPayments(dateBegin, dateEnd, id, user);
    for (Payment payment : payments){
        if (payment.getContraAgent().getProperty().getFlagCommiss() && payment.getContraAgent().getProperty().getAlgorithm().getId() == 3){
            Commission commission = fillCommission(payment, user);
         //   Boolean isCreate = isCommissionCreated(commission, user);
      //      if (!isCreate)
                service.createCommission(commission, user);
        }
    }
        return true;
    }

    void commitTransaction(Connection connection){
        try {
            connection.commit();
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException e1) {
                throw new RuntimeException(e1);
            }
            throw new RuntimeException(e);
        }
    }

        public static boolean createCommissionFromPaymentDepartment(Date dateBegin, Date dateEnd, Long id, User user) {

        List <PaymentDepartment> paymentDepartments = getPaymentsDepartment(dateBegin, dateEnd, id, user);
        for (PaymentDepartment paymentDepartment : paymentDepartments){
            if (paymentDepartment.getContraAgent().getProperty().getFlagCommiss() && paymentDepartment.getContraAgent().getProperty().getAlgorithm().getId() == 2){
                Commission commission = fillCommission(paymentDepartment, user);
           //     Boolean isCreate = isCommissionCreated(commission, user);
          //      if (!isCreate) 
                    service.createCommission(commission, user);
            }
        }
        return true;
    }
}

