package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;


public class ContraAgentTest extends AbstractTest {

    @Test
    @Ignore
    public void testSearchContraAgent(){
       ContraAgentCondition contraAgentCondition = new ContraAgentCondition();
       contraAgentCondition.setIsHotWatterSupplier(true);
       List<ContraAgent> list =  this.service.searchContraAgentWithAgreement(contraAgentCondition,user);
       for (ContraAgent c:list){
           System.out.println("c = "+c.toString());
       }

   }
    @Test
    public void testSearchHoWaterSupplier(){    }




    @Test
    @Ignore
    public void testEditContraAgent() {
    /*    ContraAgentCondition condition =  new ContraAgentCondition();
        condition.setEdrpo("3112306444");
        ContraAgent ca = service.searchContraAgent(condition,user).get(0);
        ca.getProperty().setBankAccount("");
        service.updateContraAgent(ca,user);*/
    }

    @Test
    @Ignore
    public void testSearchContraAgentByDepartment(){
        Department d = new Department(100002L);
  //      List<ComboBoxItem> list = service.getContrAgentByDep(d,user);
   //     int i=0;
    }

    @Test
    @Ignore

    public void testCreate(){
        ContraAgent contraAgent = new ContraAgent();
        ContraAgentProperty property = new ContraAgentProperty();
        property.setHopeless(true);

        GroupWatterSupply groupWatterSupply  = new GroupWatterSupply();
        groupWatterSupply.setId((long) 1);
        property.setGroupWatterSupply(groupWatterSupply);

        SourceWaterSupply sourceWaterSupply = new SourceWaterSupply(); //+
        sourceWaterSupply.setId((long) 1);
        property.setSourceWaterSupply(sourceWaterSupply);

        TypeActivity typeActivity = new TypeActivity();
        typeActivity.setId((long) 1);
        property.setTypeActivity(typeActivity);

        ContraAgentCategory contraAgentCategory = new ContraAgentCategory(); //+
        contraAgentCategory.setId((long)1);
        property.setContraAgentCategory(contraAgentCategory);

        Area area = new Area();
        area.setId((long) 1);
        property.setArea(area);

        property.setFullName("test");
        property.setShortName("test");
        Algorithm algorithm = new Algorithm();
        algorithm.setId(1L);
        property.setAlgorithm(algorithm);

        Payer payer = new Payer();
        payer.setId(1L);
        property.setPayer(payer);

        contraAgent.setProperty(property);

        contraAgent.setEDRPO("test");

        contraAgent.setIPN("test");
        contraAgent.setAgreementNumber("test");
        contraAgent.setCityName("test");
        contraAgent.setFilija("test");
        contraAgent.setCountryName("test");

        contraAgent.setHotWatterSupplier(true);
        service.createContraAgent(contraAgent,user);
    }
}

