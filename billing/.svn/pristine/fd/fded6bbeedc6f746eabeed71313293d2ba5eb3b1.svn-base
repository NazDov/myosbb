package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.StockWithoutPermissionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteStockWithoutPermissionQuery;

import java.sql.Connection;

/**
 * Created by vostap on 11.11.2014.
 */
public class DeleteStockWithoutPermissionOperation extends AbstractModifyOperation<StockWithoutPermission> {
    public DeleteStockWithoutPermissionOperation() {
        super(new StockWithoutPermissionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, StockWithoutPermission value)   {
        return new DeleteStockWithoutPermissionQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, StockWithoutPermission value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
