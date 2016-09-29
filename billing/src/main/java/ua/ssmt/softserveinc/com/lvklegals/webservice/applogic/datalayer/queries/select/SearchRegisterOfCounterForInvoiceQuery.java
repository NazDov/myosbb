package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/16/2015.
 */
public class SearchRegisterOfCounterForInvoiceQuery extends AbstractSelectQuery<RegisterOfCounter,RegisterOfCounterCondition> {
    public SearchRegisterOfCounterForInvoiceQuery(RegisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected RegisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        RegisterOfCounter res = new RegisterOfCounter();
        res.setId(rs.getLong("Id"));
        res.setOnDate(rs.getDate("OnDate"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("  SELECT top 1[id]           ");
        sb.append("  ,[OnDate]       ");
        sb.append("  ,[CounterID]        ");
        sb.append("  ,[Number]      ");
        sb.append("  ,[MetrCheckDate]    ");
        sb.append("  ,[PlombNumber1]    ");
        sb.append("  ,[PlombNumber2]    ");
        sb.append("  ,[RegInfDepartmentInputsID]   ");
        sb.append("  ,[Period]    ");
        sb.append("  ,[Status]     ");
        sb.append("  ,[MetrPlomba]    ");
        sb.append("  ,[Returned]     ");
        sb.append("   ,[Surname]       ");
        sb.append("   FROM [dbo].[DocRegisterCounter]   ");
        sb.append("  where 1=1    ");
        sb.append(" and [OnDate] <= "+this.getDateAsString(condition.getLessDate()));
        sb.append(" and [RegInfDepartmentInputsID] = "+condition.getDepartmentInputID());
        sb.append("  order by [OnDate] desc   ");

        return sb.toString();
    }
}
