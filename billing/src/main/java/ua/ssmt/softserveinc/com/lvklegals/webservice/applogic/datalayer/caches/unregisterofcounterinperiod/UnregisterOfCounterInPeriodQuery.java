package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounterinperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 25.12.2015.
 */
public class UnregisterOfCounterInPeriodQuery extends AbstractSelectQuery<UnregisterOfCounter,Void> {
    public UnregisterOfCounterInPeriodQuery(Void condition) {
        super(condition);
    }

    @Override
    protected UnregisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        UnregisterOfCounter res = new UnregisterOfCounter();
        res.setId(rs.getLong("id"));
        res.getCounter().setId(rs.getLong("CounterID"));
        res.setCalculateInPeriodUnregisterCounter(rs.getBoolean("NachOrNot"));
        res.getContraAgent().setId(rs.getLong("contraAgentID"));
        res.getDepartment().setId(rs.getLong("DepartmentID"));
        res.getInput().setId(rs.getLong("InputID"));
        //     res.setDateAct(rs.getDate("OnDate"));
        res.setDateActToUnPlomb(rs.getDate("OnDate"));
        res.setNumberAct(rs.getString("Number"));
        res.setPeriodByMiddleCalculationOnMonth1(rs.getDate("FirstMonthForCalc"));
        res.setPeriodByMiddleCalculationOnMonth2(rs.getDate("SecondMonthForCalc"));
        res.getOperationType().setId(rs.getLong("ReasonTypeID"));
        res.setDateToReturnCounter(rs.getDate("DateTo"));
        res.setDepartmentInput(new DepartmentInput(rs.getLong("DepartmentInputID")));
        res.setPeriod(rs.getDate("Period"));
        //res.setSurname(rs.getString("Surname"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select * from DocUnregisterCounter  ");
        sb.append(" where departmentInputID in (select departmentInputID from dbo.getDepartmentInputByID())  and Period = dbo.getCurrentPeriod()");
        sb.append(" order by onDate desc");
        return sb.toString();
    }
}
