package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;

/**
 * Created by vostap on 19.09.2014.
 */
public abstract class AbstractValidator<T> implements Validator<T> {

    protected Messages messages = Messages.getInstance();

    private Fillers fillers =  new Fillers();

    public Fillers getFillers() {
        return fillers;
    }

    public void setFillers(Fillers fillers) {
        this.fillers = fillers;
    }

    protected boolean checkContraAgent(ContraAgent contraAgent)   {
        if (contraAgent == null) throw new ValidateException(messages.get("ERROR_CONTRA_AGENT_CANNOT_BE_NULL"));
        if (contraAgent.getId() == null) throw new ValidateException(messages.get("ERROR_CONTRA_AGENT_ID_CANNOT_BE_NULL"));
        return true;
    }

    protected boolean checkInput(Input input)   {
        if (input == null) throw new ValidateException(messages.get("ERROR_INPUT_CANNOT_BE_NULL"));
        if (input.getId() == null) throw new ValidateException(messages.get("ERROR_ID_INPUT_CANNOT_BE_NULL "));
        return true;
    }

    protected boolean checkCounter(Counter counter)  {
        if (counter == null) throw new ValidateException(messages.get("ERROR_COUNTER_CANNOT_BE_NULL"));
        if (counter.getId() == null) throw new ValidateException(messages.get("ERROR_COUNTER_ID_CANNOT_BE_NULL"));
        return true;
    }
    protected boolean checkDepartment(Department department)   {
        if (department == null) throw new ValidateException(messages.get("ERROR_DEPARTMENT_CANNOT_BE_NULL"));
        if (department.getId() == null) throw new ValidateException(messages.get("ERROR_DEPARTMENT_ID_CANNOT_BE_NULL"));
        return true;
    }
    protected boolean checkInputFactor(InputFactor factor)  {
        if (factor == null) throw new ValidateException(messages.get("ERROR_INPUT_FACTOR_CANNOT_BE_NULL"));
        if (factor.getBeginFactor() == null) new ValidateException(messages.get("ERROR_INPUT_FACTOR_BEGIN_FACTOR_CANNOT_BE_NULL"));
        if (factor.getEndFactor() == null) new ValidateException(messages.get("ERROR_INPUT_FACTOR_END_FACTOR_CANNOT_BE_NULL"));
        if (factor.getFactorOnBeginMonth()==null) new ValidateException(messages.get("ERROR_INPUT_FACTOR_BEGIN_ON_MONTH_FACTOR_CANNOT_BE_NULL"));
        return true;
    }

    public Messages getMessages() {
        return messages;
    }
}
