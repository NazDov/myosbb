package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.HotWaterSupplyValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteHotWatterSupplierPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteHotWatterSupplyQuery;

import java.sql.Connection;

/**
 * Created by vostap on 25.08.2014.
 */
public class DeleteHotWatterOperation extends AbstractModifyOperation<HotWaterSupplier> {

    public DeleteHotWatterOperation() {
        super(new HotWaterSupplyValidator());
    }

    @Override
    public long _doOperation(Connection connection, HotWaterSupplier value)   {
        new DeleteHotWatterSupplierPropertyQuery().execute(connection,value);
        new DeleteHotWatterSupplyQuery().execute(connection,value);
        return value.getId();
    }

    @Override
    public boolean validate(Connection connection,HotWaterSupplier value)   {
        if (value.getId() == null){
            throw new ValidateException(Messages.getInstance().get("ERROR_CONTRA_AGENT_ID_CANNOT_BE_NULL_IN_DELETE_OPERATON"));
        }
        return true;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

}
