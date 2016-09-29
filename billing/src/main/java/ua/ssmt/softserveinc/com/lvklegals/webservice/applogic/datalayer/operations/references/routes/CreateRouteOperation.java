package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.routes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.RouteValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateRouteQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class CreateRouteOperation extends AbstractModifyOperation<Route> {
    public CreateRouteOperation() {
        super(new RouteValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Route value)   {
        return new CreateRouteQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,Route value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
