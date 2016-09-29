package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentFreeKonto;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartamentFreeKontoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentFreeKontoQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchDepartmentFreeKontoOperation extends AbstractSelectOperation<DepartmentFreeKonto> {

    private DepartamentFreeKontoCondition condition;

    public SearchDepartmentFreeKontoOperation(DepartamentFreeKontoCondition condition) {
        this.condition = condition;
    }

    public void setCondition(DepartamentFreeKontoCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<DepartmentFreeKonto> doOperation(Connection connection)   {
        List<DepartmentFreeKonto> list = new SearchDepartmentFreeKontoQuery(this.condition).execute(connection);
        for (DepartmentFreeKonto di:list){
            di.setContraAgent(this.getFillers().getContraAgentByID(connection,di.getContraAgent().getId()));
            di.setDepartment(this.getFillers().getDepartmentByID(connection,di.getDepartment().getId()));
            di.setInput(getFillers().getInputByID(connection, di.getInput().getId()));
            di.setSubRoute(this.getFillers().getSubRouteByID(connection,di.getSubRoute().getId()));

 
        }
        return list;
    }



}
