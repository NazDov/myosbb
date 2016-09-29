package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentSubRouteValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateRegInfDepSubRouteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 08.09.2014.
 */
public class UpdateDepartmentSunRouteModifyOperation extends AbstractModifyOperation<DepartmentSubRoute> {

        public UpdateDepartmentSunRouteModifyOperation() {
            super(new DepartmentSubRouteValidator());
        }

        @Override
        protected long _doOperation(Connection connection, DepartmentSubRoute value)   {
            return new UpdateRegInfDepSubRouteQuery().execute(connection,value);
        }

        @Override
        public boolean validate(Connection connection,DepartmentSubRoute value)   {
            return validator.validateToUpdate(connection,value) && validator.validateToInsert(connection,value);
        }

        @Override
        public void checkPermission(Connection connection, User user) throws SecurityException {

        }


}
