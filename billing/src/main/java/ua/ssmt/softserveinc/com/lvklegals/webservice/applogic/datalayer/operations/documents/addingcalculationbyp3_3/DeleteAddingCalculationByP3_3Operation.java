package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingcalculationbyp3_3;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingCalculationByP3;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.AddingCalculationByP3Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteAddingCalculationByP3_3Query;

import java.sql.Connection;

/**
 * Created by vostap on 19.11.2014.
 */
public class DeleteAddingCalculationByP3_3Operation extends AbstractModifyOperation<AddingCalculationByP3> {
    public DeleteAddingCalculationByP3_3Operation() {
        super(new AddingCalculationByP3Validator());
    }

    @Override
    protected long _doOperation(Connection connection, AddingCalculationByP3 value)   {
        return new DeleteAddingCalculationByP3_3Query().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, AddingCalculationByP3 value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
