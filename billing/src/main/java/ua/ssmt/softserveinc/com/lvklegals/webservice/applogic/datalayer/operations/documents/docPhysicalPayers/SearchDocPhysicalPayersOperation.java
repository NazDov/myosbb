package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PhysicalPayersCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPhysicalPayersQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 20.11.2015.
 */
public class SearchDocPhysicalPayersOperation extends AbstractSelectOperation<PhysicalPayer> {
    private PhysicalPayersCondition condition;

    public SearchDocPhysicalPayersOperation(PhysicalPayersCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<PhysicalPayer> doOperation(Connection connection)   {
        List<PhysicalPayer> list = new SearchPhysicalPayersQuery(condition).execute(connection);
        for (PhysicalPayer p:list){
            p.setContraAgent(this.getFillers().getContraAgentByID(connection,p.getContraAgent().getId()));
            p.setAgreement(this.getFillers().getAgreementByID(connection,p.getAgreement().getId()));


        }
        return list;
    }
}
