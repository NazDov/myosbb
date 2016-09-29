package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbycapacitytube;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByCapacityTube;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddingByCapacityCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAddingByCapacityTubeQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.10.2014.
 */
public class SearchAddingByCapacityTubeOperation extends AbstractSelectOperation<AddingByCapacityTube> {

    private AddingByCapacityCondition condition;

    public SearchAddingByCapacityTubeOperation(AddingByCapacityCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<AddingByCapacityTube> doOperation(Connection connection)   {
        List<AddingByCapacityTube> list = new SearchAddingByCapacityTubeQuery(condition).execute(connection);
        for (AddingByCapacityTube doc:list){
            doc.setContraAgent(getFillers().getContraAgentByID(connection,doc.getContraAgent().getId()));
            doc.setDepartment(getFillers().getDepartmentByID(connection,doc.getDepartment().getId()));
            doc.setInput(getFillers().getInputByID(connection,doc.getInput().getId()));

        }
        return list;
    }
}
