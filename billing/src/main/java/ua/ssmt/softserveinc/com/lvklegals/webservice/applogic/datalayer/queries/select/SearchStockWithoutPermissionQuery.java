package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.StockWithoutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11.11.2014.
 */
public class SearchStockWithoutPermissionQuery extends AbstractSelectQuery<StockWithoutPermission,StockWithoutPermissionCondition> {
    public SearchStockWithoutPermissionQuery(StockWithoutPermissionCondition condition) {
        super(condition);
    }

    @Override
    protected StockWithoutPermission parseResultSet(ResultSet rs) throws SQLException {
        StockWithoutPermission res = new StockWithoutPermission();
        res.setId(rs.getLong("id"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setPeriodCalculation(rs.getDate("periodCalculation"));
        res.setPeriod(rs.getDate("period"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("  SELECT top "+Options.getMaxCountToSelectRow()+" a.id  ");
        sb.append(" ,a.period   ");
        sb.append(" ,a.periodCalculation ");
        sb.append(" ,a.ContraAgentID  ");
/*        sb.append(" ,b.FullName ");
        sb.append(" ,d.EDRPO    ");*/
        sb.append(" FROM dbo.DocInvoiceByStockWithoutPermission as a ");
        sb.append(" inner join RefContragents as d  ");
        sb.append(" on a.ContraAgentID=d.id ");
/*        sb.append(" inner join RegInfKontragentProperty as b    ");
        sb.append("  on a.ContraAgentID=b.ContraAgentID ");*/
        sb.append(" where 1=1   ");
        if (condition.getContraAgentID() != null )
            sb.append(" and a.ContraAgentID ="+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and a.period = "+getDateAsString(condition.getPeriod()));
        return sb.toString();
    }
}
