package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CSCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CSCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCSCounterStatusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCorrectionOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCurrentCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 29.09.2014.
 */
public class InputFactorValidator extends AbstractValidator<InputFactor> {
    @Override
    public boolean validateToInsert(Connection connection,InputFactor value)   {
        checkIfUnregister(connection,value);
        CorrectionOfCounter correctionOfCounter = null;
        correctionOfCounter = getLastCorrectionOfCounter(connection,value);
        if (correctionOfCounter != null) {
            InputFactor correctionInputFactor = getCorrectionInputFactor(connection, correctionOfCounter);
            if (value.getEndFactor() >= (correctionInputFactor.getFactorOnBeginMonth() + (correctionInputFactor.getEndFactor() - correctionInputFactor.getFactorOnBeginMonth())))
                return true;
            else
                throw new ValidateException(this.messages.get("ERROR_END_FACTOR_LESS_BEGIN_FACTOR"));
        } else{
            if (value.getEndFactor() < value.getFactorOnBeginMonth())  throw new ValidateException(this.messages.get("ERROR_END_FACTOR_LESS_BEGIN_FACTOR"));
        }
        checkIfExistNewestFactor(connection,value);

        return true;

    }

    private void checkIfUnregister(Connection connection, InputFactor value) {
        CSCounterStatusCondition condition = new CSCounterStatusCondition();
        condition.setCounterID(value.getCounter().getId());
        List<CSCounterStatus> counterStatuses = new SearchCurrentCounterStatus(condition).execute(connection);
        if (counterStatuses.isEmpty())
            throw new ValidateException(" Not found status for counter = "+value.getCounter().getId());
        CSCounterStatus counterStatus = counterStatuses.get(0);
        Long status =  counterStatus.getCounterStatusID();
        if (status != 2)
            throw new ValidateException("Counter not registered in "+value.getCounter().getId());
    }

    private void checkIfExistNewestFactor(Connection connection, InputFactor value) {
        InputFactor inputFactor = getLastFactor(connection,value);
        if (inputFactor == null) return;
        if (value.getOnDate().getTime()<= inputFactor.getOnDate().getTime())
            throw new ValidateException(messages.get("CANNOT_INPUT_FACTOR_AFTER_THIS_FACTOR_EXIST_ONE_OR_MORE_FACTOR"));
    }

    private InputFactor getLastFactor(Connection connection, InputFactor value) {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
        List<InputFactor> inputFactors = new SearchInputFactorsQuery(condition).execute(connection);
        if (inputFactors.isEmpty()) return null;
        return inputFactors.get(0);
    }

    private InputFactor getCorrectionInputFactor(Connection connection, CorrectionOfCounter correctionOfCounter)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCorrectionCounterID(correctionOfCounter.getId());
        try {
            condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        } catch (StorageException e) {
           throw new ValidateException(e);
        }
        try {
            return new SearchInputFactorsQuery(condition).execute(connection).get(0);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }

    }

    private CorrectionOfCounter getLastCorrectionOfCounter(Connection connection, InputFactor value)   {
        CorrectionOfCounterCondition condition = new CorrectionOfCounterCondition();
        condition.setCounterID(value.getCounter().getId());
        try {
            condition.setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        List<CorrectionOfCounter> list = null;
        try {
            list = new SearchCorrectionOfCounterQuery(condition).execute(connection);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        if (list.isEmpty()) return null;
        else return list.get(0);
    }

    @Override
    public boolean validateToDelete(Connection connection,InputFactor value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection,InputFactor value)   {
        return false;
    }

}