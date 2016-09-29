package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

/**
 * Created by vostap on 18.11.2014.
 */
public class ClientServiceTest  extends AbstractTest{
    private ReferencesService service = new ReferencesServiceImpl();

    @Test
    public void updateDepartmentTariffCategory()  {
        /*Department d = new Department();
        d.setId(20111L);
        d.setProperty(new DepartmentProperty());
        d.getProperty().setId(30064L);
        CategoryOfTariff cc = new CategoryOfTariff();
        cc.setId(2L);
        d.getProperty().setCategoryOfTariff(cc);
        this.service.updateDepartmentTariffCategory(d);  */
    }


    @Test
    public void search()  {
     //   DepartmentSubRouteCondition condition = new DepartmentSubRouteCondition();
     //   condition.setDepartmentID(411027L);
     //   List<DepartmentSubRoute> list = this.service.searchDepartmentSubRoute(condition,user);

    }
    @Test
    public void searchRainHistory()   {
    //    RainsCondition condition = new RainsCondition();
     //   condition.setDepartmentID(411027L);
    //    List<Rains> list = this.service.searchRainsHistory(condition,user);


    }


}
