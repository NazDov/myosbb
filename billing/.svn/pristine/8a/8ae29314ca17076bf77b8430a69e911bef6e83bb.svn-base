package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysInputStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentInputValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SysInputStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteDepartmentInputQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputPropertiesQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputStatusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputSubRouteContainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchSysInputStatusQuery;

import java.sql.Connection;

/**
 * Created by vostap on 23.09.2014.
 */
public class DeleteDepartmentInputOperation extends AbstractModifyOperation<DepartmentInput> {
    public DeleteDepartmentInputOperation() {
        super(new DepartmentInputValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DepartmentInput value)   {
        this.deleteInputStatus(connection,value);
        this.deleteInputSubRouteContains(connection,value);
        this.deleteInputProperty(connection,value);
        return new DeleteDepartmentInputQuery().execute(connection,value);
    }

    private void deleteInputStatus(Connection connection, DepartmentInput value)   {
        SysInputStatusCondition sysInputStatusCondition = new SysInputStatusCondition();
        sysInputStatusCondition.setDepartmentInputID(value.getId());
        SysInputStatus status = new SearchSysInputStatusQuery(sysInputStatusCondition).execute(connection).get(0);
        new DeleteInputStatusQuery().execute(connection,status);
    }

    private void deleteInputProperty(Connection connection, DepartmentInput value)   {
        new DeleteInputPropertiesQuery().execute(connection,value);
    }

    private void deleteInputSubRouteContains(Connection connection, DepartmentInput value)   {
        new DeleteInputSubRouteContainsQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,DepartmentInput value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
