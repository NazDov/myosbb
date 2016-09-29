package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.tariff;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.TariffValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateTariffQuery;

import java.sql.Connection;

/**
 * Created by vostap on 21.09.2014.
 */
public class UpdateTariffOperation extends AbstractModifyOperation<Tariff> {
    public UpdateTariffOperation() {
        super(new TariffValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Tariff value)   {
        return new UpdateTariffQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,Tariff value)   {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
