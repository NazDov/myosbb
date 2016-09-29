package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.SubRouteValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateSubRouteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class CreateSubRouteOperation extends AbstractModifyOperation<SubRoute> {
    public CreateSubRouteOperation() {
        super(new SubRouteValidator());
    }

    @Override
    protected long _doOperation(Connection connection, SubRoute value)   {
       return new CreateSubRouteQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,SubRoute value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
