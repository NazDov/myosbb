package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.OwnerBankAccount;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.OwnerBankAccountCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteUploadedPaymentsFromParusNotLoadedQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteUploadedPaymentsFromParusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchOwnerBankAccountQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 10/5/2015.
 */
public class DeleteUploadedPaymentsFromParusNotLoaded extends AbstractModifyOperation<Void> {
    private List<PaymentFromParus> condionToDelete;


    public DeleteUploadedPaymentsFromParusNotLoaded(List<PaymentFromParus> condionToDelete) {
        super(Validator.NoValidator());
        this.condionToDelete = condionToDelete;
    }

    @Override
    protected long _doOperation(Connection connection, Void value) {
        for (PaymentFromParus p:condionToDelete) {
            OwnerBankAccountCondition ownerBankCondition = new OwnerBankAccountCondition();
            ownerBankCondition.setOwnerBankAccount(p.getOwnerBankAccount());
            OwnerBankAccount ownerBankAccount = new SearchOwnerBankAccountQuery(ownerBankCondition).execute(connection).get(0);
            p.setOwnerBankAccountID(ownerBankAccount.getId());
            new DeleteUploadedPaymentsFromParusNotLoadedQuery().execute(connection,p);
        }
        return 0;

    }

    @Override
    public boolean validate(Connection connection, Void value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
