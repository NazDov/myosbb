package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.PsycalPayerValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeletePsycalPayerQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeletePsycalPayersOperation extends AbstractModifyOperation<PhysicalPayer> {
    public DeletePsycalPayersOperation() {
        super(new PsycalPayerValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PhysicalPayer value)   {
        new DeletePsycalPayerQuery().execute(connection,value);
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
