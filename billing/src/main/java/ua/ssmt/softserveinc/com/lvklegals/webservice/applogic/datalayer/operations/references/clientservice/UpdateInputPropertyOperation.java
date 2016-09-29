package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.InputPropertyValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateInputPropertyQuery;

import java.sql.Connection;
import java.util.Date;

/**
 * Created by vostap on 13.11.2014.
 */
public class UpdateInputPropertyOperation extends AbstractModifyOperation<InputProperty> {
    public UpdateInputPropertyOperation() {
        super(new InputPropertyValidator());
    }

    @Override
    protected long _doOperation(Connection connection, InputProperty value)   {
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        if (DateUtils.checkDateInPeriod(value.getPeriod(),period))
            new UpdateInputPropertyQuery().execute(connection,value);
        else
            insertInputProperty(connection,value);
        return 0;
    }

    private void insertInputProperty(Connection connection, InputProperty value)   {
        DepartmentInput  di = new DepartmentInput();
        di.setId(value.getDepartmentInputID());
        di.setInputProperty(value);
        new CreateInputPropertyQuery().execute(connection,di);
    }


    @Override
    public boolean validate(Connection connection, InputProperty value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
