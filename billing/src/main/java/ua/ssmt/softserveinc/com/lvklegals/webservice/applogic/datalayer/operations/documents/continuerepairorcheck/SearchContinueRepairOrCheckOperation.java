package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.continuerepairorcheck;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContinueRepairOrCheckCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchContinueRepairOrCheckQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 06.11.2014.
 */
public class SearchContinueRepairOrCheckOperation extends AbstractSelectOperation<ContinueRepairOrCheck> {

    private ContinueRepairOrCheckCondition condition;

    public SearchContinueRepairOrCheckOperation( ContinueRepairOrCheckCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ContinueRepairOrCheck> doOperation(Connection connection)   {
        List<ContinueRepairOrCheck> list = new SearchContinueRepairOrCheckQuery(condition).execute(connection);
        for (ContinueRepairOrCheck doc:list){
            doc.setInput(getFillers().getInputByID(connection,doc.getInput().getId()));
            doc.setCounter(getFillers().getCounterByID(connection,doc.getCounter().getId()));
            doc.setDepartment(getFillers().getDepartmentByID(connection,doc.getDepartment().getId()));
            doc.setContraAgent(getFillers().getContraAgentByID(connection,doc.getContraAgent().getId()));
            doc.setUnregisterOfCounter(getFillers().getUnregisterOfCounterByID(connection,doc.getUnregisterOfCounter().getId()));
        }
        return list;
    }
}
