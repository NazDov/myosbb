package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnregisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/16/2015.
 */
public class SearchUnregisterOfCounterForInvoiceQuery extends AbstractSelectQuery<UnregisterOfCounter,UnregisterOfCounterCondition> {
    public SearchUnregisterOfCounterForInvoiceQuery(UnregisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected UnregisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        UnregisterOfCounter res = new UnregisterOfCounter();
        res.setId(rs.getLong("Id"));
        res.setDateActToUnPlomb(rs.getDate("OnDate"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(" ,[OnDate]    ");
        sb.append(" ,[CounterID]    ");
        sb.append(" ,[Number]      ");
        sb.append(" ,[ReasonTypeID]    ");
        sb.append(" ,[FirstMonthForCalc]   ");
        sb.append(" ,[SecondMonthForCalc]   ");
        sb.append(" ,[DateTo]    ");
        sb.append(" ,[NachOrNot]    ");
        sb.append(" ,[Period]     ");
        sb.append(" ,[contraAgentID]   ");
        sb.append(" ,[DepartmentID]    ");
        sb.append(" ,[InputID]    ");
        sb.append(" ,[Surname]    ");
        sb.append(" FROM [dbo].[DocUnregisterCounter]  ");
        sb.append(" where   ");
        sb.append(" 1=1    ");
        sb.append(" and [DepartmentID] = "+condition.getDepartmentID());
        sb.append(" and [InputID] = "+condition.getInputID());
        sb.append(" and [OnDate] <"+condition.getLessDate());
        return sb.toString();
    }
}
