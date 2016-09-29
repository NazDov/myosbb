package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateDepartmentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentPropertiesQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateDepartmentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateRainsQuery;


import java.sql.Connection;


import java.util.List;

/**
 * Created by vostap on 08.09.2014.
 */
public class UpdateDepartmentModifyOperation extends AbstractModifyOperation<Department> {

    public UpdateDepartmentModifyOperation() {
        super(new DepartmentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Department value)   {

        updateProperty(connection,value);
        updateRains(connection,value);
        return 0;
    }

    private void updateRains(Connection connection, Department value)   {
        if (value.getRains().isEmpty()) return;
        boolean isExistRainsInCurrentPeriod = checkExistRainsInCurrentPeriod(connection,value);
        if (isExistRainsInCurrentPeriod)
            new UpdateRainsQuery().execute(connection,value.getRains().get(0));
        else
            new CreateRainsQuery().execute(connection,value.getRains().get(0));
    }

    private boolean checkExistRainsInCurrentPeriod(Connection connection, Department value)   {
        RainsCondition condition = new RainsCondition();
        condition.setDepartmentID(value.getId());
        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        return new SearchRainsQuery(condition).execute(connection).isEmpty();
    }

    private void updateProperty(Connection connection, Department value)   {
        Boolean isExistPropertyInCurrentPeriod = this.checkExistPropertyInCurrentPeriod(connection,value);
        if (isExistPropertyInCurrentPeriod)
            new UpdateDepartmentPropertyQuery().execute(connection,value);
        else
            new CreateDepartmentPropertyQuery().execute(connection,value);
    }

    private Boolean checkExistPropertyInCurrentPeriod(Connection connection, Department value)   {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setId(value.getId());
        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        List<DepartmentProperty> list = new SearchDepartmentPropertiesQuery(condition).execute(connection);
        return !list.isEmpty();
    }

    /*private void createDepartmentPropertyInCurrentPeriod(Connection connection, Department value)   {
        new CreateDepartmentQuery().execute(connection,value);
    }

    private void updateDepartmentAgentProperty(Connection connection, Department value)   {
        new UpdateDepartmentPropertyQuery().execute(connection,value);
    }

    private boolean checkExistContraAgentPropertyInCurrentPeriod(Connection connection, Department value)   {
        ServiceDepartmentCondition condition = new ServiceDepartmentCondition();
        condition.setDepartmentID(value.getId());
        List<Department> list = new SelectDepartmentProperty(condition).execute(connection);
        if (list.isEmpty() == true) return false;
        else
            return true;
    }*/

    @Override
    public boolean validate(Connection connection,Department value)   {
        return validator.validateToUpdate(connection,value) && validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
