package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchContraAgentWithAgreementQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 03.03.2015.
 */
public  class SearchContraAgentWithAgreementOperation extends AbstractSelectOperation<ContraAgent> {

    private ContraAgentCondition condition;

    public SearchContraAgentWithAgreementOperation(ContraAgentCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ContraAgent> doOperation(Connection connection)   {
        List<ContraAgent> mocks = new SearchContraAgentWithAgreementQuery(condition).execute(connection);
        List<ContraAgent> contraAgents = new ArrayList<>();
        for (ContraAgent c:mocks){
            c = this.getFillers().getContraAgentByID(connection,c.getId());
            contraAgents.add(c);
        }
        return contraAgents;
    }
}
