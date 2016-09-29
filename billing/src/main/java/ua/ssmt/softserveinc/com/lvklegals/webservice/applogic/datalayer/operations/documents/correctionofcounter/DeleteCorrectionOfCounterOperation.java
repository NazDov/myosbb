package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteCorrectionOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class DeleteCorrectionOfCounterOperation extends AbstractModifyOperation<CorrectionOfCounter> {
    public DeleteCorrectionOfCounterOperation() {
        super(new CorrectionOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CorrectionOfCounter value)   {
        List<InputFactor> factors = getFactorFromDataBase(connection,value);
        for (InputFactor factor:factors) {
            deleteFactor(connection, factor);
        }
        deleteDocument(connection,value);
        return 0;
    }

    private void deleteDocument(Connection connection, CorrectionOfCounter value)   {
        new DeleteCorrectionOfCounterQuery().execute(connection,value);
    }

    private void deleteFactor(Connection connection, InputFactor factor)   {
        new DeleteInputFactorQuery().execute(connection,factor);
    }

    private List<InputFactor> getFactorFromDataBase(Connection connection, CorrectionOfCounter value)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCorrectionCounterID(value.getId());
        return new SearchInputFactorsQuery(condition).execute(connection);

    }

    @Override
    public boolean validate(Connection connection,CorrectionOfCounter value)   {
        return true;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
