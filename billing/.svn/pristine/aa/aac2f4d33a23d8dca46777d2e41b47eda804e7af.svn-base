package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.RainsValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateRainsQuery;

import java.sql.Connection;

/**
 * Created by vostap on 01.12.2014.
 */
public class CreateRainsOperation extends AbstractModifyOperation<Rains> {
    public CreateRainsOperation() {
        super(new RainsValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Rains value)   {
        return new CreateRainsQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, Rains value)   {
        return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
