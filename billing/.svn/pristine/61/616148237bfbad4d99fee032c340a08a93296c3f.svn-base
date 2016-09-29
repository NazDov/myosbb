package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.payments;


import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CommissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 6/18/2015.
 */
public class CommisionTest extends AbstractTest{
    @Test
    @Ignore
    public void testSeachCommision(){
      /*  CommissionCondition commissionCondition = new CommissionCondition();
        commissionCondition.setPeriod(getDate(2015, 06, 01));
        commissionCondition.setAlgorithm(2L);
       List<Commission> list = service.searchCommission(commissionCondition, user);
       */
       int i=0;
    }

    @Test
    @Ignore
    public void testCalcCommision(){
        Date dateBeginString = getDate1();
        Date dateEndString = getDate2();
        service.createCommissionFromPaymentDepartment(dateBeginString, dateEndString, null, user);
    }

    private Date getDate1(){
        Calendar c = Calendar.getInstance();
        c.set(Calendar.YEAR,2015);
        c.set(Calendar.MONTH,6-1);
        c.set(Calendar.DAY_OF_MONTH,1);
        return c.getTime();
    }

    private Date getDate2(){
        Calendar c = Calendar.getInstance();
        c.set(Calendar.YEAR,2015);
        c.set(Calendar.MONTH,6-1);
        c.set(Calendar.DAY_OF_MONTH,30);
        return c.getTime();
    }

    @Ignore
    @Test
    public void testUpdate(){
        CommissionCondition condition = new CommissionCondition();
        condition.setId(5L);
        List<Commission> list = service.searchCommission(condition,user);
        Commission commission = list.get(0);
        service.updateCommission(commission,user);
    }
}
