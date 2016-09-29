package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocLkpFromDBFTransfer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.VolumeConsumptionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by ykhav on 24.03.15.
 */
public class VolumeConsumeTest extends AbstractTest {

    @Test
    @Ignore
    public void testSearchController()   {
        long start = System.currentTimeMillis();
        VolumeConsumptionCondition condition = new VolumeConsumptionCondition();
        List<VolumeConsumption> list = service.searchVolumeConsumption(condition,this.user);
        long end = System.currentTimeMillis();
        //("*************End invoice **************************");
        System.out.println("Time in minutes = "+(end-start)/(1000*60));

    }

    @Test
    @Ignore
    public void testCreateCompsumtionVolumeFromDBF(){
        DocLkpFromDBFTransfer doc = new DocLkpFromDBFTransfer();
        doc.setUGODA("536001");
        doc.setM3_ZAGLVP(257.40);
        doc.setM3_ZAGLVV(425.30);
        List<DocLkpFromDBFTransfer> list = new ArrayList<>();
        list.add(doc);
        this.service.deleteDocLKP(list,user);
        this.service.createDocLkp(doc,user);
    }


}
