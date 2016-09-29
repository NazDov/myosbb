package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.teploenergo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.05.2016.
 */
public class AllInvoiceTeploenergoByContraAgentQuery extends AbstractSelectQuery<SaldoInvoiceSum,SumCondition> {
    public AllInvoiceTeploenergoByContraAgentQuery(SumCondition SumCondition) {
        super(SumCondition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setAgreement(new Agreement(rs.getLong("AgreementSupplierID")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("HotWatterSupplierID")));
        res.setSum(rs.getDouble("suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("  select HotWatterSupplierID,AgreementSupplierID,sum(sum) as suma from CalcInvoiceTeploenergo  ");
        sb.append("         where                                                                        ");
        sb.append("  period = dbo.getCurrentPeriod()                                                      ");
        sb.append("  HotWatterSupplierID ");
        sb.append("  group by HotWatterSupplierID,AgreementSupplierID                                    ");
        return sb.toString();
    }
}
