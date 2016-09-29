package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.input;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 01.02.2016.
 */
public class GetAllInputOperation extends AbstractSelectOperation<Input> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Input> doOperation(Connection connection) {
        return new GetAllInputsQuery(null).execute(connection);
    }
}
