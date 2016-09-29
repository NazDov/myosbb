package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.StockWithoutPermissionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateStockWithoutPermissionQuery;

import java.sql.Connection;

/**
 * Created by vostap on 11.11.2014.
 */
public class CreateStockWithoutPermissionOperation extends AbstractModifyOperation<StockWithoutPermission> {
    public CreateStockWithoutPermissionOperation() {
        super(new StockWithoutPermissionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, StockWithoutPermission value)   {
        return new CreateStockWithoutPermissionQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, StockWithoutPermission value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
