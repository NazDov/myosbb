package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SysCounterStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentCounterStatusQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchRegisterOfCounterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class UnregisterOfCounterValidator  extends AbstractValidator<UnregisterOfCounter>{


    @Override
    public boolean validateToInsert(Connection connection,UnregisterOfCounter value)   {
        SysCounterStatusCondition condition = new SysCounterStatusCondition();
        condition.setCounterID(value.getCounter().getId());
        SysCounterStatus status = null;
        try {
            status = new GetCurrentCounterStatusQuery(condition).execute(connection).get(0);
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
        if (status.getStatusTypeID() != 2) throw new ValidateException(messages.get("ERROR_CANNOT_UNREGISTER_CREATED_COUNTER"));
        this.validateCounterToRegisteredOnContraAgent(connection,status,value);
        this.checkInputOnExistCounterOnDateAct(connection,value,status);

        return true;
    }

    private void checkInputOnExistCounterOnDateAct(Connection connection, UnregisterOfCounter value, SysCounterStatus status) {
        RegisterOfCounterCondition condition = new RegisterOfCounterCondition();
        condition.setId(status.getDocRegisterCounterID());
        List<RegisterOfCounter> list = new SearchRegisterOfCounterQuery(condition).execute(connection);
        if (list.isEmpty()) throw new ValidateException(messages.get("ERROR_CANNOT_UNREGISTER_OF_COUNTER_NOT_FOUNT_DOCUMENT_REGISTRATION_OF_COUNTER"));
        RegisterOfCounter registerOfCounter = list.get(0);
        if (value.getDateActToUnPlomb().getTime()< registerOfCounter.getOnDate().getTime())
            throw new ValidateException(messages.get("ERROR_CANNOT_UNREGISTER_OF_COUNTER_ON_DATE_LESS_DATE_UNREGISTER_COUNTER"));
    }

    @Override
    public boolean validateToDelete(Connection connection,UnregisterOfCounter value)   {

        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,UnregisterOfCounter value)   {
        return true;
    }

    private void validateCounterToRegisteredOnContraAgent(Connection connection,SysCounterStatus status,UnregisterOfCounter value)   {
        RegisterOfCounter res = null;
        try {
            res = getFillers().getRegisterOfCounterByID(connection, status.getDocRegisterCounterID());
        } catch (StorageException e) {
            throw new ValidateException(messages.get("ERROR_VALIDATE_STORAGE_ERROR"));
        }
       // if (value.getCounter().getId().longValue() != res.getCounter().getId().longValue()) throw new ValidateException();
        if (value.getInput().getId().longValue() != res.getInput().getId().longValue()) throw new ValidateException("ERROR_COUNTER_NOT_BELONG_TO_INTPUT");
        if (value.getDepartment().getId().longValue() != res.getDepartment().getId().longValue()) throw new ValidateException("ERROR_COUNTER_NOT_BELONG_TO_INTPUT");
        if (value.getContraAgent().getId().longValue() != res.getContraAgent().getId().longValue()) throw new ValidateException("ERROR_COUNTER_NOT_BELONG_TO_INTPUT");
    }


}
