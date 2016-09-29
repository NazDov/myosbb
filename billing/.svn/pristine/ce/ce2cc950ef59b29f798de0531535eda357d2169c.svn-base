package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCorrectionStockWithOutPermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DocCommisionStockWithOutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCommisonStockWithOutPermissionQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 20.11.2015.
 */
public class SearchDocCorrectionStockWithOutPermissionOperation extends AbstractSelectOperation<DocCorrectionStockWithOutPermission> {
    private DocCommisionStockWithOutPermissionCondition condition;

    public SearchDocCorrectionStockWithOutPermissionOperation(DocCommisionStockWithOutPermissionCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<DocCorrectionStockWithOutPermission> doOperation(Connection connection)   {
        List<DocCorrectionStockWithOutPermission> list = new SearchCommisonStockWithOutPermissionQuery(condition).execute(connection);
        for (DocCorrectionStockWithOutPermission p:list){
            p.setContraAgent(this.getFillers().getContraAgentByID(connection,p.getContraAgent().getId()));
            p.setAgreement(this.getFillers().getAgreementByID(connection,p.getAgreement().getId()));


        }
        return list;
    }
}
