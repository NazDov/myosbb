package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.SearchRainsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 01.12.2014.
 */
public class RainsValidator extends AbstractValidator<Rains> {
    @Override
    public boolean validateToInsert(Connection connection, Rains value)   {
        return validateToCreateRains(connection, value);
    }
    private boolean validateToCreateRains(Connection connection, Rains value)   {
        RainsCondition condition = new RainsCondition();
        condition.setDepartmentID(value.getDepartment().getId());
        condition.setAreaTypeID(value.getAreaType().getId());
        condition.setPeriod(value.getPeriod());
        try {
            List<Rains> list = new SearchRainsQuery(condition).execute(connection);
     //       if (list.size() >1 ) throw new ValidateException(Messages.getInstance().get("Не можу бути лалалалалалялялял"));
    //        if (value.getAreaType().getId() == 1L) throw new ValidateException(Messages.getInstance().get("Не можу бути лалалалалалялялял"));
    //        if (value.getAreaType().getId() == 2L) throw new ValidateException(Messages.getInstance().get("Не можу бути лалалалалалялялял"));
     //       if (value.getAreaType().getId() == 3L) throw new ValidateException(Messages.getInstance().get("Не можу бути лалалалалалялялял"));
            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }
    @Override
    public boolean validateToDelete(Connection connection, Rains value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, Rains value)   {
        return false;
    }
}
