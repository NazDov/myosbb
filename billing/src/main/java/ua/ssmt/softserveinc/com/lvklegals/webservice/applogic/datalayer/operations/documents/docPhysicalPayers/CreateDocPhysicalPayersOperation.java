package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.PsycalPayerValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreatePsycalPayersQuery;

import java.sql.Connection;

/**
 * Created by vstoian on 04.02.2015.
 */
public class CreateDocPhysicalPayersOperation extends AbstractModifyOperation<PhysicalPayer> {
    public CreateDocPhysicalPayersOperation() {
        super(new PsycalPayerValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PhysicalPayer value)   {
        new CreatePsycalPayersQuery().execute(connection,value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgent());
        return 0;
    }

    @Override
    public boolean validate(Connection connection, PhysicalPayer value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
