package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputSubServiceContain;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputSubServiceContainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputSubServiceContainsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 14.11.2014.
 */
public class GetInputSubServiceHistoryOperation extends AbstractSelectOperation<InputSubServiceContain> {
    private InputSubServiceContainsCondition condition;
    public GetInputSubServiceHistoryOperation(InputSubServiceContainsCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<InputSubServiceContain> doOperation(Connection connection)   {
        return new SearchInputSubServiceContainsQuery(condition).execute(connection);
    }
}
