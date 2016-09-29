package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsHistoryQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.03.2015.
 */
public class SearchRainsHistoryOperation extends AbstractSelectOperation<Rains> {
    public RainsCondition condition;

    public SearchRainsHistoryOperation(RainsCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Rains> doOperation(Connection connection)   {
        List<Rains> list = new SearchRainsHistoryQuery(condition).execute(connection);
        for (Rains rains:list){
            rains.setAreaType(this.getFillers().getAreaTypeByID(connection, rains.getAreaType().getId()));
            rains.setDepartment(this.getFillers().getDepartmentByID(connection,rains.getDepartment().getId()));
        }
        return list;
    }
}
