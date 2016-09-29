package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceDepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 08.09.2014.
 */
public class SelectDepartmentPropertyQuery extends AbstractSelectQuery<Department,ServiceDepartmentCondition> {

    public SelectDepartmentPropertyQuery(ServiceDepartmentCondition condition) {
        super(condition);
    }

    @Override
    protected Department parseResultSet(ResultSet rs) throws SQLException {
        return new Department();
    }

    @Override
    protected String getSQLQuery() {
        return "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "  FROM [dbo].[RegInfDepartamentCharacters]\n" +
                "  where period = (select top 1 currentPeriod from CurrentPeriod)\n" +
                "                and DepartmentID = "+condition.getDepartmentID();
    }
}
