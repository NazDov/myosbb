package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementByDepQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchAgreementDepOperation extends AbstractSelectOperation<Agreement> {
    private AgreementCondition condition;

    public SearchAgreementDepOperation(AgreementCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Agreement> doOperation(Connection connection)   {
        List<Agreement> list = new SearchAgreementByDepQuery(condition).execute(connection);
        for (Agreement doc:list){
            doc.setKindAgreement(this.getFillers().getKindAgreementByID(connection,doc.getKindAgreement().getId()));
            doc.setTypeAgreement(this.getFillers().getTypeAgreementByID(connection,doc.getTypeAgreement().getId()));
            if (doc.getContraAgent().getId() != 0) {
                doc.setContraAgent(this.getFillers().getContraAgentByID(connection, doc.getContraAgent().getId()));
            }
            if (doc.getDepartment().getId() != 0) {
                doc.setDepartment(this.getFillers().getDepartmentByID(connection,doc.getDepartment().getId()));
            }
        }
        return list;
    }
}
