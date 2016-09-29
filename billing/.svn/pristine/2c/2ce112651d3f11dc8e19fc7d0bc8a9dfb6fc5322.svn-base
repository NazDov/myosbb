package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.RegisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SysCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteRegisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteStatusCounterFromHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentCounterStatusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentStatusCounterFromHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateCounterStatusQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class DeleteRegisterOfCounterOperation extends AbstractModifyOperation<RegisterOfCounter> {
    public DeleteRegisterOfCounterOperation() {
        super(new RegisterOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, RegisterOfCounter value)   {
        removeLastCounterStatusFromHistory(connection,value);
        changeCurrentStatus(connection,value);
        deleteFactors(connection,value);
        deleteDocument(connection,value);
        return 0;
    }

    private void deleteDocument(Connection connection, RegisterOfCounter value)   {
        SysCounterStatusCondition condition = new SysCounterStatusCondition();
        condition.setCounterID(value.getCounter().getId());
        List<SysCounterStatus> list = new GetCurrentCounterStatusQuery(condition).execute(connection);
        SysCounterStatus status = list.get(0);
        new DeleteRegisterOfCounterQuery().execute(connection,value);
    }

    private void deleteFactors(Connection connection, RegisterOfCounter value)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
        condition.setRegisterCounterID(value.getId());
        List<InputFactor> list = new SearchInputFactorsQuery(condition).execute(connection);
        InputFactor f = list.get(0);
        new DeleteInputFactorQuery().execute(connection,f);
    }

    private void changeCurrentStatus(Connection connection, RegisterOfCounter value)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(value.getCounter().getId());
        List<SysCounterStatus> list = new GetCurrentStatusCounterFromHistoryQuery(condition).execute(connection);
        SysCounterStatus status = list.get(0);
        new UpdateCounterStatusQuery().execute(connection,status);
    }

    private void removeLastCounterStatusFromHistory(Connection connection, RegisterOfCounter value)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(value.getCounter().getId());
        SysCounterStatus statusForDelete = new GetCurrentStatusCounterFromHistoryQuery(condition).execute(connection).get(0);
        new DeleteStatusCounterFromHistoryQuery().execute(connection,statusForDelete);
    }

    private SysCounterStatus getCurrentCounterStatus(Connection connection, RegisterOfCounter value)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(value.getCounter().getId());
        return new GetCurrentStatusCounterFromHistoryQuery(condition).execute(connection).get(0);

    }

    @Override
    public boolean validate(Connection connection,RegisterOfCounter value)   {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
