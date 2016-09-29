package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCorrectionOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputFactorQuery;

import java.sql.Connection;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateCorrectionOfCounterOperation extends AbstractModifyOperation<CorrectionOfCounter> {

    public CreateCorrectionOfCounterOperation() {
        super(new CorrectionOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CorrectionOfCounter value)   {
        Long id = new CreateCorrectionOfCounterQuery().execute(connection,value);
        value.getInputFactor().setCorrectionDocumentID(id);
        value.getInputFactor().setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        value.getInputFactor().setFactorTypeID(3L);
        new CreateInputFactorQuery().execute(connection,value.getInputFactor());
       // new RecalculateSaldoByDepartment().recalculateSaldoOnDepartment(connection);
        return 0;
    }

    @Override
    public boolean validate(Connection connection,CorrectionOfCounter value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
