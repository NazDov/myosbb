package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.municipals;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateMunicipalQuery;

import java.sql.Connection;

/**
 * Created by vostap on 8/10/2015.
 */
public class CreateMunicipalOperation extends AbstractModifyOperation<Municipal> {
    public CreateMunicipalOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Municipal value) {
        new CreateMunicipalQuery().execute(connection,value);
       return 0;
    }

    @Override
    public boolean validate(Connection connection, Municipal value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
