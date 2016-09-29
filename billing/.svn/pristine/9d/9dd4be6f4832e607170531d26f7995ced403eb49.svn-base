package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.OperationType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Date;

/**
 * Created by vostap on 10.10.2014.
 */
public class UnregisterOfCounterTest extends AbstractTest {



    @Test
    @Ignore
    public void testCreateDocument()  {
    UnregisterOfCounter doc = new UnregisterOfCounter();
    doc.setOperationType(new OperationType(1L));
        doc.setPeriodByMiddleCalculationOnMonth1(new Date());
        doc.setPeriodByMiddleCalculationOnMonth2(new Date());
        doc.setDateToReturnCounter(new Date());
        doc.setDateActToUnPlomb(getDate(2015,5,1));
        doc.setFactorByOnUnregister(760);
        doc.setCalculateInPeriodUnregisterCounter(false);
        doc.setCounter(new Counter(80376L));
        doc.setInput(new Input(86311L));
        doc.setDepartment(new Department(649539L));
        doc.setContraAgent(new ContraAgent(732497L));
        doc.setNumberAct("00000");
        doc.setDepartmentInput(new DepartmentInput(66348L));
        service.createUnregisterOfCounterDocument(doc,user);
    }

    @Test
    public void testDeleteUnregisterOfCounter()   {
    //    UnregisterOfCounterCondition condition = new UnregisterOfCounterCondition();
       // List<UnregisterOfCounter> list = service.searchUnregisterCounterOperation(new UnregisterOfCounterCondition(),user);
    }

   /* @Test
    public void testUpdateUnregisterOfCounter()  , ValidateException {
        UnregisterOfCounterCondition condition = new UnregisterOfCounterCondition();
        condition.setId(20008L);
        List<UnregisterOfCounter> list = service.searchUnregisterCounterOperation(new UnregisterOfCounterCondition());
        UnregisterOfCounter doc = list.get(0);
        doc.setNumberAct("La La La");
        this.service.updateUnregisterOfCounterDocument(doc);
    }*/
}
