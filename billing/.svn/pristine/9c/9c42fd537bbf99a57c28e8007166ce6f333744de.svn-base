package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterClientService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterClientServiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputCounterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 12.06.15.
 */
public class SearchDepartmentInputCounter extends AbstractSelectOperation<CounterClientService> {

    public CounterClientServiceCondition condition;

    public SearchDepartmentInputCounter(CounterClientServiceCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CounterClientService> doOperation(Connection connection)   {
        List<CounterClientService> counterClientService = new SearchDepartmentInputCounterQuery(condition).execute(connection);
        for (CounterClientService counters: counterClientService){
            counters.setInput(this.getFillers().getInputByID(connection, counters.getInput().getId()));
       //     counters.setDepartment(this.getFillers().getDepartmentByID(connection, counters.getDepartment().getId()));
       //     counters.setCounter(this.getFillers().getCounterByID(connection,counters.getDepartment().getId()));
      //      counters.setRegisterOfCounter(this.getFillers().getRegisterOfCounterByID(connection, counters.getRegisterOfCounter().getId()));

        }
        return counterClientService;
    }
}
