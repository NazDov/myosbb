package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfRealizeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionOfRealizeQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 22.10.2014.
 */
public class SearchCorrectionOfRealizeOperation extends AbstractSelectOperation<CorrectionOfRealize> {

    private CorrectionOfRealizeCondition condition;

    public SearchCorrectionOfRealizeOperation(CorrectionOfRealizeCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CorrectionOfRealize> doOperation(Connection connection)   {
        List<CorrectionOfRealize> res = new ArrayList<>();
        List<CorrectionOfRealize> list = new SearchCorrectionOfRealizeQuery(condition).execute(connection);
        for (CorrectionOfRealize c:list){
            c.setContraAgent(this.fillContraAgent(connection,c));
            c.setDepartment(this.fillDepartment(connection, c));
            c.setInput(this.fillInput(connection, c));
            res.add(c);
        }
        return res;
    }



    private ContraAgent fillContraAgent(Connection connection, CorrectionOfRealize c)   {
        return getFillers().getContraAgentByID(connection,c.getContraAgent().getId());
    }
    private Department fillDepartment(Connection connection, CorrectionOfRealize c)   {
        return getFillers().getDepartmentByID(connection,c.getDepartment().getId());
    }
    private Input fillInput(Connection connection,CorrectionOfRealize c)   {
        return getFillers().getInputByID(connection,c.getInput().getId());
    }

}
