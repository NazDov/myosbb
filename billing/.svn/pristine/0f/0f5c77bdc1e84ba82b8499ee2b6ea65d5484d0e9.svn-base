package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.StockWithoutPermissionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateStockWithoutPermissionQuery;

import java.sql.Connection;

/**
 * Created by vostap on 11.11.2014.
 */
public class UpdateStockWithoutPermissionOperation extends AbstractModifyOperation<StockWithoutPermission> {
    public UpdateStockWithoutPermissionOperation() {
        super(new StockWithoutPermissionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, StockWithoutPermission value)   {
        return new UpdateStockWithoutPermissionQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, StockWithoutPermission value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
