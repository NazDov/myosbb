package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CancelZaborgovanistCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 02.03.2016.
 */
public class CancelDeptTest extends AbstractTest {

    @Test
    @Ignore
    public void testUpdate(){
        CancelZaborgovanistCondition condition = new CancelZaborgovanistCondition();
        condition.setId(2L);
        List<CancelZaborgovanist> list = service.searchCancelZaborgovanist(condition,user);
        CancelZaborgovanist c = list.get(0);
        service.updateCancelZaborgovanist(c,user);
    }
}
