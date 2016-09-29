package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.RegisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.UnregisterOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputFactorCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteRegisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteUnregisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCounterToInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputFactorsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchRegisterOfCounterQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchUnregisterCounterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 27.04.2016.
 */
public class DeleteInputFactorOperaition extends AbstractModifyOperation<InputFactor> {
    public DeleteInputFactorOperaition() {
        super(new AbstractValidator<InputFactor>() {
            @Override
            public boolean validateToInsert(Connection connection, InputFactor value) {
                return false;
            }

            @Override
            public boolean validateToDelete(Connection connection, InputFactor value) {
                 checkIfExistNewestFactor(connection,value);
                return true;
            }

            @Override
            public boolean validateToUpdate(Connection connection, InputFactor value) {
                return false;
            }

            private void checkIfExistNewestFactor(Connection connection, InputFactor value) {
                InputFactor inputFactor = getLastFactor(connection,value);
                if (inputFactor == null) return;
                //the last factor and remove factor is the same
                if (inputFactor.getId().equals(value.getId())) return;
                if (value.getOnDate().getTime()<= inputFactor.getOnDate().getTime())
                    throw new ValidateException(messages.get("CANNOT_REMOVE_FACTOR_AFTER_THIS_FACTOR_EXIST_ONE_OR_MORE_FACTOR"));
            }

            private InputFactor getLastFactor(Connection connection, InputFactor value) {
                InputFactorCondition condition = new InputFactorCondition();
                condition.setCounterID(value.getCounter().getId());
                List<InputFactor> inputFactors = new SearchInputFactorsQuery(condition).execute(connection);
                if (inputFactors.isEmpty()) return null;
                return inputFactors.get(0);
            }
        });
    }

    @Override
    protected long _doOperation(Connection connection, InputFactor value) {
        InputFactorCondition condition  = new InputFactorCondition();
        condition.setId(value.getId());
        List<InputFactor> list = new SearchInputFactorsQuery(condition).execute(connection);
        InputFactor factor = list.get(0);
        if (factor.getDocumentID() != null && !factor.getFactorTypeID().equals(3L)) {
            RegisterOfCounterCondition registerOfCounterCondition = new RegisterOfCounterCondition();
            condition.setId(factor.getId());
            List<RegisterOfCounter> document = new SearchRegisterOfCounterQuery(registerOfCounterCondition).execute(connection);
            RegisterOfCounter d = document.get(0);
            new RegisterOfCounterValidator().validateToDelete(connection,d);
            new DeleteInputFactorQuery().execute(connection,factor);
            new DeleteRegisterOfCounterQuery().execute(connection,d);
            return 0;
        }
        if (factor.getUnregisterDocumentID() != null && !factor.getFactorTypeID().equals(3L)){
            UnregisterOfCounterCondition unregisterOfCounterCondition = new UnregisterOfCounterCondition();
            unregisterOfCounterCondition.setId(factor.getUnregisterDocumentID());
            List<UnregisterOfCounter> unregisterOfCounters = new SearchUnregisterCounterQuery(unregisterOfCounterCondition).execute(connection);
            UnregisterOfCounter unregisterOfCounter = unregisterOfCounters.get(0);
            new DeleteInputFactorQuery().execute(connection,value);
            new UnregisterOfCounterValidator().validateToDelete(connection,unregisterOfCounter);
            new DeleteUnregisterOfCounterQuery().execute(connection,unregisterOfCounter);
            return 0;
        }

        new DeleteInputFactorQuery().execute(connection,value);
        return 0;

    }

    @Override
    public boolean validate(Connection connection, InputFactor value) {
        return validator.validateToDelete(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
