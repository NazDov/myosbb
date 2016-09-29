package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;

import javax.naming.OperationNotSupportedException;
import java.sql.Connection;

/**
 * Created by vostap on 19.09.2014.
 */
public class DepartmentValidator extends AbstractValidator<Department> {

    @Override
    public boolean validateToInsert(Connection connection,Department value)   {
        if (value.getContraAgent().getId() == null) throw new ValidateException(messages.get("ERROR_CONTRA_AGENT_ID_CANNOT_BE_NULL"));
        if (value.getProperty().getCategoryOfTariff().getId() == null) throw new ValidateException(messages.get("ERROR_CATEGORY_OF_TARIFF_CANNOT_BE_NULL"));
        if (value.getProperty().getArea().getId() == null) throw new ValidateException(messages.get("ERROR_ID_AREA_CANNOT_BE_NULL"));
        if (value.getProperty().getName() == null) throw new ValidateException(messages.get("ERROR_DEPARTMENT_NAME_CANNOT_BE_NULL"));

        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,Department value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_DEPARTMENT_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,Department value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_DEPARTMENT_ID_CANNOT_BE_NULL"));
        boolean checkIsExistCounterOnInput = checkIsExistCounterOnInput(connection,value);
        if (checkIsExistCounterOnInput)
            throw new ValidateException(messages.get("ERROR_CANNOT_SET_DATE_END_WIRING_ON_INPUT_WITH_CONTAIN_COUNTER"));
        return true;
    }

    private boolean checkIsExistCounterOnInput(Connection connection, Department value) {
       // throw new UnsupportedOperationException("Not implemented yet");
        return false;
    }
}
