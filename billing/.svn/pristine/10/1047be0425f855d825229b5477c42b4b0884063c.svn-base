package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgentProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchContraAgentQuery;

import java.sql.Connection;
import java.util.List;


/**
 * Created by vostap on 25.08.2014.
 */
public class SearchContraAgentOperation extends AbstractSelectOperation<ContraAgent> {

    private ContraAgentCondition condition;
    public SearchContraAgentOperation(ContraAgentCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ContraAgent> doOperation(Connection connection)   {
        List<ContraAgent> contraAgents = new SearchContraAgentQuery(this.condition).execute(connection);
        for (ContraAgent contraAgent:contraAgents) {
            this.fillContraAgentProperties(connection, contraAgent.getProperty());
        }
        return contraAgents;
    }

    private void fillContraAgentProperties(Connection connection, ContraAgentProperty property)   {
        property.setTypeActivity(this.getFillers().getTypeActivityByID(connection,property.getTypeActivity().getId()));
        property.setSourceWaterSupply(this.getFillers().getSourceWatterSupplyByID(connection,property.getSourceWaterSupply().getId()));
        property.setContraAgentCategory(this.getFillers().getContraAgentCategoryByID(connection,property.getContraAgentCategory().getId()));
        property.setArea(this.getFillers().getAreaByID(connection,property.getArea().getId()));
        property.setAlgorithm(this.getFillers().getAlgorithmByID(connection,property.getAlgorithm().getId()));
        if (property.getBankAccount() !=null && !property.getBankAccount().isEmpty())
        {
            String bankAccount = property.getBankAccount().substring(0,1);
            if (!bankAccount.equals("*") && property.getBank().getId() != 0) {
                property.setBank(this.getFillers().getBankByID(connection,property.getBank().getId()));
            }
        } else {
            if (property.getBank().getId() != 0)
                property.setBank(this.getFillers().getBankByID(connection,property.getBank().getId()));
        }
        property.setGroupWatterSupply(this.getFillers().getGroupWatterSupplyByID(connection,property.getGroupWatterSupply().getId()));
    }


}
