package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateDepartmentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateDepartmentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 04.09.2014.
 */
public class CreateDepartmentsOperation extends AbstractModifyOperation<Department> {
    public CreateDepartmentsOperation() {
        super(new DepartmentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Department value)   {
        long departmentID = new CreateDepartmentQuery().execute(connection,value);
        value.setId(departmentID);
        return new CreateDepartmentPropertyQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,Department value)   {
        return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
