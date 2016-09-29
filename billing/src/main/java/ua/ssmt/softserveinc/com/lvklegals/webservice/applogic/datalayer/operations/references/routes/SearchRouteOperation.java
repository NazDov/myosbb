package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.routes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchRouteQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RouteConditions;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchRouteOperation extends AbstractSelectOperation<Route>{
    private RouteConditions conditions;

    public SearchRouteOperation(RouteConditions conditions) {
        this.conditions = conditions;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Route> doOperation(Connection connection)   {
        return new SearchRouteQuery(conditions).execute(connection);
    }
}
