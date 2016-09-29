package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.AddingByConsumingVolumeValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateAddingByConsumingVolumeQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputQuery;

import java.sql.Connection;

/**
 * Created by vostap on 05.11.2014.
 */
public class CreateAddingByConsumingVolumeOperation extends AbstractModifyOperation<AddingByConsumingVolume> {
    public CreateAddingByConsumingVolumeOperation() {
        super(new AddingByConsumingVolumeValidator());
    }

    @Override
    protected long _doOperation(Connection connection, AddingByConsumingVolume value)   {
        fillDepartmentInput(connection,value);
        return new CreateAddingByConsumingVolumeQuery().execute(connection,value);
    }

    private void fillDepartmentInput(Connection connection, AddingByConsumingVolume value) {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setDepartmentID(value.getDepartment().getId());
        condition.setInputID(value.getInput().getId());
        DepartmentInput departmentInput =  new SearchDepartmentInputQuery(condition).execute(connection).get(0);
        value.setDepartmentInput(departmentInput);
    }

    @Override
    public boolean validate(Connection connection, AddingByConsumingVolume value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {


    }


}
