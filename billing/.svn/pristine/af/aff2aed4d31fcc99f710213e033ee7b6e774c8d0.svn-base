package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CancelZaborgovanistValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCancelZaborgovanistQuery;

import java.sql.Connection;

/**
 * Created by vstoian on 04.02.2015.
 */
public class CreateCancelZaborgovanistOperation extends AbstractModifyOperation<CancelZaborgovanist> {
    public CreateCancelZaborgovanistOperation() {
        super(new CancelZaborgovanistValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CancelZaborgovanist value)   {
        new CreateCancelZaborgovanistQuery().execute(connection,value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgent());
        return 0;
    }

    @Override
    public boolean validate(Connection connection, CancelZaborgovanist value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
