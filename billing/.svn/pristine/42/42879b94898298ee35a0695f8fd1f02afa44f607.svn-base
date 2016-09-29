package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.volumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.VolumeConsumptionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteVolumeConsumptionQuery;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class DeleteVolumeConsumptionOperation extends AbstractModifyOperation<VolumeConsumption> {
    public DeleteVolumeConsumptionOperation() {
        super(new VolumeConsumptionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, VolumeConsumption value)   {
        return new DeleteVolumeConsumptionQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, VolumeConsumption value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
