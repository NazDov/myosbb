package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correction;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment.DeleteListPaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCorrectionQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeletePaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentClearQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentQuery;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vstoian on 27.01.2015.
 */
public class DeleteCorrectionOperation extends AbstractModifyOperation<Correction> {
    public DeleteCorrectionOperation() {
        super(new CorrectionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Correction value)   {
        new DeleteCorrectionQuery().execute(connection,value);
        new DeleteListPaymentQuery().execute(connection,value.getPayments());
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgentOne());
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgentTwo());
        if (value.getAgreementDepOne() != null && value.getAgreementDepOne().getId() != null)
            new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDepOne(),value.getDepartmentOne(),connection);
        if (value.getAgreementDepTwo() != null && value.getAgreementDepTwo().getId() != null)
            new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getAgreementDepTwo(),value.getDepartmentTwo(),connection);


        return 0;
    }

    @Override
    public boolean validate(Connection connection, Correction value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
