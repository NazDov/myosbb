package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllStockWithoutPermissionQuery extends AbstractSelectQuery<StockWithoutPermission,Void> {
    public AllStockWithoutPermissionQuery(Void condition) {
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
        sb.append("  SELECT top "+ Options.getMaxCountToSelectRow()+" a.id  ");
        sb.append(" ,a.period   ");
        sb.append(" ,a.periodCalculation ");
        sb.append(" ,a.ContraAgentID  ");
        sb.append(" FROM dbo.DocInvoiceByStockWithoutPermission as a ");
        sb.append(" inner join RefContragents as d  ");
        sb.append(" on a.ContraAgentID=d.id ");
        sb.append(" where 1=1   ");

        sb.append(" and a.period = dbo.getCurrentPeriod() ");
        return sb.toString();
    }
}
