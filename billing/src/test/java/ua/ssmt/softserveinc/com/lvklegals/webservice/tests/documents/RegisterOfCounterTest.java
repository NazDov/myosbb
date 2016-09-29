package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 29.09.2014.
 */
public class RegisterOfCounterTest extends AbstractTest {

    @Test
    @Ignore
    public void testSearchRegisterCounter()   {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setId(749L);
        List<RegisterOfCounter> list = service.searchRegisterOfCounterDocument(condition, this.user); 
    }

    @Test
    @Ignore
    public void testCreateRegisterCounter()  {
   /*         RegisterOfCounter c = new RegisterOfCounter();
            c.setPlombNumber2("2");
            c.setPlombNumber1("1");
            c.setCounter(new Counter(70372L));
            c.setOnDate(getDate(2015,06,25));
            c.setMetrCheckDate(new Date());
            c.setNumber("1");
            c.setRegInfDepartmentInputsID(35110L);
            c.setBeginFactor(10);
            long id = this.service.createRegisterOfCounterDocument(c,user);*/
    }

    @Test
    @Ignore
    public void  testDelete()  {
     /*   RegisterOfCounter doc;
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setId(130100L);
        List<RegisterOfCounter> list = service.searchRegisterOfCounterDocument(condition,this.user);
        if (list.isEmpty()) return;
        doc = list.get(0);
             service.deleteRegisterOfCounterDocument(doc,this.user);*/
    }


    @Test
    @Ignore
    public void updateRegisterCounter() {
        /*
        RegisterOfCounter doc;
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setId(80049L);
        List<RegisterOfCounter> list = service.searchRegisterOfCounterDocument(condition,this.user);
        if (list.isEmpty()) return;
        doc = list.get(0);
        doc.setReturned(true);
        service.updateRegisterOfCounterDocument(doc,this.user);*/
    }


}
