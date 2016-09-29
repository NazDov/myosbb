package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfRealizeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionOfRealizeQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 09.03.2016.
 */
public class CorrectionOfRealizeTest extends AbstractTest {

    @Ignore
    @Test
    public void searchCorrectionOfRealize(){
        List<CorrectionOfRealize> list = service.searchCorrectionOfRealize(new CorrectionOfRealizeCondition(),user);
    }


    @Ignore
    @Test
    public void updateCorrectionOfRealizeTest(){
        CorrectionOfRealizeCondition condition = new CorrectionOfRealizeCondition();
        condition.setId(9L);
        List<CorrectionOfRealize> list = service.searchCorrectionOfRealize(condition,user);
        CorrectionOfRealize r = list.get(0);
        service.updateCorrectionOfRealize(r,user);
    }


}
