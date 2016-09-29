package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentSubRouteCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentSubRouteQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 27.10.2014.
 */
public class SearchDepartmentSubRouteOperation extends AbstractSelectOperation<DepartmentSubRoute> {
    private DepartmentSubRouteCondition condition;

    public SearchDepartmentSubRouteOperation( DepartmentSubRouteCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<DepartmentSubRoute> doOperation(Connection connection)   {
        List<DepartmentSubRoute> res = new ArrayList<>();
        List<DepartmentSubRoute> list = new SearchDepartmentSubRouteQuery(condition).execute(connection);
        for (DepartmentSubRoute ds:list){
            ds.setDepartment(this.getFillers().getDepartmentByID(connection,ds.getDepartment().getId()));
            ds.setSubRoute(this.getFillers().getSubRouteByID(connection,ds.getSubRoute().getId()));
            res.add(ds);
        }
        return res;
    }

}
