package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingcalculationbyp3_3;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingCalculationByP3;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddingCalculationByP3Condition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAddingCalculationByP3_3Query;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchAddingCalculationByP3_3Operation extends AbstractSelectOperation<AddingCalculationByP3> {
    private AddingCalculationByP3Condition condition;

    public SearchAddingCalculationByP3_3Operation(AddingCalculationByP3Condition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<AddingCalculationByP3> doOperation(Connection connection)   {
        List<AddingCalculationByP3> list =  new SearchAddingCalculationByP3_3Query(condition).execute(connection);
        for (AddingCalculationByP3 doc:list){
            doc.setContraAgent(this.getFillers().getContraAgentByID(connection,doc.getContraAgent().getId()));
            doc.setDepartment(this.getFillers().getDepartmentByID(connection,doc.getDepartment().getId()));
            doc.setInput(this.getFillers().getInputByID(connection,doc.getInput().getId()));

        }
        return list;
    }
}
