package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subservices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchSubServiceQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SubServiceCondition;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 05.10.2014.
 */
public class SearchSubServiceOperation extends AbstractSelectOperation<SubService> {

    private SubServiceCondition condition;

    public SearchSubServiceOperation (SubServiceCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<SubService> doOperation(Connection connection)   {
        return new SearchSubServiceQuery(condition).execute(connection);
    }
}
