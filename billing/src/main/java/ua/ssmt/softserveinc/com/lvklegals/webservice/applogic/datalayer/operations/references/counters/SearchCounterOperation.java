package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.counters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCounterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 18.09.2014.
 */
public class SearchCounterOperation extends AbstractSelectOperation<Counter> {
    private CounterCondition counter;

    public SearchCounterOperation(CounterCondition counter){
        this.counter = counter;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Counter> doOperation(Connection connection)   {
        List<Counter> list = new SearchCounterQuery(this.counter).execute(connection);
        list = this.fillList(list,connection);

        return list;
    }

    private List<Counter> fillList(List<Counter> list, Connection connection)   {
        for (Counter c:list){
            if (c.getDepartment().getId() != null && c.getDepartment().getId() !=0) {
                c.setDepartment(this.getFillers().getDepartmentByID(connection,c.getDepartment().getId()));
            }
            if (c.getContraAgent().getId() != null && c.getContraAgent().getId() !=0 ){

                c.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));

            }


        }
        return list;
    }
}
