package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.SubRouteValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSubRouteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateSubRouteOperation extends AbstractModifyOperation<SubRoute> {
    public UpdateSubRouteOperation() {
        super(new SubRouteValidator());
    }

    @Override
    protected long _doOperation(Connection connection, SubRoute value)   {
        return new UpdateSubRouteQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,SubRoute value)   {
        return this.validator.validateToInsert(connection,value) && this.validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
