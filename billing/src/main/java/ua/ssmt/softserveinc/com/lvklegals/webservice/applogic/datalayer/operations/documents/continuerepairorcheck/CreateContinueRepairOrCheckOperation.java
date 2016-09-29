package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.continuerepairorcheck;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.ContinueRepairOrCheckValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateContinueRepairOrCheckQuery;

import java.sql.Connection;

/**
 * Created by vostap on 06.11.2014.
 */
public class CreateContinueRepairOrCheckOperation extends AbstractModifyOperation<ContinueRepairOrCheck> {
    public CreateContinueRepairOrCheckOperation() {
        super(new ContinueRepairOrCheckValidator());
    }

    @Override
    protected long _doOperation(Connection connection, ContinueRepairOrCheck value)   {
        return new CreateContinueRepairOrCheckQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, ContinueRepairOrCheck value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
