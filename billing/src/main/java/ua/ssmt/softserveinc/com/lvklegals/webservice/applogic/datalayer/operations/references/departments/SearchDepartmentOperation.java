package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentPropertyHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 08.09.2014.
 */
public class SearchDepartmentOperation extends AbstractSelectOperation<Department> {

    private DepartmentCondition departmentCondition;

    public  SearchDepartmentOperation(DepartmentCondition departmentCondition) {
        this.departmentCondition = departmentCondition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Department> doOperation(Connection connection)   {
        List<Department> res = new ArrayList<>();
        List<Department> list = new SearchDepartmentQuery(this.departmentCondition).execute(connection);
        for (Department department:list){
                department.setContraAgent(getFillers().getContraAgentByID(connection,department.getContraAgent().getId()));
                department.getProperty().setCategoryOfTariff(this.getFillers().getCategoryOfTariffByID(connection, department.getProperty().getCategoryOfTariff().getId()));
                department.getProperty().setArea(this.getFillers().getAreaByID(connection, department.getProperty().getArea().getId()));
                department.getProperty().setBussinessProfile(this.getFillers().getBuissnessProfileByID(connection, department.getProperty().getBussinessProfile().getId()));
                department.setPropertyHistory(this.fillDepartmentsHistory(connection, department));
                department.setRains(this.fillRains(department, connection));
                department.setRainHistory(this.fillRainsHistory(department,connection));
                department.getProperty().setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
                department.setAgreement(this.getFillers().getAgreementByID(connection,department.getAgreement().getId()));
                res.add(department);
        }
        return res;
    }

    private List<Rains> fillRainsHistory(Department department, Connection connection)   {
        RainsCondition condition = new RainsCondition();
        condition.setDepartmentID(department.getId());
        List<Rains> list = new SearchRainsQuery(condition).execute(connection);
        for (Rains rains:list){
            rains.setAreaType(this.getFillers().getAreaTypeByID(connection,rains.getAreaType().getId()));
        }
        return list;
    }

    private List<Rains> fillRains(Department d,Connection connection)   {
        RainsCondition condition = new RainsCondition();
        condition.setDepartmentID(d.getId());
        List<Rains> list = new SearchRainsQuery(condition).execute(connection);
        List<Rains> res = new ArrayList<>();
        for (Rains rains:list){
            rains.setAreaType(this.getFillers().getAreaTypeByID(connection,rains.getAreaType().getId()));
            rains.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
            res.add(rains);
           // break;
        }
        return res;
    }

    private List<DepartmentProperty> fillDepartmentsHistory(Connection connection, Department d)   {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setId(d.getId());
        List<DepartmentProperty> list =  new SearchDepartmentPropertyHistoryQuery(condition).execute(connection);
        for (DepartmentProperty dp:list){
            dp.setArea(this.getFillers().getAreaByID(connection,dp.getArea().getId()));
            dp.setCategoryOfTariff(this.getFillers().getCategoryOfTariffByID(connection,dp.getCategoryOfTariff().getId()));
        }
        return list;
    }
}
