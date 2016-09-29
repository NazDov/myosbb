package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddingByConsumingVolumeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAddingByConsumingVolumeQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 06.11.2014.
 */
public class SearchAddingConsumingVolumeOperation extends AbstractSelectOperation<AddingByConsumingVolume> {
    private AddingByConsumingVolumeCondition condition;

    public SearchAddingConsumingVolumeOperation(AddingByConsumingVolumeCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<AddingByConsumingVolume> doOperation(Connection connection)   {
        List<AddingByConsumingVolume> list = new SearchAddingByConsumingVolumeQuery(condition).execute(connection);
        for (AddingByConsumingVolume doc:list){
            doc.setCounter(getFillers().getCounterByID(connection,doc.getCounter().getId()));
            doc.setContraAgent(getFillers().getContraAgentByID(connection,doc.getContraAgent().getId()));
            doc.setDepartment(getFillers().getDepartmentByID(connection,doc.getDepartment().getId()));
            doc.setInput(getFillers().getInputByID(connection,doc.getInput().getId()));
        }
        return list;
    }
}
