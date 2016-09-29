package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentSubRouteValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteDepartmentSubRouteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 15.01.2015.
 */
public class DeleteDepartmentSubRouteOperation extends AbstractModifyOperation<DepartmentSubRoute> {
    public DeleteDepartmentSubRouteOperation() {
        super(new DepartmentSubRouteValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DepartmentSubRoute value)   {
        return new DeleteDepartmentSubRouteQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, DepartmentSubRoute value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
