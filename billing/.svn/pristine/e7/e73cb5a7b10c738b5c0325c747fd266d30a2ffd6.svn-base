package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 11.05.2016.
 */
public class SearchClearInputFactorOperation extends AbstractSelectOperation<InputFactor> {

    private InputFactorCondition condition;

    public SearchClearInputFactorOperation(InputFactorCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<InputFactor> doOperation(Connection connection) {
        return new SearchInputFactorsQuery(condition).execute(connection);
    }
}
