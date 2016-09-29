package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.InputFactorValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.RegisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.UnregisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateCounterStatusHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateUnregisterCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateCounterStatusQuery;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class CreateUnregisterOfCounterOperation extends AbstractModifyOperation<UnregisterOfCounter> {
    public CreateUnregisterOfCounterOperation() {
        super(new UnregisterOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, UnregisterOfCounter value)   {
        InputFactor lastFactor = getLastInputFactor(connection,value);
        long documentID = this.createDocument(connection,value);
        value.setId(documentID);
        this.updateCounterStatus(connection,value);
        this.insertFactors(connection,value,lastFactor);
        return documentID;
    }

    private InputFactor getLastInputFactor(Connection connection, UnregisterOfCounter value)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
//        condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        List<InputFactor> list = new SearchInputFactorsQuery(condition).execute(connection);
        if (list.isEmpty()) return null;
        else return list.get(0);
    }

    private void insertFactors(Connection connection, UnregisterOfCounter value, InputFactor lastFactor)   {
        InputFactor factor = new InputFactor();
        factor.setVolume(0);
        factor.setWiringID(value.getDepartmentInput().getId());
        factor.setEndFactor(value.getFactorByOnUnregister());
        factor.setBeginFactor(value.getFactorByOnUnregister());
        factor.setDocumentID(null);
        factor.setUnregisterDocumentID(value.getId());
        factor.setCounter(value.getCounter());
        factor.setFactorOnBeginMonth(lastFactor.getFactorOnBeginMonth());
        factor.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        factor.setFactorTypeID(2L);
        factor.setOnDate(value.getDateActToUnPlomb());
        factor.setDoctype(-1);
        checkIfExistNewestFactor(connection,factor);
        new CreateInputFactorQuery().execute(connection,factor);
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

    private void updateCounterStatus(Connection connection, UnregisterOfCounter value)   {
        SysCounterStatus sysCounterStatus = new SysCounterStatus();
        sysCounterStatus.setCounterID(value.getCounter().getId());
        sysCounterStatus.setDocRegisterCounterID(null);
        sysCounterStatus.setDocUnregisterCounterID(value.getId());
        sysCounterStatus.setStatusDate(new Date());
        sysCounterStatus.setStatusTypeID(3L);
        new UpdateCounterStatusQuery().execute(connection, sysCounterStatus);
        new CreateCounterStatusHistoryQuery().execute(connection,sysCounterStatus);
    }

    private long createDocument(Connection connection, UnregisterOfCounter value)   {
        fillDepartmentInput(connection,value);
        Long documentID = new CreateUnregisterCounterQuery().execute(connection,value);
        return documentID;
    }

    private void fillDepartmentInput(Connection connection, UnregisterOfCounter value) {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setDepartmentID(value.getDepartment().getId());
        condition.setInputID((value.getInput().getId()));
        DepartmentInput di = new SearchDepartmentInputQuery(condition).execute(connection).get(0);
        value.setDepartmentInput(di);


    }

    @Override
    public boolean validate(Connection connection,UnregisterOfCounter value)   {
        return this.validator.validateToInsert(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
