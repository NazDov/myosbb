package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 18.09.2014.
 */
public class DepartmentTests extends AbstractTest {

    @Test
    @Ignore
    public void testSearchDepartment()  {
       DepartmentCondition department = new DepartmentCondition();
        department.setContraAgentID(100001L);

     List<Department> res = this.service.searchDepartment(department, this.user);
      for (Department d:res) ;
    }

    @Test
    public void createDepartment()   {
    /*    Department d = new Department();
        d.setContraAgent(5557L);
        d.setCategoryOfRealizeID(1L);
        d.setCategoryID(1L);
        d.setArea(1L);
        d.setName("1234");
        this.service.createDepartment(d);  */
    }

    @Test
    public void testDeleteDepartment()   {
     /*  Department d = new Department();
        d.setDepartment(82L);
        this.service.deleteDepartment(d);   */
    }

    @Test
    @Ignore
    public void testUpdateDepartment()  {
       /* DepartmentCondition departmentCondition = new DepartmentCondition();
        departmentCondition.setId(100001L);
        List<Department> res = this.service.searchDepartment(departmentCondition,user);
        Department d = res.get(0);
        this.service.updateDepartment(d,user);*/
    }


}
