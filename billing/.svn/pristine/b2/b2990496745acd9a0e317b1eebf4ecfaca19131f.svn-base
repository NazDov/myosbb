package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.PaymentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeletePaymentQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeletePaymentOperation extends AbstractModifyOperation<Payment> {
    public DeletePaymentOperation() {
        super(new PaymentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Payment value)   {
        new DeletePaymentQuery().execute(connection,value);
        recalculateSaldo(connection,value);
        return 0;
    }

    private void recalculateSaldo(Connection connection, Payment value) {
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection, value.getContraAgent());
    }

    @Override
    public boolean validate(Connection connection, Payment value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
