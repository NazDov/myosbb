package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.UnregisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteStatusCounterFromHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteUnregisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentStatusCounterFromHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateCounterStatusQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class DeleteUnregisterOfCounterOperation extends AbstractModifyOperation<UnregisterOfCounter> {
    public DeleteUnregisterOfCounterOperation() {
        super(new UnregisterOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, UnregisterOfCounter value)   {
        removeLastCounterStatusFromHistory(connection, value);
        changeCurrentStatus(connection,value);
        deleteFactors(connection,value);
        deleteDocument(connection,value);
        return 0;
    }

    private void deleteDocument(Connection connection, UnregisterOfCounter value)   {
        new DeleteUnregisterOfCounterQuery().execute(connection,value);
    }

    private void deleteFactors(Connection connection, UnregisterOfCounter value)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
        condition.setUnregisterCounterID(value.getId());
        List<InputFactor> list = new SearchInputFactorsQuery(condition).execute(connection);
        InputFactor f = list.get(0);
        new DeleteInputFactorQuery().execute(connection,f);
    }

    private void changeCurrentStatus(Connection connection, UnregisterOfCounter value)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(value.getCounter().getId());
        List<SysCounterStatus> list = new GetCurrentStatusCounterFromHistoryQuery(condition).execute(connection);
        SysCounterStatus status = list.get(0);
        new UpdateCounterStatusQuery().execute(connection,status);
    }

    private void removeLastCounterStatusFromHistory(Connection connection, UnregisterOfCounter value)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(value.getCounter().getId());
        SysCounterStatus statusForDelete = new GetCurrentStatusCounterFromHistoryQuery(condition).execute(connection).get(0);
        new DeleteStatusCounterFromHistoryQuery().execute(connection,statusForDelete);
    }

    @Override
    public boolean validate(Connection connection,UnregisterOfCounter value)   {
        return validator.validateToDelete(connection ,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
