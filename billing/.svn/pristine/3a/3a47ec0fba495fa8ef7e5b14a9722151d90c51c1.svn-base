package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchBeginFactorByDocumentIDQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchRegisterOfCounterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchRegisterCounterOperation extends AbstractSelectOperation<RegisterOfCounter> {

    private RegisterOfCounterCondition condition;

    public SearchRegisterCounterOperation(RegisterOfCounterCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<RegisterOfCounter> doOperation(Connection connection)   {
        List<RegisterOfCounter> res = new SearchRegisterOfCounterQuery(this.condition).execute(connection);
        res = fillDocuments(res,connection);
        return res;
    }

    private List<RegisterOfCounter> fillDocuments(List<RegisterOfCounter> res, Connection connection)   {
        for (RegisterOfCounter rc:res){
            rc.setContraAgent(this.getFillers().getContraAgentByID(connection,rc.getContraAgent().getId()));
            rc.setDepartment(this.getFillers().getDepartmentByID(connection,rc.getDepartment().getId()));
            rc.setInput(this.getFillers().getInputByID(connection,rc.getInput().getId()));
            rc.setCounter(this.getFillers().getCounterByID(connection,rc.getCounter().getId()));
            rc.setBeginFactor(fillBeginFactor(rc,connection));
        }
        return res;
    }

    private Integer fillBeginFactor(RegisterOfCounter rc, Connection connection)   {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setRegisterOfCounterID(rc.getId());
        condition.setPeriod(rc.getPeriod());
        List<InputFactor> list = new SearchBeginFactorByDocumentIDQuery(condition).execute(connection);
        if (list.isEmpty()) return -1;
        else return list.get(0).getBeginFactor();
    }

}


