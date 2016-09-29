package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateContraAgentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateContraAgentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ContraAgentValidator;

import java.sql.*;

/**
 * Created by vostap on 23.08.2014.
 */
public class CreateContraAgentOperation extends AbstractModifyOperation<ContraAgent> {

    public CreateContraAgentOperation() {
        super(new ContraAgentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, ContraAgent contraAgent)   {
        long contraAgentID = new CreateContraAgentQuery().execute(connection,contraAgent);
        contraAgent.setId(contraAgentID);
        new CreateContraAgentPropertyQuery().execute(connection,contraAgent);
        return contraAgentID;
    }

    @Override
    public boolean validate(Connection connection,ContraAgent value)   {
        return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

}
