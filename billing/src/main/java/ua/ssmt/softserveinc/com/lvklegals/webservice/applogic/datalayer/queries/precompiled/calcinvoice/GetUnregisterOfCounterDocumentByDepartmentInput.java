package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 17.05.2015.
 */
public class GetUnregisterOfCounterDocumentByDepartmentInput extends AbstractSelectPreCompileQuery<UnregisterOfCounter,UnregisterOfCounterCondition> {

    public GetUnregisterOfCounterDocumentByDepartmentInput(Connection connection) {
        super(connection, null);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        st.setLong(1, condition.getDepartmentID());
        st.setLong(2, condition.getInputID());
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
        res.setDateActToUnPlomb(rs.getDate("OnDate"));
        res.setFactorByOnUnregister(5);
        res.setNumberAct(rs.getString("Number"));
        res.setPeriodByMiddleCalculationOnMonth1(rs.getDate("FirstMonthForCalc"));
        res.setPeriodByMiddleCalculationOnMonth2(rs.getDate("SecondMonthForCalc"));
        res.getOperationType().setId(rs.getLong("ReasonTypeID"));
        res.setDateToReturnCounter(rs.getDate("DateTo"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" doc.[id]\n" + " ");
        sb.append(        "      ,doc.[OnDate]\n" +  " ");
        sb.append(        "      ,doc.[CounterID]\n" +  " ");
        sb.append(        "      ,doc.[Number]\n" +  " ");
        sb.append(        "      ,doc.[ReasonTypeID]\n" + " ");
        sb.append(        "      ,doc.[FirstMonthForCalc]\n" +  " ");
        sb.append(        "      ,doc.[SecondMonthForCalc]\n" +  " ");
        sb.append(        "      ,doc.[DateTo]\n" +  " ");
        sb.append(        "      ,doc.[NachOrNot]\n" +  " ");
        sb.append(        "      ,doc.[Period]\n" +  " ");
        sb.append(        "      ,doc.[contraAgentID]\n" +  " ");
        sb.append(        "      ,doc.[DepartmentID]\n" +  " ");
        sb.append(        "      ,doc.[InputID]\n" +  " ");
        sb.append(        "  FROM [dbo].[DocUnregisterCounter] as doc \n" + " ");
        sb.append(        " where 1=1 ");
        sb.append(        " and  DepartmentID = ? and InputID = ?   ");
        sb.append(        " order by [OnDate] desc ");
        return sb.toString();
    }
}
