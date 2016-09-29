package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.RainsValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteRainsQuery;

import java.sql.Connection;

/**
 * Created by vostap on 01.12.2014.
 */
public class DeleteRainsOperation extends AbstractModifyOperation<Rains> {
    public DeleteRainsOperation() {
        super(new RainsValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Rains value)   {
        return new DeleteRainsQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, Rains value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
