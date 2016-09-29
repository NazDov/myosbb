package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.addresses;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AddressValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteAddressQuery;

import java.sql.Connection;

/**
 * Created by vostap on 10.09.2014.
 */
public class DeleteAddressOperation extends AbstractModifyOperation<Address> {
    public DeleteAddressOperation() {
        super(new AddressValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Address value)   {
        new DeleteAddressQuery().execute(connection,value);
        return 0;
    }

    @Override
    public boolean validate(Connection connection,Address value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
