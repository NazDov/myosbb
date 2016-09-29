package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.OperationType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchUnregisterOfCounterOperation extends AbstractSelectOperation<UnregisterOfCounter> {

    public UnregisterOfCounterCondition condition;

    public SearchUnregisterOfCounterOperation(UnregisterOfCounterCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<UnregisterOfCounter> doOperation(Connection connection)   {
        List<UnregisterOfCounter> list  = new SearchUnregisterCounterQuery(this.condition).execute(connection);
        for (UnregisterOfCounter u:list){
            u.setContraAgent(this.getFillers().getContraAgentByID(connection,u.getContraAgent().getId()));
            u.setDepartment(this.getFillers().getDepartmentByID(connection, u.getDepartment().getId()));
            u.setInput(this.getFillers().getInputByID(connection, u.getInput().getId()));
            u.setOperationType(this.fillOperationType(connection,u.getOperationType().getId()));
            u.setCounter(this.getFillers().getCounterByID(connection,u.getCounter().getId()));
            u.setFactorByOnUnregister(this.fillUnregisterFactor(u,connection));
        }
        return list;
    }

    private OperationType fillOperationType(Connection connection, Long id)   {
        OperationTypeCondition condition = new OperationTypeCondition();
        condition.setId(id);
        return new SearchOperationTypeQuery(condition).execute(connection).get(0);
    }

    private Input fillInput(Connection connection, Long id)   {
        InputCondition inputCondition = new InputCondition();
        inputCondition.setId(id);
        Input i =  new SearchInputQuery(inputCondition).execute(connection).get(0);
        i.setAddress(fillAddress(connection, i.getAddress().getId()));
        i.setService(fillService(connection,i.getService().getId()));
        i.setDiameter(fillDiameter(connection,i.getDiameter().getId()));
        return i;
    }

    private InputDiameter fillDiameter(Connection connection, Long id)   {
        InputDiameterCondition condition = new InputDiameterCondition();
        condition.setId(id);
        return new SearchInputDiameterQuery(condition).execute(connection).get(0);
    }

    private Service fillService(Connection connection, Long id)   {
        ServiceCondition condition = new ServiceCondition();
        condition.setId(id);
        return new SearchServiceQuery(condition).execute(connection).get(0);
    }

    private Address fillAddress(Connection connection, Long id)   {
        AddressCondition condition = new AddressCondition();
        condition.setId(id);
        return new SearchAddressQuery(condition).execute(connection).get(0);
    }

    private Department fillDepartment(Connection connection, Long id)   {
        DepartmentCondition condition = new DepartmentCondition();
        condition.setId(id);
        return new SearchDepartmentQuery(condition).execute(connection).get(0);

    }

    private ContraAgent fillContraAgent(Connection connection, Long id)   {
        ContraAgentCondition condition = new ContraAgentCondition();
        condition.setId(id);
        return new SearchContraAgentQuery(condition).execute(connection).get(0);
    }

    private Integer fillUnregisterFactor(UnregisterOfCounter rc, Connection connection)   {
        UnregisterOfCounterCondition condition = new UnregisterOfCounterCondition();
        condition.setUnregisterOfCounterID(rc.getId());
        condition.setPeriod(rc.getPeriod());
        List<InputFactor> list = new SearchEndFactorByDocumentIDQuery(condition).execute(connection);
        if (list.isEmpty()) return -1;
        else return list.get(0).getEndFactor();

    }

}
