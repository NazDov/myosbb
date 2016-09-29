package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by ykhav on 12.03.15.
 */
public class SearchDepartamentToComboBoxOperation extends AbstractSelectOperation<ComboBoxItem> {

    private DepartmentCondition condition;

    public SearchDepartamentToComboBoxOperation(DepartmentCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        List<Department> departments = new SearchDepartmentQuery(condition).execute(connection);
        List<ComboBoxItem> res = new ArrayList<>();
        for (Department department:departments){
            ComboBoxItem item = new ComboBoxItem();
            item.setId(department.getId());
            item.setName(department.getProperty().getName());
            res.add(item);
        }
        return res;
    }
}

