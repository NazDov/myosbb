package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.UnregisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCounterStatusHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateCounterStatusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateUnregisterCounterQuery;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateUnregisterOfCounterOperation extends AbstractModifyOperation<UnregisterOfCounter> {

    public UpdateUnregisterOfCounterOperation() {
        super(new UnregisterOfCounterValidator());
    }

    private InputFactor getLastInputFactor(Connection connection, UnregisterOfCounter value)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
//        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        List<InputFactor> list = new SearchInputFactorsQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else return list.get(0);
    }

    @Override
    protected long _doOperation(Connection connection, UnregisterOfCounter value)   {
        InputFactor factor = new InputFactor();
        factor.setVolume(0);
        factor.setWiringID(value.getDepartmentInput().getId());
        factor.setEndFactor(value.getFactorByOnUnregister());
        factor.setBeginFactor(value.getFactorByOnUnregister());
        factor.setDocumentID(null);
        factor.setUnregisterDocumentID(value.getId());
        factor.setCounter(value.getCounter());
        InputFactor lastFactor = getLastInputFactor(connection,value);
        factor.setFactorOnBeginMonth(lastFactor.getFactorOnBeginMonth());
        factor.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        factor.setFactorTypeID(2L);
        factor.setOnDate(value.getDateActToUnPlomb());
        factor.setDoctype(-1);
        checkIfExistNewestFactor(connection,factor);
        return new UpdateUnregisterCounterQuery().execute(connection,value);
    }

    private void checkIfExistNewestFactor(Connection connection, InputFactor value) {
        InputFactor inputFactor = getLastFactor(connection, value);
        if (inputFactor == null) return;
        if (value.getOnDate().getTime() <= inputFactor.getOnDate().getTime())
            throw new ValidateException(((UnregisterOfCounterValidator)validator).getMessages().get("CANNOT_INPUT_FACTOR_AFTER_THIS_FACTOR_EXIST_ONE_OR_MORE_FACTOR"));

    }

    private InputFactor getLastFactor(Connection connection, InputFactor value) {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
        List<InputFactor> inputFactors = new SearchInputFactorsQuery(condition).execute(connection);
        if (inputFactors.isEmpty()) return null;
        return inputFactors.get(0);
    }

    @Override
    public boolean validate(Connection connection,UnregisterOfCounter value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
