package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ControllerReferenseCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 25.09.2014.
 */
public class ControllerTest extends AbstractTest {



    @Test
    public void testController() {
       /* Controller c = new Controller();
        Random random = new Random();
        c.setId(28L);
        c.setRouteID(2L);
        c.setName("test "+ random.nextInt());
        service.createController(c);*/
    }

    @Test
    public void testUpdateController()  {
      /* Controller c = new Controller();
        Random random = new Random();
        c.setId(10041L);
        c.getSubRoute().setId(20009L);
       // c.getSubRoute().getRoute().setId(2L);
        c.setName("test "+ random.nextInt());
        service.updateController(c);*/
    }


    /*@Test
    public void deleteController()  , ValidateException {
        Controller c = new Controller();
        c.setId(21L);
        c.setRouteID(2L);
        c.setName("88888");
        service.deleteController(c);
    }*/

    @Test
    public void testSearchController() {
     /*   ControllerCondition controllerCondition = new ControllerCondition();
//        controllerCondition.setName("Підмаршрут");
        List<Controller> list =  this.service.searchController(controllerCondition,user);
        for (Controller c:list){
            //(c);
        }*/
    }
    @Test
    @Ignore
    public void testSearchControllerR() {
       ControllerReferenseCondition controllerCondition = new ControllerReferenseCondition();
        controllerCondition.setName("Hеофіта");
        List<ControllersReferense> list =  this.service.searchControllerReferense(controllerCondition,user);
        for (ControllersReferense c:list){
            //(c);
        }

}
}
