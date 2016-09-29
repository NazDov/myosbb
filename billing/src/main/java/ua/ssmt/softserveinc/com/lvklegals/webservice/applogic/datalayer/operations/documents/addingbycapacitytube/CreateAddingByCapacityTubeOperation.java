package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbycapacitytube;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByCapacityTube;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.AddingByCapacityTubeValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateAddingByCapacityTubeQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.10.2014.
 */
public class CreateAddingByCapacityTubeOperation extends AbstractModifyOperation<AddingByCapacityTube> {
    public CreateAddingByCapacityTubeOperation() {
        super(new AddingByCapacityTubeValidator());
    }

    @Override
    protected long _doOperation(Connection connection, AddingByCapacityTube value)   {
        return new CreateAddingByCapacityTubeQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, AddingByCapacityTube value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
