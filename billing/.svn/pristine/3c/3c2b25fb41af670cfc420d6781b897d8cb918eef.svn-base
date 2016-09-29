package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CancelZaborgovanistValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdatCancelZaborgovanistQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdateCancelZaborgovanistOperation extends AbstractModifyOperation<CancelZaborgovanist> {
    public UpdateCancelZaborgovanistOperation() {
        super(new CancelZaborgovanistValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CancelZaborgovanist value)   {
        new UpdatCancelZaborgovanistQuery().execute(connection,value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgent());
        return 0;
    }

    @Override
    public boolean validate(Connection connection, CancelZaborgovanist value)   {
        return validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
