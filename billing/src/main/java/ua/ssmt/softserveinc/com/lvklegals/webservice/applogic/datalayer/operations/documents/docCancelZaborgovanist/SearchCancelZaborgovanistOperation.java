package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CancelZaborgovanistCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCancelZaborgovanistQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 20.11.2015.
 */
public class SearchCancelZaborgovanistOperation extends AbstractSelectOperation<CancelZaborgovanist> {
    private CancelZaborgovanistCondition condition;

    public SearchCancelZaborgovanistOperation(CancelZaborgovanistCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<CancelZaborgovanist> doOperation(Connection connection)   {
        List<CancelZaborgovanist> list = new SearchCancelZaborgovanistQuery(condition).execute(connection);
        for (CancelZaborgovanist p:list){
            p.setContraAgent(this.getFillers().getContraAgentByID(connection,p.getContraAgent().getId()));
            p.setAgreement(this.getFillers().getAgreementByID(connection,p.getAgreement().getId()));
            p.setService(this.getFillers().getServicePaymentByID(connection,p.getService().getId()));


        }
        return list;
    }
}
