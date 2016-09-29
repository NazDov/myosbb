package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionOfCounterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class CorrectionOfCounterValidator extends AbstractValidator<CorrectionOfCounter> {
    @Override
    public boolean validateToInsert(Connection connection,CorrectionOfCounter value)   {
        this.checkContraAgent(value.getContraAgent());
        this.checkCounter(value.getCounter());
        this.checkInput(value.getInput());
        this.checkDepartment(value.getDepartment());
        this.checkInputFactor(value.getInputFactor());
        checkLogic(connection, value);
        return true;
    }

    private boolean checkLogic(Connection connection, CorrectionOfCounter value)   {
        CorrectionOfCounterCondition condition = new CorrectionOfCounterCondition();
        condition.setCounterID(value.getCounter().getId());
        try {
            condition.setPeriod((new GetCurrentPeriodQuery(null).execute(connection).get(0)));
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        List<CorrectionOfCounter> list = null;
        try {
            list = new SearchCorrectionOfCounterQuery(condition).execute(connection);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        if (list.isEmpty()) return true;
        else throw  new ValidateException(messages.get("ERROR_CANNOT_CREATE_MORE_THAN_ONE_CORRECTION_IN_ONE_PERIOD"));
    }

    @Override
    public boolean validateToDelete(Connection connection,CorrectionOfCounter value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,CorrectionOfCounter value)   {
        return false;
    }
}
