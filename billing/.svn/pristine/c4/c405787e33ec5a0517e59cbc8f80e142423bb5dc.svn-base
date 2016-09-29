package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;

import java.sql.Connection;

/**
 * Created by vostap on 22.09.2014.
 */
public class SubRouteValidator extends  AbstractValidator<SubRoute> {
    @Override
    public boolean validateToInsert(Connection connection,SubRoute value)   {
        if (value.getName() == null) throw new ValidateException(this.messages.get("ERROR_SUBROUTE_NAME_CANNOT_BE_NULL"));
        if (value.getRoute().getId() == null) throw new ValidateException(this.messages.get("ERROR_ROUTE_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,SubRoute value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("ERROR_SUB_ROUTE_ID_CANNOT_BE_NULL"));
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,SubRoute value)   {
        if (value.getId() == null) throw new ValidateException(this.messages.get("ERROR_SUB_ROUTE_ID_CANNOT_BE_NULL"));
        return true;
    }
}
