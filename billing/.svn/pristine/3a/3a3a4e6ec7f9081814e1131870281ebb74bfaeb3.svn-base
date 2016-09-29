package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.payments;

/**
 * Created by ykhav on 02.03.15.
 */


import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InternalTurnOver;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 04.12.2014.
 */
public class CorrectionTest extends AbstractTest {

    private ReferencesService service =  new ReferencesServiceImpl();

    @Ignore
    @Test
    public void testSearchCorrection(){
        CorrectionCondition condition = new CorrectionCondition();
        List<Correction> list = service.searchCorrection(condition, this.user);
    }

    @Test
    @Ignore
    public void testCreateCorrection()   {
        Correction pc = new Correction();
        pc.setContraAgentOne(new ContraAgent(536000L));
        pc.setDocNumberOne(new Agreement(13570L));
        pc.setContraAgentTwo(new ContraAgent(102002L));
        pc.setDocNumberTwo(new Agreement(1318L));
        pc.setDateCorrection(getDate(2016,01,01));
        pc.setPaymentType(new PaymentType(1L));
        pc.setSumCorrection(600d);
        pc.setServicePayment(new ServicePayment(1L));
        pc.setServicePaymentsecond(new ServicePayment(1L));
        pc.setInternalTurnOver(new InternalTurnOver(2L));
        pc.setAgreementDepOne(new Agreement());
        pc.setAgreementDepTwo(new Agreement());

//        service.createCorrection(pc, user);
    }






    @Test
    @Ignore
    public void updateCorrection()   {
        Correction doc;
        CorrectionCondition condition = new CorrectionCondition();
        condition.setId(58L);
        List<Correction> list = service.searchCorrection(condition, this.user);
        doc = list.get(0);
        service.updateCorrection(doc, this.user);
    }

    @Test
    @Ignore
    public void deleteCorretcion(){
       Correction doc;
       CorrectionCondition condition = new CorrectionCondition();
        condition.setId(58L);
        List<Correction> list = service.searchCorrection(condition, this.user);
        if (list.isEmpty()) return;
        doc = list.get(0);
        service.deleteCorrection(doc, this.user);

        /*
        58
59
         */
        /*Correction doc = new Correction();
        doc.setId(59L);
        service.deleteCorrection(doc, this.user);*/

    }

}
