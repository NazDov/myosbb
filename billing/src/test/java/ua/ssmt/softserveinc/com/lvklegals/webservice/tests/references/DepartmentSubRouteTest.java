package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

/**
 * Created by vostap on 30.10.2014.
 */
public class DepartmentSubRouteTest extends AbstractTest {
    private ReferencesService service = new ReferencesServiceImpl();

    @Test
    public void create()  {
     //   DepartmentSubRoute sd = new DepartmentSubRoute();
     //   sd.getDepartment().setId(303059L);
   //     sd.getSubRoute().setId(1L);
   //     service.createDepartmentSubRoute(sd,user);
    }

    @Test
    public void search()   {
       /*DepartmentSubRouteCondition condition = new DepartmentSubRouteCondition();
        //condition.setDepartment(null);
        List<DepartmentSubRoute> list = this.service.searchDepartmentSubRoute(condition,user);
        for (DepartmentSubRoute d:list){
        //    //("RouteID = "+d.getController().getSubRoute().getRoute().getId()+ " SubRouteID = "+d.getController().getSubRoute().getId());
        }*/
    }


    @Test
    public void delete()  {
       /* DepartmentSubRoute departmentSubRoute = new DepartmentSubRoute();
        departmentSubRoute.setId(30040L);
        service.deleteDepartmentSubRoute(departmentSubRoute,user);*/
    }

}
