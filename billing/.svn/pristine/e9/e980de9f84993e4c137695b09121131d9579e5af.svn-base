package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class AgreementTest extends AbstractTest {

    @Test
    @Ignore
    public void test0Search()   {
        AgreementCondition condition = new AgreementCondition();
        condition.setContraAgentID(300070L);
        List<Agreement> res = service.searchAgreement(condition, user);
        for (Agreement r:res){
            System.out.println(r);
        }
    }

    @Test
    @Ignore
    public void testSerarch2()   {
       /*AgreementCondition condition = new AgreementCondition();
        condition.setContraAgentID(5605L);
        List<ComboBoxItem> list = service.getAgreementByConsumer(condition,user);
        int i = 0;*/
    }

    @Test
    @Ignore
    public void testUpdate() {
        AgreementCondition condition = new AgreementCondition();
        condition.setId(4832L);
        List<Agreement> res = service.searchAgreement(condition,user);
        //if (res.isEmpty() == true) return;
        Agreement doc = res.get(0);
        doc.setActive(true);
        service.updateAgreement(doc,user);
    }

    @Test
    @Ignore
    public void testSearchDepartmentByAgreement(){
        Agreement agreement = new Agreement(292L);
        List<ComboBoxItem> list = service.getDepByAgreemnt(agreement,user);
    }

    @Test
    @Ignore
    public void testSearchContraAgentByDep(){

        List<ComboBoxItem> list = service.getContrAgentByDep(new Department(649534L),user);
    }

    @Test
    @Ignore
    public  void testCreateAgremment(){
        Agreement a = new Agreement();
        a.setActive(false);
        a.setAgreementNumber("111111");
        a.setBeginDate(getDate(2015,12,1));
        a.setContraAgent(new ContraAgent(732509L));
        a.setKindAgreement(new KindAgreement(7L));
        a.setTypeAgreement(new TypeAgreement(2L));
        a.setAgreementPenyaProperty(new AgreementPenyaProperty(1L));
        AgreementPenyaProperty b = new AgreementPenyaProperty();
        b.setCalcPenya(true);
        a.getAgreementPenyaProperty().setCalcPenya(b.getCalcPenya());
        service.createAgreement(a,getUser());
    }


}
