package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.query.GetLastInputFactorQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class RegisterOfCounterValidator extends AbstractValidator<RegisterOfCounter> {
    @Override
    public boolean validateToInsert(Connection connection,RegisterOfCounter value)   {
        SysCounterStatusCondition condition = new SysCounterStatusCondition();
        condition.setCounterID(value.getCounter().getId());
        SysCounterStatus status = null;
        try {
            List<SysCounterStatus> list =  new GetCurrentCounterStatusQuery(condition).execute(connection);
            status = list.get(0);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        if (status.getStatusTypeID() == 2) throw new ValidateException(messages.get("ERROR_CANNOT_REGISTER_CREATED_COUNTER_ALREADY_REGISTER"));
        this.validInput(connection,value);
        this.validIsRegistered(connection, value);
        return true;
    }

    private void validIsRegistered(Connection connection,RegisterOfCounter value){
        RegisterOfCounterCondition registerOfCounterCondition = new RegisterOfCounterCondition();
        registerOfCounterCondition.setDepartmentInputID(value.getRegInfDepartmentInputsID());
        List<RegisterOfCounter> registerOfCounters = new SearchRegisterOfCounterQuery(registerOfCounterCondition).execute(connection);
        if (registerOfCounters.isEmpty()) return;
        RegisterOfCounter registerOfCounter = registerOfCounters.get(0);
        DepartmentInputCondition departmentInputCondition = new DepartmentInputCondition();
        departmentInputCondition.setId(value.getRegInfDepartmentInputsID());
        List<DepartmentInput> departmentInputs =  new SearchDepartmentInputQuery(departmentInputCondition).execute(connection);
        DepartmentInput departmentInput = departmentInputs.get(0);
        UnregisterOfCounterCondition unregisterOfCounterCondition = new UnregisterOfCounterCondition();
        unregisterOfCounterCondition.setDepartmentID(departmentInput.getDepartment().getId());
        unregisterOfCounterCondition.setInputID(departmentInput.getInput().getId());
        List<UnregisterOfCounter> unregisterOfCounters = new SearchUnregisterCounterQuery(unregisterOfCounterCondition).execute(connection);
        if (unregisterOfCounters.isEmpty()) throw new ValidateException(messages.get("ERROR_CANNOT_REGISTER_CREATED_COUNTER_ALREADY_REGISTER"));
        UnregisterOfCounter unregisterOfCounter = unregisterOfCounters.get(0);
        if (unregisterOfCounter.getDateActToUnPlomb().getTime()<=registerOfCounter.getOnDate().getTime())
            throw new ValidateException(messages.get("ERROR_CANNOT_REGISTER_CREATED_COUNTER_ALREADY_REGISTER"));
    }

    private void validInput(Connection connection,RegisterOfCounter value){
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setId(value.getRegInfDepartmentInputsID());
        List<DepartmentInput> departmentInputs =  new SearchDepartmentInputQuery(condition).execute(connection);
        DepartmentInput departmentInput = departmentInputs.get(0);
        if (departmentInput.getEndDate() == null) return ;
        if (value.getOnDate().getTime() < departmentInput.getStartDate().getTime())
            throw new ValidateException(messages.get("CANNOT_REGISTER_COUNTER_ON_INPUT_BEFORE_INPUT_START_DATE"));
    }

    @Override
    public boolean validateToDelete(Connection connection,RegisterOfCounter value)   {
        InputFactorCondition condition = new InputFactorCondition();
        condition.setCounterID(value.getCounter().getId());
        List<InputFactor> list = new GetLastInputFactorQuery((value.getCounter().getId())).execute(connection);
        if (list.isEmpty())return true;
        InputFactor inputFactor = list.get(0);
        if (inputFactor.getFactorTypeID() != 3) return true;
        if (inputFactor.getInputDate().getTime()>value.getOnDate().getTime())
            throw new ValidateException(messages.get("ERROR_CANNOT_DELETE_REGISTER_OF_COUNTER_EXIST_INPUT_FACTOR"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,RegisterOfCounter value)   {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setId(value.getRegInfDepartmentInputsID());
        List<DepartmentInput> departmentInputs = new SearchDepartmentInputQuery(condition).execute(connection);
        DepartmentInput departmentInput = departmentInputs.get(0);
        if (departmentInput.getEndDate() == null) return false;
        if (value.getOnDate().getTime() < departmentInput.getStartDate().getTime());
        checkForwardDateDocument(connection,value);
        return false;
    }

    private void checkForwardDateDocument(Connection connection, RegisterOfCounter value) {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setId(value.getId());
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_REGISTER_OF_COUNTER_ID_CANNOT_BE_NULL_IN_UPDATE"));
        List<RegisterOfCounter> list = new SearchRegisterOfCounterQuery(condition).execute(connection);
        if (list.isEmpty()) throw new ValidateException(messages.get("ERROR_CANNOT_FIND_REGISTER_OF_COUNTER_DOCUMENT_TO_EDIT"));
        RegisterOfCounter doc = list.get(0);
        if (!doc.getOnDate().equals(value.getOnDate())){
            boolean isExistDocumentAfterDocumentDate = checkIsExistDocumentAfterDocumentDate(connection,value);
            if (isExistDocumentAfterDocumentDate == true) throw new ValidateException(messages.get("ERROR_CANNOT_CHANGE_DATE_DOCUMENT_WHEN_EXIST_DOCUMENT_AFTER_THIS_DOCUMEMENT"));
        }
        if (!doc.getBeginFactor().equals(value.getBeginFactor())){
            boolean isExistDocumentAfterDocumentDate = checkIsExistDocumentAfterDocumentDate(connection,value);
            if (isExistDocumentAfterDocumentDate == true) throw new ValidateException(messages.get("ERROR_CANNOT_CHANGE_BEGIN_FACTOR_DOCUMENT_WHEN_EXIST_DOCUMENT_AFTER_THIS_DOCUMEMENT"));
        }

    }

    private boolean checkIsExistDocumentAfterDocumentDate(Connection connection, RegisterOfCounter value) {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setCounterID(value.getCounter().getId());
        condition.setMoreDate(value.getOnDate());
        Long countDocument = new SelectCountDocumentRegisterAndUnregisterCounterAfterDateQuery(condition).execute(connection).get(0);
        if (countDocument == 0) return false;
        else
            return true;
    }
}
