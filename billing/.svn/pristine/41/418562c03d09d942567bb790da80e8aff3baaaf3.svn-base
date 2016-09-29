package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchCorrectionOfCounterOperation extends AbstractSelectOperation<CorrectionOfCounter> {

    private CorrectionOfCounterCondition condition;

    public SearchCorrectionOfCounterOperation(CorrectionOfCounterCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CorrectionOfCounter> doOperation(Connection connection)   {
        List<CorrectionOfCounter> res = new ArrayList<>();
        List<CorrectionOfCounter> list = new SearchCorrectionOfCounterQuery(this.condition).execute(connection);
        for (CorrectionOfCounter c:list){
            CorrectionOfCounter counter = new CorrectionOfCounter();
            counter.setId(c.getId());
            counter.setReason(c.getReason());
            counter.setDepartment(this.getFillers().getDepartmentByID(connection,c.getDepartment().getId()));
            counter.setContraAgent(this.getFillers().getContraAgentByID(connection,c.getContraAgent().getId()));
            counter.setCounter(this.fillCounter(connection,c));
            counter.setInput(this.fillInput(connection,c));
            counter.setInputFactor(c.getInputFactor());
            counter.setReasonDate(c.getReasonDate());
            counter.setReasonNumber(c.getReasonNumber());
            res.add(counter);
        }
        return res;
    }

    private Input fillInput(Connection connection, CorrectionOfCounter c)   {
        InputCondition condition = new InputCondition();
        condition.setId(c.getInput().getId());
        Input res =  new SearchInputQuery(condition).execute(connection).get(0);
        res.setAddress(this.fillAddress(connection,res.getAddress()));
        return res;
    }
    private Address fillAddress(Connection connection, Address address)   {
        AddressCondition condition = new AddressCondition();
        condition.setId(address.getId());
        return new SearchAddressQuery(condition).execute(connection).get(0);
    }

    private Counter fillCounter(Connection connection, CorrectionOfCounter c)   {
        CounterCondition condition = new CounterCondition();
        condition.setId(c.getCounter().getId());
        return new SearchCounterQuery(condition).execute(connection).get(0);
    }

}
