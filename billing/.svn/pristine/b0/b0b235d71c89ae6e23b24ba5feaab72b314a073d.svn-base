package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ContraAgentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteContraAgentPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteContraAgentQuery;

import java.sql.Connection;

/**
 * Created by vostap on 25.08.2014.
 */
public class DeleteContraAgentOperation extends AbstractModifyOperation<ContraAgent> {

    public DeleteContraAgentOperation() {
        super(new ContraAgentValidator());
    }

    @Override
    public long _doOperation(Connection connection, ContraAgent value)   {
        new DeleteContraAgentPropertyQuery().execute(connection,value);
        new DeleteContraAgentQuery().execute(connection,value);
        return value.getId();
    }

    @Override
    public boolean validate(Connection connection,ContraAgent value)   {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

}
