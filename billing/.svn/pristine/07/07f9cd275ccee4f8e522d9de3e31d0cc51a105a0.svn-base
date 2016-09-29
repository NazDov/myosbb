package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.commission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CommissionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCommissionQuery;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class DeleteCommissionOperation extends AbstractModifyOperation<Commission> {
    public DeleteCommissionOperation() {
        super(new CommissionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Commission value)   {
        new DeleteCommissionQuery().execute(connection,value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgent());
        new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDep(),value.getDepartment(),connection);
        return 0;
    }

    @Override
    public boolean validate(Connection connection, Commission value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
