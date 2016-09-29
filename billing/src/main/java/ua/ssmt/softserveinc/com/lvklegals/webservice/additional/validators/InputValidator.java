package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 19.09.2014.
 */
public class InputValidator extends AbstractValidator<Input> {

    @Override
    public boolean validateToInsert(Connection connection,Input value)   {
        if (value.getParent().getId() == null) throw new ValidateException(this.messages.get("ERROR_PARENT_ID_CANNOT_BE_NULL"));
        if (value.getAddress().getId() == null) throw new ValidateException(this.messages.get("ERROR_ADDRESS_ID_CANNOT_BE_NULL"));
        if (value.getService().getId() == null) throw new ValidateException(this.messages.get("ERROR_SERVICE_ID_CANNOT_BE_NULL"));
        if (value.getDiameter().getId() == null) throw new ValidateException(this.messages.get("ERROR_DIAMETER_ID_CANNOT_BE_NULL"));

        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,Input value)   {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setInputID(value.getId());
        try {
            List<DepartmentInput> list = new SearchDepartmentInputQuery(condition).execute(connection);
            if (list.size() >0 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_DELETE_INPUT_CAUSE_DEPARTMENT"));

            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }

    @Override
    public boolean validateToUpdate(Connection connection,Input value)   {
        if (value.getId() == null)
            throw new ValidateException(this.messages.get("ERROR_ID_INPUT_CANNOT_BE_NULL"));
        return true;
    }
}
