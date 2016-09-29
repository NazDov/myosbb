package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.real_test.department_test_case;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Area;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.FakeTransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments.CreateDepartmentsOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments.SearchDepartmentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.real_test.StringGenerator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.real_test.contra_agent_case.ContraAgentTestCase;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 29.01.2016.
 */
public class DepartmentTestCase {
    @Test
    @Ignore
    public void testDepartment(){
        Connection connection = DataSource.getInstance().getConnection();
        FakeTransactionManager<ContraAgent> contraAgentTransactionManager = new FakeTransactionManager<>(connection);
        ContraAgent owner = new ContraAgentTestCase().testCreateSuccessfulContraAgent(contraAgentTransactionManager);
        FakeTransactionManager<Department> departmentFakeTransactionManager = new FakeTransactionManager<>(connection);
        Department expectedDepartment = _generateDepartment(owner);
        departmentFakeTransactionManager.doModifyOperation(new CreateDepartmentsOperation(),expectedDepartment);
        Department insertedDepartment = _getDepartmentFromDataBase(departmentFakeTransactionManager,expectedDepartment);

    }

    private Department _getDepartmentFromDataBase(FakeTransactionManager<Department> departmentFakeTransactionManager, Department expectedDepartment) {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setContraAgentID(expectedDepartment.getContraAgent().getId());
        condition.setDepartmentName(expectedDepartment.getProperty().getName());
        List<Department> departmentList = departmentFakeTransactionManager.doSelectOperation(new SearchDepartmentOperation(condition));
        if (departmentList.isEmpty()){
            throw new RuntimeException("not Found ContraAgent");
        }
        if (departmentList.size()>1){
            throw new RuntimeException("Found more then one deparment");
        }
        return departmentList.get(0);
    }

    private Department _generateDepartment(ContraAgent owner) {
        Department department = new Department();
        department.setContraAgent(owner);
        department.getProperty().setName(new StringGenerator().nextSessionId());
        department.getProperty().setArea(new Area(1L));
        department.getProperty().setCategoryOfTariff(new CategoryOfTariff(10));
        return department;
    }
}
