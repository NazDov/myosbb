package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.counters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.ApplicationException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCounterByDepartmentAndInputQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 11.02.2015.
 */
public class SearchCounterByDepartmentAndInputOperation extends AbstractSelectOperation<Counter> {
    private DepartmentInputCondition condition;

    public SearchCounterByDepartmentAndInputOperation(DepartmentInputCondition departmentInputCondition) {
        this.condition = departmentInputCondition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<Counter> doOperation(Connection connection)   {
        List<Counter> counters = new SearchCounterByDepartmentAndInputQuery(condition).execute(connection);
        if (counters.size() >1) throw new ApplicationException("CANNOT BE TWO COUNTER IN ONE INPUT");
        for (Counter c:counters){
            Counter counter = this.getFillers().getCounterByID(connection,c.getId());
            c.setNumber(counter.getNumber());
        }
        return counters;

    }
}
