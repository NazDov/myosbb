package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.InputFactorValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.RegisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateRegisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCounterStatusHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateCounterStatusQuery;

import java.sql.Connection;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateRegisterOfCounterOperation extends AbstractModifyOperation<RegisterOfCounter> {

    public CreateRegisterOfCounterOperation() {
        super(new RegisterOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, RegisterOfCounter value) {
        long documentID = this.createDocument(connection, value);
        value.setId(documentID);
        this.updateCounterStatus(connection, value);
        this.insertFactors(connection, value);
        this.chancheInputStatus(connection, value);
        return documentID;
    }

    private void chancheInputStatus(Connection connection, RegisterOfCounter value) {

    }

    @Override
    public boolean validate(Connection connection, RegisterOfCounter value) {
        this.validateDateInPeriod(connection, value);
        return this.validator.validateToInsert(connection, value);

    }

    private void validateDateInPeriod(Connection connection, RegisterOfCounter value) {
        Date period = null;
        try {
            period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        Date lastDayMonthInPeriod = this.getLastDayInPeriod(period);
        if (value.getOnDate().getTime() > lastDayMonthInPeriod.getTime())
            throw new ValidateException("DATE NOT IN PERIOD");
        if (value.getOnDate().getTime() < period.getTime())
            throw new ValidateException("DATE NOT IN PERIOD");
    }

    private Date getLastDayInPeriod(Date period) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(period);

        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        calendar.add(Calendar.DATE, -1);

        Date lastDayOfMonth = calendar.getTime();
        return lastDayOfMonth;
    }


    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    private long createDocument(Connection connection, RegisterOfCounter value) {
        return new CreateRegisterOfCounterQuery().execute(connection, value);
    }

    private void updateCounterStatus(Connection connection, RegisterOfCounter value) {
        SysCounterStatus sysCounterStatus = new SysCounterStatus();
        sysCounterStatus.setCounterID(value.getCounter().getId());
        sysCounterStatus.setDocRegisterCounterID(value.getId());
        sysCounterStatus.setDocUnregisterCounterID(null);
        sysCounterStatus.setStatusDate(new Date());
        sysCounterStatus.setStatusTypeID(2L);
        new UpdateCounterStatusQuery().execute(connection, sysCounterStatus);
        new CreateCounterStatusHistoryQuery().execute(connection, sysCounterStatus);
    }

    private void insertFactors(Connection connection, RegisterOfCounter value) {
        InputFactor f = new InputFactor();
        f.getCounter().setId(value.getCounter().getId());
        f.setBeginFactor(value.getBeginFactor());
        f.setEndFactor(value.getBeginFactor());
        f.setVolume(f.getEndFactor() - f.getBeginFactor());
        f.setDocumentID(value.getId());
        f.setWiringID(value.getRegInfDepartmentInputsID());
        f.setFactorOnBeginMonth(value.getBeginFactor());
        f.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        f.setFactorTypeID(1L);
        f.setOnDate(value.getOnDate());
        f.setDoctype(-1);
        checkIfExistNewestFactor(connection, f);
        new CreateInputFactorQuery().execute(connection, f);
    }

    private void checkIfExistNewestFactor(Connection connection, InputFactor value) {
        InputFactor inputFactor = getLastFactor(connection, value);
        if (inputFactor == null) return;
        if (value.getOnDate().getTime() <= inputFactor.getOnDate().getTime())
            throw new ValidateException(((RegisterOfCounterValidator) validator).getMessages().get("CANNOT_INPUT_FACTOR_AFTER_THIS_FACTOR_EXIST_ONE_OR_MORE_FACTOR"));

    }

    private InputFactor getLastFactor(Connection connection, InputFactor value) {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
        List<InputFactor> inputFactors = new SearchInputFactorsQuery(condition).execute(connection);
        if (inputFactors.isEmpty()) return null;
        return inputFactors.get(0);
    }
}

