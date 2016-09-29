package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentInputValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateDepartmentInputQuery;

import java.sql.Connection;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateDepartmentInputOperation extends AbstractModifyOperation<DepartmentInput> {
    public UpdateDepartmentInputOperation() {
        super(new DepartmentInputValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DepartmentInput value)   {
        return new UpdateDepartmentInputQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,DepartmentInput value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {
        
    }
}
