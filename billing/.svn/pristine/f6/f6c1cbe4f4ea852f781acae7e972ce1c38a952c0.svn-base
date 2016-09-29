package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.StreetCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchStreetQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 8/6/2015.
 */
public class SearchStreetOperation extends AbstractSelectOperation<Street> {

    private StreetCondition condition;

    public SearchStreetOperation(StreetCondition condition) {
        this.condition = condition;
    }

    public StreetCondition getCondition() {
        return condition;
    }

    public void setCondition(StreetCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Street> doOperation(Connection connection) {
        return new SearchStreetQuery(this.condition).execute(connection);
    }
}
