package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 02.12.2014.
 */
public class SearchRainsOperation extends AbstractSelectOperation<Rains> {

    public RainsCondition condition;

    public SearchRainsOperation(RainsCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Rains> doOperation(Connection connection)   {
        List<Rains> listRains = new SearchRainsQuery(condition).execute(connection);
        for (Rains rains: listRains){
            rains.setDepartment(this.getFillers().getDepartmentByID(connection,rains.getDepartment().getId()));
            rains.setAreaType(this.getFillers().getAreaTypeByID(connection,rains.getAreaType().getId()));

        }
        return listRains;
    }
}
