package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CSCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CSCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCSCounterStatusQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 02.12.2014.
 */
public class GetCounterStatusOperation extends AbstractSelectOperation<CSCounterStatus> {

    private CSCounterStatusCondition condition;

    public GetCounterStatusOperation(CSCounterStatusCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CSCounterStatus> doOperation(Connection connection)   {
        return new SearchCSCounterStatusQuery(condition).execute(connection);
    }
}
