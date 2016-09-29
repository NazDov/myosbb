package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 08.10.2014.
 */
public class SearchInputFactorsOperation extends AbstractSelectOperation<InputFactor> {

    private InputFactorCondition condition;

    public SearchInputFactorsOperation(InputFactorCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<InputFactor> doOperation(Connection connection)   {
        List<InputFactor> list = new GetCounterToInputFactorsQuery(condition).execute(connection);
        List<InputFactor> res = new ArrayList<>();
        Date period =  new ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery(null).execute(connection).get(0);
        for (InputFactor factor:list){

            InputFactor tmp = new GetLastFactorByCounterQuery(factor.getCounter()).execute(connection).get(0);
            if (!DateUtils.checkDateInPeriod(tmp.getPeriod(),period)){
                CounterCondition cc = new CounterCondition();
                cc.setId(factor.getCounter().getId());
                factor.setCounter(new SearchCounterQuery(cc).execute(connection).get(0));
                this.fillContraAgent(factor.getCounter(), connection);
                this.fillDepartment(factor.getCounter(), connection);
                factor.setBeginFactor(tmp.getEndFactor());
                factor.setEndFactor(tmp.getEndFactor());
                factor.setInput(this.fillInput(connection, tmp.getInput()));
                factor.setVolume(tmp.getVolume());
                factor.setFactorOnBeginMonth(tmp.getEndFactor());
                factor.setCodeConto(tmp.getCodeConto());
                factor.setConto(tmp.getConto());
                factor.setAgreement(tmp.getAgreement());
                factor.setOnDate(tmp.getOnDate());
                res.add(factor);
            } else {
                //InputFactor tmp = new GetLastFactorByCounterQuery(factor.getCounter()).execute(connection).get(0);
                CounterCondition cc = new CounterCondition();
                cc.setId(factor.getCounter().getId());
                factor.setCounter(new SearchCounterQuery(cc).execute(connection).get(0));
                this.fillContraAgent(factor.getCounter(), connection);
                this.fillDepartment(factor.getCounter(), connection);
                factor.setBeginFactor(tmp.getBeginFactor());
                factor.setEndFactor(tmp.getEndFactor());
                factor.setInput(this.fillInput(connection, tmp.getInput()));
                factor.setVolume(tmp.getVolume());
                factor.setFactorOnBeginMonth(tmp.getFactorOnBeginMonth());
                factor.setCodeConto(tmp.getCodeConto());
                factor.setConto(tmp.getConto());
                factor.setAgreement(tmp.getAgreement());
                factor.setOnDate(tmp.getOnDate());
                res.add(factor);
            }
        }
        return res;
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

    private void fillContraAgent(Counter c,Connection connection)   {
        c.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));
    }

    private void fillDepartment(Counter c,Connection connection)   {
        DepartmentCondition dc = new DepartmentCondition();
        dc.setId(c.getDepartment().getId());
        c.setDepartment(this.getFillers().getDepartmentByID(connection,c.getDepartment().getId()));
    }
    private Agreement fillAgreement(Connection connection, Agreement agreement)   {
        AgreementCondition condition = new AgreementCondition();
        condition.setId(agreement.getId());
        return new SearchAgreementQuery(condition).execute(connection).get(0);
    }

}
