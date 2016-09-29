package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 20.10.2014.
 */
public class CorrectionOfCounterTest extends AbstractTest {

    @Test
    public void createCorrectionTest()  {
       /*CorrectionOfCounter doc = new CorrectionOfCounter();
        doc.setContraAgent(new ContraAgent(5605L));
        doc.setDepartment(new Department(98L));
        doc.setInput(new Input(18L));
        doc.setCounter(new Counter(50073L));
        InputFactor factor = new InputFactor();
        factor.setCounter(new Counter(50073L));
        factor.setEndFactor(6);
        factor.setBeginFactor(10);
        factor.setVolume(-4);
        factor.setWiringID(20042L);
        factor.setFactorOnBeginMonth(10);
        doc.setInputFactor(factor);
        doc.setReason(new CorrectionOfCountersReason(2L));
        doc.setReasonNumber("00004");
        doc.setReasonDate(new Date());
        this.service.createCorrectionOfCounterDocument(doc);*/
    }

    @Test
    @Ignore
    public void searchCorrectionDocuments()   {

       CorrectionCondition condition = new CorrectionCondition();
        List<Correction> list = this.service.searchCorrection(condition, this.user);
        for (Correction c:list){
            //(c);
        }

    }

    @Test
    @Ignore
    public void deleteCorrection()  {
       /* CorrectionOfCounter doc = new CorrectionOfCounter();
        doc.setId(11L);
       // doc.setInputFactor(new InputFactor(30041L));
        this.service.deleteCorrectionOfCounterDocument(doc);*/
    }

    @Test
    @Ignore
    public void updateRegisterOfCounter(){
        CorrectionOfCounterCondition condition = new CorrectionOfCounterCondition();
    }
}
