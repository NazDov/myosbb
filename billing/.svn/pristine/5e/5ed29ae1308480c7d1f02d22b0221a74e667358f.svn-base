package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.InputFactorValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputFactorQuery;

import java.sql.Connection;
import java.util.Date;

/**
 * Created by vostap on 23.09.2014.
 */
public class InputFactorsOperation extends AbstractModifyOperation<InputFactor> {
    public InputFactorsOperation() {
        super(new InputFactorValidator());
    }

    @Override
    protected long _doOperation(Connection connection, InputFactor value)   {
       // value.setBeginFactor(value.getEndFactor());
        value.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        value.setFactorTypeID(3L);
        return new CreateInputFactorQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,InputFactor value)   {
        return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
