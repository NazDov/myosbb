package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchControllerQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ControllerCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchControllerOperation extends AbstractSelectOperation<Controller> {
    private ControllerCondition condition;
    public SearchControllerOperation(ControllerCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Controller> doOperation(Connection connection)   {
        return new SearchControllerQuery(this.condition).execute(connection);
    }
}
