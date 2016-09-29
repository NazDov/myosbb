package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Route;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SubRouteCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchSubRouteQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class RouteValidator extends AbstractValidator<Route> {
    @Override
    public boolean validateToInsert(Connection connection,Route value)   {
        if (value.getName() == null) throw new ValidateException(messages.get("ERROR_ROUTE_NAME_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,Route value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_ROUTE_ID_CANNOT_BE_NULL"));
        SubRouteCondition condition = new SubRouteCondition();
        condition.setRouteID(value.getId());
        try {
            List<SubRoute> list = new SearchSubRouteQuery(condition).execute(connection);
            if (list.size() >0 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_DELETE_CONTROLLER_CAUSE_SUBROUTE"));

            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }

    @Override
    public boolean validateToUpdate(Connection connection,Route value)   {
        if (value.getId() == null) throw new ValidateException(messages.get("ERROR_ROUTE_ID_CANNOT_BE_NULL"));
        return true;
    }
}
