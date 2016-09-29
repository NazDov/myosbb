package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AgreementValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteAgreementPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo.GetCountSaldoinAnotherPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo.GetCountSaldoinOnDepartmentAnotherPeriodQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeleteAgreementOperation extends AbstractModifyOperation<Agreement> {
    public DeleteAgreementOperation() {
        super(new AgreementValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Agreement value)   {
       new DeleteAgreementPropertyQuery().execute(connection,value);
       new DeleteAgreementQuery().execute(connection,value);
       return value.getId();
    }

    @Override
    public boolean validate(Connection connection, Agreement value)   {
        this.checkSaldoOnDifferentPeriod(connection,value);
        return true;
    }

    private void checkSaldoOnDifferentPeriod(Connection connection, Agreement value) {
        long cntSaldo = new GetCountSaldoinAnotherPeriodQuery(null).execute(connection).get(0);
        long cntSaldoOnDepatment = new GetCountSaldoinOnDepartmentAnotherPeriodQuery(null).execute(connection).get(0);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
