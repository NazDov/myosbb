package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.payments;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Bank;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CommissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentDepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 04.12.2014.
 */
public class PaymentTest extends AbstractTest {
    private ReferencesService service =  new ReferencesServiceImpl();
    @Test
    @Ignore
    public void testSearch()   {
     //   PaymentDepartmentCondition condition = new PaymentDepartmentCondition();
    //    List<PaymentDepartment> list = service.searchPaymentDepartment(condition, user);

        PaymentCondition condition = new PaymentCondition();
        //condition.setPaymentTypeID(1L);
        condition.setId(385L);
       // condition.setServicePaymentID(1L);
        List<Payment> payments = service.searchPayment(condition,user);
    }

    @Test
    @Ignore
    public void testCreate(){
        Payment p = new Payment();
        p.setContraAgent(new ContraAgent(536000L));
        p.setSumPayment(100.0);
        p.setAgreement(new Agreement(13570L));
        p.setServicePayment(new ServicePayment(1L));
        p.setPaymentType(new PaymentType(1L));
        p.setDatePayment(this.getDate(2015, 12, 01));
        p.setIsAutomated(0);
        p.setBankAccount("");
        p.setBank(new Bank());
        p.setSourceInputPayment(new SourceInputPayment(1L));
        service.createPayment(p,user);
    }

    private Date getDatePayment(){
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.DAY_OF_MONTH,22);
        calendar.set(Calendar.MONTH,4);
        calendar.set(Calendar.YEAR,2015);
        return calendar.getTime();
    }

    @Ignore
    @Test
    public void testUpdate(){
        PaymentCondition condition = new PaymentCondition();
        condition.setAgreementNumber("300211");
        List<Payment> payments = service.searchPayment(condition,user);
        if (payments.isEmpty()) return;
        Payment p = payments.get(0);
        service.updatePayment(p,user);
    }

    @Ignore
    @Test
    public void testSearchDepartment(){
        PaymentDepartmentCondition condition = new PaymentDepartmentCondition();
        List<PaymentDepartment> docs = service.searchPaymentDepartment(condition,user);
        System.out.println(docs.size());
    }

    @Test
    @Ignore
    public void testDeletePayment(){
        Payment p = new Payment();
        p.setContraAgent(new ContraAgent(536000L));
        p.setId(1227L);
        service.deletePayment(p,user);
    }

    @Ignore
    @Test
    public void testPaymentCommis(){
        //updateCommission
        CommissionCondition condition = new CommissionCondition();
        condition.setId(3L);
        List<Commission> list = service.searchCommission(condition,user);
        Commission c = list.get(0);
        service.updateCommission(c,user);
    }


    @Ignore
    @Test
    public void testPaymentDepartmentUpdate(){
        PaymentDepartmentCondition condition = new PaymentDepartmentCondition();
        condition.setId(6L);
        List<PaymentDepartment> list = service.searchPaymentDepartment(condition,user);
        PaymentDepartment p = list.get(0);
        service.updatePaymentDepartment(p,user);

    }

}
