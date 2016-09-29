package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateMainSaldoQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo.SearchAllContraAgentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 12/3/2015.
 */
public class RecalculateSaldoOperation extends AbstractModifyOperation<Void> {
    public RecalculateSaldoOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Void value) {
        List<ContraAgent> contraAgents = new SearchAllContraAgentQuery(null).execute(connection);
        RecalculateSaldoByContraAgent recalculateSaldoByContraAgent = new RecalculateSaldoByContraAgent();
        long cout = 1;
        for (ContraAgent contraAgent:contraAgents){
            System.out.println("recalculate contraagent = "+contraAgent.getId()+"  "+cout+"/"+contraAgents.size());
            recalculateSaldoByContraAgent.recalculateSaldo(connection,contraAgent);
            cout++;
        }
        return 0;
    }

    @Override
    public boolean validate(Connection connection, Void value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
