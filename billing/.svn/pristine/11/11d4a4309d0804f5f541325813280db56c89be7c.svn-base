package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputForValidateQuery;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class DepartmentInputValidator extends AbstractValidator<DepartmentInput> {
    @Override
    public boolean validateToInsert(Connection connection,DepartmentInput value)   {
        if (value.getDepartment().getId() == null) throw new ValidateException(this.messages.get("ERROR_DEPARTMENT_ID_CANNOT_BE_NULL"));
        if (value.getInput().getId() == null) throw new ValidateException(this.messages.get("ERROR_ID_INPUT_CANNOT_BE_NULL"));
        if (value.getStartDate() == null) throw new ValidateException(this.messages.get("ERROR_DATE_START_DEPARTMENT_CANNOT_BE_NULL"));
       /* if (value.getId() == null)
            throw new ValidateException(messages.get("ERROR_DEPARTMENT_INPUT_ID_CANNOT_BE_NULL"));*/
    //    this.checkDateInPeriod(connection,value.getStartDate());
        boolean isActiveInput = checkInputToActive(connection,value);
        //if (isActiveInput) throw new ValidateException(messages.get("ERROR_INPUT_IS_BUSY"));
        return true;
    }

    @Override
    public boolean validateToDelete(Connection connection,DepartmentInput value)   {
        return true;
    }

    private boolean checkInputToActive(Connection connection, DepartmentInput di) {
        /*DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setInputID(di.getInput().getId());
        condition.setDepartmentID(di.getDepartment().getId());
        List<DepartmentInput> list = new SearchDepartmentInputForValidateQuery(condition).execute(connection);
        if (list.isEmpty()) return false;
        DepartmentInput tmpDi = list.get(0);
        if (tmpDi.getEndDate() == null) return true;
        if (tmpDi.getStartDate().getTime() < di.getStartDate().getTime()){

            if (di.getEndDate() == null) di.setEndDate(tmpDi.getStartDate());
            else
                if (tmpDi.getStartDate().getTime()>di.getEndDate().getTime())
                    throw new ValidateException(messages.get("ERROR_DATE_END_WIRING_CANNOT_BE_LATER_THEN_NEW_WIRING_BEGIN"));
        }*/
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setInputID(di.getInput().getId());
        List<DepartmentInput> list = new SearchDepartmentInputForValidateQuery(condition).execute(connection);
        if (list.isEmpty()) return false;
        else
            throw  new ValidateException(messages.get("ERROR_DEPARTMENT_INPUT_ID_CANNOT_ASSIGN_MORE_ONE_INPUT"));
    }

    public void checkDateInPeriod(Connection connection,Date date) {
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0);
        if (date.getTime()< DateUtils.getFirstDayOfMonth(period).getTime() ||
                date.getTime()>DateUtils.getLastDayOfMonth(period).getTime())
            throw new ValidateException(messages.get("ERROR_DATE_NOT_IN_PERIOD"));
    }



    private boolean checkDepartmentInputToActive(Connection connection, DepartmentInput value) {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setInputID(value.getInput().getId());
        List<DepartmentInput> list = new SearchDepartmentInputForValidateQuery(condition).execute(connection);
        if (list.isEmpty()) return false;
        DepartmentInput di = list.get(0);
        if (di.getEndDate() == null) return true;

        //if (value.getStartDate().getTime()<di)

        if (value.getStartDate().getTime()>di.getEndDate().getTime())
            return false;
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection,DepartmentInput value)   {
        if (value.getId() == null)
            throw new ValidateException(messages.get("ERROR_DEPARTMENT_INPUT_ID_CANNOT_BE_NULL"));
        return true;
    }


}
