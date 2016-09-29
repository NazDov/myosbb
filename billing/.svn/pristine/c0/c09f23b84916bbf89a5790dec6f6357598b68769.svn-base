package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.commission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CommissionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCommissionQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class CreateCommissionOperation extends AbstractModifyOperation<Commission> {
    public CreateCommissionOperation() {
        super(new CommissionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Commission value)   {
        new CreateCommissionQuery().execute(connection,value);
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
