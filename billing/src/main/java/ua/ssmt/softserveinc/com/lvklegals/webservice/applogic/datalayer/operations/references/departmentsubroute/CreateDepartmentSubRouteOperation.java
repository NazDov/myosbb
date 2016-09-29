package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentSubRouteValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateDepartmentSubRouteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 21.10.2014.
 */
public class CreateDepartmentSubRouteOperation extends AbstractModifyOperation<DepartmentSubRoute> {
    public CreateDepartmentSubRouteOperation() {
        super(new DepartmentSubRouteValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DepartmentSubRoute value)   {
        return new CreateDepartmentSubRouteQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, DepartmentSubRoute value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
