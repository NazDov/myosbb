package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.RainsValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateRainsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 01.12.2014.
 */
public class UpdateRainsOperation extends AbstractModifyOperation<Rains> {
    public UpdateRainsOperation() {
        super(new RainsValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Rains value)   {
        boolean checkToExistRecordInPeriod = checkToExistRecordInPeriod(connection,value);
        if (checkToExistRecordInPeriod) updateRains(connection,value);
        else createRains(connection,value);
        return 0;
    }

    private void createRains(Connection connection, Rains value)   {
        new CreateRainsQuery().execute(connection,value);
    }

    private void updateRains(Connection connection, Rains value)   {
        new UpdateRainsQuery().execute(connection,value);
    }

    private boolean checkToExistRecordInPeriod(Connection connection, Rains value)   {
        RainsCondition condition = new RainsCondition();
        condition.setDepartmentID(value.getDepartment().getId());
        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        List<Rains> list = new SearchRainsQuery(condition).execute(connection);
        return !list.isEmpty();
    }


    @Override
    public boolean validate(Connection connection, Rains value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
