package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter.SearchUnregisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.*;

/**
 * Created by vostap on 14.05.2015.
 */
public class GetAllUnregisterCounterInPeriod extends AbstractSelectPreCompileQuery<UnregisterOfCounter,UnregisterOfCounterCondition> {
    public GetAllUnregisterCounterInPeriod(Connection connection) {
        super(connection, null);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        // sb.append(" where InputID = ? and DepartmentID = ? and OnDate >=? and OnDate <=?  ");
        Date d1 = new Date(DateUtils.getFirstDayOfMonth(condition.getPeriod()).getTime());
        Date d2 = new Date(DateUtils.getLastDayOfMonth(condition.getPeriod()).getTime());

        st.setLong(1,condition.getInputID());
        st.setLong(2,condition.getDepartmentID());
        st.setDate(3,d1);
        st.setDate(4,d2);

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
//        res.setDepartmentInput(new DepartmentInput(rs.getLong("regInfDepartmentInputID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(" ,[OnDate]    ");
        sb.append(" ,[CounterID]   ");
        sb.append(" ,[Number]    ");
        sb.append(" ,[ReasonTypeID]   ");
        sb.append(" ,[FirstMonthForCalc]  ");
        sb.append(" ,[SecondMonthForCalc]  ");
        sb.append(" ,[DateTo]   ");
        sb.append(" ,[NachOrNot]   ");
        sb.append(" ,[Period]   ");
        sb.append(" ,[contraAgentID]   ");
        sb.append(" ,[DepartmentID]    ");
        sb.append(" ,[InputID]    ");
        sb.append(" FROM [dbo].[DocUnregisterCounter]  ");
        sb.append(" where InputID = ? and DepartmentID = ? and OnDate >=? and OnDate <=?  ");
        sb.append(" order by [OnDate] desc  ");
        return sb.toString();
    }
}
