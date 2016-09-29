package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ControllerReferenseCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchControllerReferenceQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 13.05.15.
 */
public class SearchControllerReferenceOperation extends AbstractSelectOperation<ControllersReferense> {
    private ControllerReferenseCondition condition;
    public SearchControllerReferenceOperation(ControllerReferenseCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ControllersReferense> doOperation(Connection connection)   {
        return new SearchControllerReferenceQuery(this.condition).execute(connection);
    }
}

