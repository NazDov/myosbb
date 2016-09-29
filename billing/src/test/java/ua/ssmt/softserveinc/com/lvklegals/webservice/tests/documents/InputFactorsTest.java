package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 08.10.2014.
 */
public class InputFactorsTest extends AbstractTest {

    @Test
    @Ignore
    public void testSearch()   {
     InputFactorCondition condition = new InputFactorCondition();
//     condition.setCounterID(80376L);
     List<InputFactor> list = service.searchCounterToInputFactors(condition, user);
     int i=0;
    }

   /* @Test
    public void testInsertFactor(){
        InputFactor factor = new InputFactor();
        factor.setVolume(5);
    }*/

    @Test
    @Ignore
    public void testInsert()   {
      InputFactor factor = new InputFactor();
        factor.setCounter(new Counter(80377L));
        factor.setFactorOnBeginMonth(28);
        factor.setBeginFactor(28);
        factor.setEndFactor(30);
        factor.setWiringID(83157L);
        factor.setDoctype(-222);
        service.insertFactors(factor,user);
    }

    @Test
    @Ignore
    public void testCounterSearch(){
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(80377L);
        List<InputFactor> list = service.searchHistoryFactors(condition,user);
    }

    @Test
    @Ignore
    public void getLastInputFactorTest()   {
       /* Counter c = new Counter();
        c.setId(50080L);
        List<InputFactor> list = service.getLastFactorByCounter(c,user);
        int i=0;*/
    }

    @Test
    @Ignore
    public void removeFactor(){
        InputFactorCondition condition = new InputFactorCondition();
        condition.setId(127031L);
        List<InputFactor> list = service.searchClearInputFactors(condition, user);
        int i=0;
        InputFactor inputFactor = list.get(0);
        this.service.deleteFactors(inputFactor,user);
    }

}
