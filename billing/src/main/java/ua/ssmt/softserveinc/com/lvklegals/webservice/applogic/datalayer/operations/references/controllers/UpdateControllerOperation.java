package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ControllerValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateRegisterControllerQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchRegisterControllerQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateControllerQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateControllerRegisterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateControllerOperation extends AbstractModifyOperation<Controller> {

    public UpdateControllerOperation() {
        super(new ControllerValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Controller value)   {
        Long registrID = this.checkExistRegisterControllerInCurrentPeriod(connection,value);
        new UpdateControllerQuery().execute(connection,value);
        value.setRegisterID(registrID);
        if (registrID == null)
            new CreateRegisterControllerQuery().execute(connection,value);
        else
            new UpdateControllerRegisterQuery().execute(connection,value);
        return value.getId();
    }

    private Long checkExistRegisterControllerInCurrentPeriod(Connection connection, Controller value)   {
        List<Long> list = new SearchRegisterControllerQuery(value.getId()).execute(connection);
        if (list.isEmpty()) return null;
        else return list.get(0);
    }

    @Override
    public boolean validate(Connection connection,Controller value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

}
