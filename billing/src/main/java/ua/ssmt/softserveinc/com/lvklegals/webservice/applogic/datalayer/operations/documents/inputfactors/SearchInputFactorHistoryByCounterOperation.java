package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAddressQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 29.04.2016.
 */
public class SearchInputFactorHistoryByCounterOperation extends AbstractSelectOperation<InputFactor> {

    private InputFactorCondition condition;
    public SearchInputFactorHistoryByCounterOperation(InputFactorCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<InputFactor> doOperation(Connection connection) {
        List<InputFactor> list =  new SearchInputFactorsQuery(condition).execute(connection);
        for (InputFactor f:list){
            CounterCondition cc = new CounterCondition();
            cc.setId(f.getCounter().getId());
            f.setCounter(new SearchCounterQuery(cc).execute(connection).get(0));
            this.fillContraAgent(f.getCounter(), connection);
            this.fillDepartment(f.getCounter(), connection);
            f.setAgreement(f.getAgreement());
        }
        return list;
    }

    private Input fillInput(Connection connection, Input input)   {
        InputCondition condition = new InputCondition();
        condition.setId(input.getId());
        Input res = new SearchInputQuery(condition).execute(connection).get(0);
        res.setAddress(this.fillAddress(connection,res.getAddress()));
        return res;
    }


    private Address fillAddress(Connection connection, Address address)   {
        AddressCondition condition = new AddressCondition();
        condition.setId(address.getId());
        return new SearchAddressQuery(condition).execute(connection).get(0);
    }

    private void fillContraAgent(Counter c, Connection connection)   {
        c.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));
    }

    private void fillDepartment(Counter c,Connection connection)   {
        DepartmentCondition dc = new DepartmentCondition();
        dc.setId(c.getDepartment().getId());
        c.setDepartment(this.getFillers().getDepartmentByID(connection,c.getDepartment().getId()));
    }
}
