package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.commis;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 15.01.2016.
 */
public class AllPaymentCommisQuery extends AbstractSelectQuery<SaldoInvoiceSum,Void> {
    public AllPaymentCommisQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setAgreement(new Agreement(rs.getLong("AgreementID")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("ContragentID")));
        res.setSum(rs.getDouble("s"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                         ");
        sb.append("         [AgreementID]           ");
        sb.append(" ,[ContragentID]                 ");
        sb.append(" ,sum([SumCommission]) as s      ");

        sb.append(" FROM [dbo].[DocCommission] where 1=1     ");
        sb.append(" and period = dbo.getCurrentPeriod()     ");
        sb.append("  group by AgreementID,ContragentID       ");
        return sb.toString();
    }
}
