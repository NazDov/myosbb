package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.volumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.VolumeConsumptionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchVolumeConsumptionQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 27.01.2015.
 */
public class SearchVolumeConsumptionOperation extends AbstractSelectOperation<VolumeConsumption> {
    private VolumeConsumptionCondition condition;

    public SearchVolumeConsumptionOperation(VolumeConsumptionCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }


    @Override
     public List<VolumeConsumption> doOperation(Connection connection)   {
        List<VolumeConsumption> res = new SearchVolumeConsumptionQuery(this.condition).execute(connection);
        res = fillDocuments(res,connection);
        return res;
    }

    private List<VolumeConsumption> fillDocuments(List<VolumeConsumption> res, Connection connection)   {
        for (VolumeConsumption rc:res){
            rc.setDepartment(this.getFillers().getDepartmentByID(connection,rc.getDepartment().getId()));
            rc.setContraAgent(this.getFillers().getContraAgentByID(connection,rc.getContraAgent().getId()));
            rc.setInput(this.getFillers().getInputByID(connection, rc.getInput().getId()));

        }
        return res;
    } 
}
