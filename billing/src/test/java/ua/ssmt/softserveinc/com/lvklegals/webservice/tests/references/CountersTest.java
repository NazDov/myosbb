package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DicountRateNBUConditions;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 19.09.2014.
 */
public class CountersTest extends AbstractTest {


    @Test
    public void testCreateTests()   {
    /*    Counter c = new Counter();
        c.setDiameterID(1L);
        c.setCounterType(1L);
        c.setModel(1L);
        c.setUnitOfMeasurementID(1L);
        c.setNumber("888888");
        this.service.createCounter(c);*/
    }
    @Test
    public void testSearchTests()   {
    //    CounterCondition condition = new CounterCondition();

  //     List<Counter> list =  this.service.searchCounter(condition,this.user);
    //   for (Counter c:list){
   //    }

    }

    @Ignore
    @Test
    public void testSearchByDepartmentInput()   {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setDepartmentID(303059L);
        condition.setInputID(5029L);
        List<Counter> counters  = service.searchCounterByDepartmentAndInput(condition,this.user);
        int i=0;
    }
    @Test
    @Ignore
    public void testSearchNBURates()   {
        DicountRateNBUConditions condition = new DicountRateNBUConditions();

        List<DiscountRateNBU> list =  this.service.searchNBURate(condition,this.user);
        for (DiscountRateNBU c:list){
        }

    }
}
