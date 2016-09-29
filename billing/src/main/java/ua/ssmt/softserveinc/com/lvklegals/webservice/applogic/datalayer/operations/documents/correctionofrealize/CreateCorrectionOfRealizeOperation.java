package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionOfRealizeValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCorrectionOfRealizeQuery;

import java.sql.Connection;

/**
 * Created by vostap on 22.10.2014.
 */
public class CreateCorrectionOfRealizeOperation extends AbstractModifyOperation<CorrectionOfRealize> {
    public CreateCorrectionOfRealizeOperation() {
        super(new CorrectionOfRealizeValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CorrectionOfRealize value)   {
        new CreateCorrectionOfRealizeQuery().execute(connection,value);
        new RecalculateSaldoByContraAgent().recalculateSaldo(connection,value.getContraAgent());
        new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(value.getDepAgreement(),value.getDepartment(),connection);
        return 0;
    }

    @Override
    public boolean validate(Connection connection, CorrectionOfRealize value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
