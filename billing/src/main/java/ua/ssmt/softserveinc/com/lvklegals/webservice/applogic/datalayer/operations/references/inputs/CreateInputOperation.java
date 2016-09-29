package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.InputValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputQuery;

import java.sql.Connection;

/**
 * Created by vostap on 17.09.2014.
 */
public class CreateInputOperation extends AbstractModifyOperation<Input> {
    public CreateInputOperation() {
        super(new InputValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Input value)   {
        return new CreateInputQuery().execute(connection,value);
        //return this.createProperty(connection,value);
    }

    /*private long createProperty(Connection connection, Input value) {
        InputProperty prop = new InputProperty();
        prop.setNorma(0.0);
        prop.setKoefWatterSupply(0.0);
        prop.setKoefWatterOut(0.0);
        return new CreateInputPropertyQuery().execute(connection,value);
    }*/

    @Override
    public boolean validate(Connection connection,Input value)   {
        return validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
