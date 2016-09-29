package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.volumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.VolumeConsumptionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateVolumeConsumptionQuery;

import java.sql.Connection;

/**
 * Created by vstoian on 11.02.2015.
 */
public class UpdateVolumeConsumptionOperation extends AbstractModifyOperation<VolumeConsumption> {
    public UpdateVolumeConsumptionOperation() {
        super(new VolumeConsumptionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, VolumeConsumption value)   {
        return new UpdateVolumeConsumptionQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, VolumeConsumption value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
