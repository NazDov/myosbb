package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11.02.2015.
 */
public class SearchCounterByDepartmentAndInputQuery extends AbstractSelectQuery<Counter,DepartmentInputCondition> {

    public SearchCounterByDepartmentAndInputQuery(DepartmentInputCondition condition) {
        super(condition);
    }

    @Override
    protected Counter parseResultSet(ResultSet rs) throws SQLException {
        Counter counter = new Counter();
        counter.setId(rs.getLong("counterID"));
        return counter;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select ");
        sb.append(" sys.CounterID as counterID  ");
        sb.append(" from SysCounterStatuses as sys  ");
        sb.append(" left join DocRegisterCounter as doc on  ");
        sb.append(" sys.DocRegisterCounterID = doc.id  ");
        sb.append(" left join RegInfDepartsInputs as di on  ");
        sb.append(" doc.RegInfDepartmentInputsID = di.id  ");
        sb.append(" where di.id is not null  ");
        if (condition.getDepartmentID() != null)
            sb.append(" and di.departmentID = "+condition.getDepartmentID());
        if (condition.getInputID() != null)
            sb.append(" and di.inputID = "+condition.getInputID());
        //(sb.toString());
        return sb.toString();
    }
}
