package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateDepartmentTariffCategoryQuery;

import java.sql.Connection;

/**
 * Created by vostap on 30.10.2014.
 */
public class UpdateDepartmentTariffCategoryOperation extends AbstractModifyOperation<Department> {
    public UpdateDepartmentTariffCategoryOperation() {
        super(null);
    }

    @Override
    protected long _doOperation(Connection connection, Department value)   {
        return new UpdateDepartmentTariffCategoryQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, Department value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
