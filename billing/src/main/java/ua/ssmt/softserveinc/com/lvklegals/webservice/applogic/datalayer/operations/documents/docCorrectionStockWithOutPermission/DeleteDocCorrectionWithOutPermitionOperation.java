package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCorrectionStockWithOutPermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CommisionStockWithOutPermissionValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCorrectionStockWithOutPermitionQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeleteDocCorrectionWithOutPermitionOperation extends AbstractModifyOperation<DocCorrectionStockWithOutPermission> {
    public DeleteDocCorrectionWithOutPermitionOperation() {
        super(new CommisionStockWithOutPermissionValidator());
    }

    @Override
    protected long _doOperation(Connection connection, DocCorrectionStockWithOutPermission value)   {
        new DeleteCorrectionStockWithOutPermitionQuery().execute(connection,value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgent());
        return 0;
    }

    @Override
    public boolean validate(Connection connection, DocCorrectionStockWithOutPermission value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
