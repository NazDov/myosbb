package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.municipals;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.MunicipalCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchMunicipalQueryByConditionQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 8/6/2015.
 */
public class SearchMunicipalOperation extends AbstractSelectOperation<Municipal> {

    private MunicipalCondition condition;

    public SearchMunicipalOperation(MunicipalCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Municipal> doOperation(Connection connection) {
        return new SearchMunicipalQueryByConditionQuery(condition).execute(connection);
    }
}
