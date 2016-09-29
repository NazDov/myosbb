package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.canceldebt;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceWithServiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 01.03.2016.
 */
public class GetAddCancelDeptQuery extends AbstractSelectQuery<SaldoInvoiceWithServiceSum,Void> {

    public GetAddCancelDeptQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceWithServiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceWithServiceSum res = new SaldoInvoiceWithServiceSum();
        res.setAgreement(new Agreement(rs.getLong("agreementId")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("contrAgentID")));
        res.setServicePayment(new ServicePayment(rs.getLong("serviceId")));
        res.setSum(rs.getDouble("suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("     SELECT                  ");
        sb.append("             [contrAgentID]  ");
        sb.append("  ,[agreementId]          ");
        sb.append("  ,[serviceId]            ");
        sb.append("  ,sum([suma]) as suma    ");

        sb.append("  FROM [dbo].[DocCancelZaborgovanist]   ");
        sb.append("  where period = dbo.getCurrentPeriod()  ");
        sb.append("  group by contrAgentID,agreementId,serviceID  ");
        return sb.toString();
    }
}
