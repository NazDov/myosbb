package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.ControllerReferenceValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateControllerReferenceQuery;

import java.sql.Connection;

/**
 * Created by ykhav on 13.05.15.
 */
public class CreateControlerreferenseOperation extends AbstractModifyOperation<ControllersReferense> {

    public CreateControlerreferenseOperation() {
        super(new ControllerReferenceValidator());
    }

    @Override
    protected long _doOperation(Connection connection, ControllersReferense value)   {
        return new CreateControllerReferenceQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection,ControllersReferense value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}



