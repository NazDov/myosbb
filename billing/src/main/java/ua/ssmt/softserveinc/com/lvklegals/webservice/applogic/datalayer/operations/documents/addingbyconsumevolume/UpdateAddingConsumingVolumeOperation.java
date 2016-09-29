package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.AddingByConsumingVolumeValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateAddingConsumingVolumeQuery;

import java.sql.Connection;

/**
 * Created by vostap on 06.11.2014.
 */
public class UpdateAddingConsumingVolumeOperation extends AbstractModifyOperation<AddingByConsumingVolume> {
    public UpdateAddingConsumingVolumeOperation() {
        super(new AddingByConsumingVolumeValidator());
    }

    @Override
    protected long _doOperation(Connection connection, AddingByConsumingVolume value)   {
        return new UpdateAddingConsumingVolumeQuery().execute(connection,value);

    }

    @Override
    public boolean validate(Connection connection, AddingByConsumingVolume value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
