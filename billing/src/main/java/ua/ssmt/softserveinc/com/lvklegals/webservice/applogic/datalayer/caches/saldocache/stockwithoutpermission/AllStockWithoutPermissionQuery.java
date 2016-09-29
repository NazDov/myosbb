package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.stockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 18.01.2016.
 */
public class AllStockWithoutPermissionQuery extends AbstractSelectQuery<SaldoInvoiceSum,Void> {
    public AllStockWithoutPermissionQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setAgreement(new Agreement(rs.getLong("AgreementID")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("ContraAgentID")));
        res.setSum(rs.getDouble("ss"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                                              ");
        sb.append(" sum([Sum08]) as ss                                                                   ");
        sb.append(" ,[ContraAgentID]                                                                    ");
        sb.append(" ,[AgreementID]                                                                      ");
        sb.append(" FROM [dbo].[CalcInvoiceStockWithoutPermition]                                       ");
        sb.append(" where   1=1                                                                            ");
        sb.append(" and period = dbo.getCurrentPeriod()           ");
        sb.append(" group by ContraAgentID,AgreementID                                                  ");
        return sb.toString();
    }
}
