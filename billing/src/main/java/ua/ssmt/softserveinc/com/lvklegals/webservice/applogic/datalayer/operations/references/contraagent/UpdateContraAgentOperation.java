package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SelectContraAgentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateContraAgentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateContraAgentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

//import ContraAgentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateContraAgentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ContraAgentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 25.08.2014.
 */
public class UpdateContraAgentOperation extends AbstractModifyOperation<ContraAgent> {

    public UpdateContraAgentOperation() {
        super(new ContraAgentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, ContraAgent contraAgent )   {
        this.updateContraAgent(connection,contraAgent);
        if (this.checkExistContraAgentPropertyInCurrentPeriod(connection,contraAgent))
            this.updateContraAgentProperty(connection,contraAgent);
        else
            this.createContraAgentPropertyInCurrentPeriod(connection,contraAgent);
        return contraAgent.getId();
    }

    @Override
    public boolean validate(Connection connection,ContraAgent value)   {
        Validator<ContraAgent> validator = new ContraAgentValidator();
        return validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    private void updateContraAgent(Connection connection,ContraAgent contraAgent)   {
        new UpdateContraAgentQuery().execute(connection,contraAgent);
    }

    private boolean checkExistContraAgentPropertyInCurrentPeriod(Connection connection,ContraAgent contraAgent)   {
        ServiceContraAgentCondition condition = new ServiceContraAgentCondition();
        condition.setContraAgentID(contraAgent.getId());
        List<ContraAgent> list  = new SelectContraAgentPropertyQuery(condition).execute(connection);
        if (list.isEmpty() == true) return false;
        else
            return true;
    }

    private void updateContraAgentProperty(Connection connection,ContraAgent contraAgent)   {
        new UpdateContraAgentPropertyQuery().execute(connection,contraAgent);
    }

    private void createContraAgentPropertyInCurrentPeriod(Connection connection,ContraAgent contraAgent)   {
        new CreateContraAgentPropertyQuery().execute(connection,contraAgent);
    }

}
