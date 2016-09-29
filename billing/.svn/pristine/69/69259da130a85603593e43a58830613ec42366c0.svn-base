package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;



import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceStockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceStockWithoutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.02.2015.
 */
public class SearchInvoiceStockWithOutPermissionQuery extends AbstractSelectQuery<CalcInvoiceStockWithoutPermission,CalcInvoiceStockWithoutPermissionCondition> {
    public SearchInvoiceStockWithOutPermissionQuery(CalcInvoiceStockWithoutPermissionCondition condition) {
        super(condition);
    }

    @Override
    protected CalcInvoiceStockWithoutPermission parseResultSet(ResultSet rs) throws SQLException {
        CalcInvoiceStockWithoutPermission res = new CalcInvoiceStockWithoutPermission();
        res.setContraAgent(new ContraAgent(rs.getLong("")));
        res.setSum08(rs.getDouble("Sum08"));
        res.setSum(rs.getDouble("Sum"));
        res.setVal(rs.getDouble("volume"));
        res.setPeriod(rs.getDate("Period"));
        res.setPeriodCalculation(rs.getDate("periodCalc"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT cw.[id]  ");
        sb.append(" ,cw.[ContraAgentID]   ");
        sb.append(" ,cw.[volume]    ");
        sb.append(" ,cw.[period]     ");
        sb.append(" ,cw.[periodCalc]   ");
        sb.append(" ,cw.[Sum]   ");
        sb.append(" ,cw.[Sum08]   ");
        sb.append(" FROM [dbo].[CalcInvoiceStockWithoutPermition] as cw   ");
        sb.append(" where 1=1 and cw.period = dbo.getCurrentPeriod()");
        if (condition.getContraAgentID() != null)
            sb.append(" and contraAgentID = "+condition.getContraAgentID());
        return sb.toString();
    }
}
