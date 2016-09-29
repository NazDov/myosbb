package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.paymentdepartment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.PaymentDepartmentValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdatePaymentDepartmentQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdatePaymentDepartmentOperation extends AbstractModifyOperation<PaymentDepartment> {
    public UpdatePaymentDepartmentOperation() {
        super(new PaymentDepartmentValidator());
    }

    @Override
    protected long _doOperation(Connection connection, PaymentDepartment value)   {
        new UpdatePaymentDepartmentQuery().execute(connection,value);
        new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreement(),value.getDepartment(),connection);
        return 0;
    }

    @Override
    public boolean validate(Connection connection, PaymentDepartment value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
