package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentSubRouteCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentSubRouteQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 21.10.2014.
 */
public class DepartmentSubRouteValidator extends AbstractValidator<DepartmentSubRoute> {
    @Override
    public boolean validateToInsert(Connection connection, DepartmentSubRoute value)   {
        checkLogic(connection, value);
        return true;
    }
    private boolean checkLogic(Connection connection, DepartmentSubRoute value)   {
        DepartmentSubRouteCondition condition = new DepartmentSubRouteCondition();
        condition.setDepartmentID(value.getDepartment().getId());
        try {
            condition.setPeriod((new GetCurrentPeriodQuery(null).execute(connection).get(0)));
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        List<DepartmentSubRoute> list = null;
        try {
            list = new SearchDepartmentSubRouteQuery(condition).execute(connection);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        if (list.isEmpty()) return true;
        else throw  new ValidateException(messages.get("ERROR_CANNOT_CREATE_MORE_THAN_ONE_DEPARTMENT_SUBROUTE"));
    }
    @Override
    public boolean validateToDelete(Connection connection, DepartmentSubRoute value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, DepartmentSubRoute value)   {
        return false;
    }
}
