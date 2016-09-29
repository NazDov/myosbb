package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.volumeconsumption;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocLkpFromDBFTransfer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteDocLKPQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 6/1/2015.
 */
public class DeleteDocLKPOperation extends AbstractModifyOperation<DocLkpFromDBFTransfer> {

    public DeleteDocLKPOperation() {
        super(Validator.NoValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DocLkpFromDBFTransfer value) {
        AgreementCondition condition = new AgreementCondition();
        condition.setAgreementNumber(value.getUGODA());
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) return 0;
        return  new DeleteDocLKPQuery().execute(connection,agreements.get(0).getContraAgent());
    }

    @Override
    public boolean validate(Connection connection, DocLkpFromDBFTransfer value) {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
