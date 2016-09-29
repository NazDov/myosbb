package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysInputStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.DepartmentInputValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateDepartmentInputQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputStatusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputSubServiceContainsQuery;

import java.sql.Connection;
import java.util.Date;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateDepartmentInputOperation extends AbstractModifyOperation<DepartmentInput> {
    public CreateDepartmentInputOperation() {
        super(new DepartmentInputValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DepartmentInput value)   {
        Long res =  new CreateDepartmentInputQuery().execute(connection, value);
        value.setId(res);
        this.insertInputSubServiceContains(connection, value);
        this.insertInputProperty(connection,value);
        this.insertInputStatus(connection,value);
        return res;
    }

    private void insertInputStatus(Connection connection, DepartmentInput value)   {
        SysInputStatus status = new SysInputStatus();
        status.setDepartmentInput(value);
        status.setStatus(1L);
        status.setStatusesDate(new Date());
        new CreateInputStatusQuery().execute(connection,status);
    }

    private void insertInputProperty(Connection connection, DepartmentInput value)   {
        value.getInputProperty().setKoefWatterOut(0.0d);
        value.getInputProperty().setKoefWatterSupply(0.0d);
        value.getInputProperty().setNorma(0.0);
        new CreateInputPropertyQuery().execute(connection,value);
    }

    private void insertInputSubServiceContains(Connection connection, DepartmentInput value)   {
        value.getSubServices().setWatterOut(false);
        value.getSubServices().setWatterSupply(false);
        new CreateInputSubServiceContainsQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,DepartmentInput value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
