package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchSubRouteQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SubRouteCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchSubRouteOperation extends AbstractSelectOperation<SubRoute>{
    private SubRouteCondition condition;

    public SearchSubRouteOperation(SubRouteCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<SubRoute> doOperation(Connection connection)   {
        return new SearchSubRouteQuery(this.condition).execute(connection);
    }
}
