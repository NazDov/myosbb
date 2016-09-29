package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Controller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ControllerCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchControllerQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class ControllerValidator extends AbstractValidator<Controller> {

    @Override
    public boolean validateToInsert(Connection connection,Controller value)   {
        if (value.getName() == null) throw new ValidateException(this.messages.get("ERROR_CONTROLLER_NAME_CANNOT_BE_NULL"));
        if (value.getSubRoute().getId() == null) throw new ValidateException(this.messages.get("ERROR_SUB_ROUTE_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,Controller value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_ROUTE_ID_CANNOT_BE_NULL"));
        ControllerCondition condition = new ControllerCondition();
        condition.setId(value.getId());
        try {
            List<Controller> list = new SearchControllerQuery(condition).execute(connection);
            if (list.size() >0 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_DELETE_ROUTE_CAUSE_SUBROUTE"));

            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }

    @Override
    public boolean validateToUpdate(Connection connection,Controller value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("CONTROLLER_ID_CANNOT_BE_NULL"));
        return true;
    }
}
