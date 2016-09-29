package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.countermodel;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SelectCounterModelQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterModelCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 16.09.2014.
 */
public class SearchCounterModelOperation extends AbstractSelectOperation<CounterModel> {
    private CounterModelCondition condition;

    public SearchCounterModelOperation(CounterModelCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CounterModel> doOperation(Connection connection)   {
        return new SelectCounterModelQuery(condition).execute(connection);
    }
}
