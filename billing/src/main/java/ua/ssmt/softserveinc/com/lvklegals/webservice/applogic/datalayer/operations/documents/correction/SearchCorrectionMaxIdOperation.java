package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correction;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionMaxIdQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 27.01.2015.
 */
public class SearchCorrectionMaxIdOperation extends AbstractSelectOperation<Correction> {
    private CorrectionCondition condition;

    public SearchCorrectionMaxIdOperation(CorrectionCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Correction> doOperation(Connection connection)   {
        List<Correction> list = new SearchCorrectionMaxIdQuery(condition).execute(connection);
        for (Correction p:list){
            p.setContraAgentOne(this.getFillers().getContraAgentByID(connection, p.getContraAgentOne().getId()));
            p.setContraAgentTwo(this.getFillers().getContraAgentByID(connection, p.getContraAgentTwo().getId()));
            p.setDocNumberOne(this.getFillers().getAgreementByID(connection, p.getDocNumberOne().getId()));
            p.setDocNumberTwo(this.getFillers().getAgreementByID(connection, p.getDocNumberTwo().getId()));
            p.setAgreementDepOne(this.getFillers().getAgreementByID(connection,p.getAgreementDepOne().getId()));
            p.setAgreementDepTwo(this.getFillers().getAgreementByID(connection,p.getAgreementDepTwo().getId()));
      //      p.setDepartmentOne(this.getFillers().getDepartmentByID(connection,p.getDepartmentOne().getId()));
      //      p.setDepartmentTwo(this.getFillers().getDepartmentByID(connection,p.getDepartmentTwo().getId()));
        }
        return list;
    }
}
