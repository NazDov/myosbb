package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchContrAgentByAgreementIDQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 10.10.15.
 */
public class SearchContrAgentByAgreementOperation extends AbstractSelectOperation<ContraAgent> {
    private AgreementCondition condition;

    public SearchContrAgentByAgreementOperation(AgreementCondition agreementCondition) {
        this.condition = agreementCondition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ContraAgent> doOperation(Connection connection)   {
        List<ContraAgent> contraAgents = new SearchContrAgentByAgreementIDQuery(condition).execute(connection);
        for (ContraAgent c:contraAgents){
            ContraAgent contraAgent = this.getFillers().getContraAgentByID(connection,c.getId());
            c.getProperty().setShortName(contraAgent.getProperty().getShortName());
        }
        return contraAgents;

    }
}

