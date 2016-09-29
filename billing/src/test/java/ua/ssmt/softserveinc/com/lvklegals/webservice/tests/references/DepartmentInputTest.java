package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class DepartmentInputTest extends AbstractTest {
    private ReferencesService service = new ReferencesServiceImpl();

    @Test
    @Ignore
    public void testSearchDepartmentInput()  {
     DepartmentInputCondition condition = new DepartmentInputCondition();
       condition.setContraAgentID(732509L);
     List<DepartmentInput> list = service.searchDepartmentInput(condition,user);

  }
    @Test
    public void testDelete()  {
       /* DepartmentInput di = new DepartmentInput();
        di.setId(60032L);
        this.service.deleteDepartmentInput(di,this.user);*/
    }
    @Test
    @Ignore
    public void create()   {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setId(83159L);
        DepartmentInput di = this.service.searchDepartmentInput(condition,user).get(0);
        this.service.createDepartmentInput(di,user);
    }


    private Date getTestDate(){
        Calendar c = Calendar.getInstance();
        c.set(Calendar.DAY_OF_MONTH,12);
        c.set(Calendar.MONTH,2);
        c.set(Calendar.YEAR,2015);
        return c.getTime();
    }
    private Date getTestDatesec(){
        Calendar c = Calendar.getInstance();
        c.set(Calendar.DAY_OF_MONTH,12);
        c.set(Calendar.MONTH,2);
        c.set(Calendar.YEAR,2015);
        return c.getTime();
    }

    @Test
    public void updateInputSubService()   {
/*        InputSubServiceContain s = new InputSubServiceContain();
        s.setId(20013L);
        s.setWatterOut(true);
        s.setWatterSupply(false);
        this.service.updateInputSubDepartmentContains(s);*/
    }

    @Test
    @Ignore
    public void updateInputProperty()   {
       InputProperty property = new InputProperty();
       property.setId(76422L);
       property.setKoefWatterOut(0.0);
       property.setKoefWatterSupply(0.0);
       property.setNorma(500.59);
      //property.setDepartmentInputID(66353L);
       //property.setPeriod(service.getCurrentPeriod(user).getCurrentPeriod());
       property.setPeriod(getDate(2015,12,01));
       this.service.updateInputProperty(property,user);
    }

    @Test
    @Ignore
    public void updateDepartmentInput(){
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setId(83159L);
        DepartmentInput di = this.service.searchDepartmentInput(condition,user).get(0);
        service.updateDepartmentInput(di, user);
    }

}
