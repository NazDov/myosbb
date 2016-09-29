package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteDepartmentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteDepartmentQuery;

import java.sql.Connection;

/**
 * Created by vostap on 19.09.2014.
 */
public class DeleteDepartmentOperation extends AbstractModifyOperation<Department> {

    public DeleteDepartmentOperation() {
        super(new DepartmentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Department value)   {
        new DeleteDepartmentPropertyQuery().execute(connection,value);
        new DeleteDepartmentQuery().execute(connection,value);
        return 0;

    }

    @Override
    public boolean validate(Connection connection,Department value)   {
        return this.validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
