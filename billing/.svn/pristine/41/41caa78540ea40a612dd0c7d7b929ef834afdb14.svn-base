package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PreparedSaldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 12/7/2015.
 */
public class GetAllForCalculateSaldoQuery extends AbstractSelectQuery<PreparedSaldo,Void> {
    public GetAllForCalculateSaldoQuery(Void condition) {
        super(condition);
    }

    @Override
    protected PreparedSaldo parseResultSet(ResultSet rs) throws SQLException {
        PreparedSaldo res = new PreparedSaldo();
        res.setAgreement(new Agreement(rs.getLong("AgreementID")));
        res.setContraAgent(new ContraAgent(rs.getLong("ContraAgentID")));
        res.setSumaInvoiceVVVP(rs.getDouble("sumaInvoiceVVVP"));
        res.setSumInvoiceByLkp(rs.getDouble("sumInvoiceByLkp"));
        res.setSumInvoiceCorrectionRealize(rs.getDouble("sumInvoiceCorrectionRealize"));
        res.setSumInvoicePhys(rs.getDouble("sumInvoicePhys"));
        res.setSumInvoiceRains(rs.getDouble("sumInvoiceRains"));
        res.setSumPaymentCommision(rs.getDouble("sumPaymentCommision"));
        res.setSumPaymentP33(rs.getDouble("sumPaymentP33"));
        res.setSumPaymentToPromyv(rs.getDouble("sumPaymentToPromyv"));
        res.setSumPaymentVVVP(rs.getDouble("sumaInvoiceVVVP"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                              ");
        sb.append("         ContraAgentID                               ");
        sb.append("         ,AgreementID                                ");
        sb.append("        ,sumaInvoiceVVVP                            ");
        sb.append("         ,sumInvoiceRains                            ");
        sb.append("         ,sumInvoiceCorrectionRealize                ");
        sb.append("         ,sumInvoiceByLkp                            ");
        sb.append("         ,sumInvoicePhys                             ");
        sb.append("         ,sumPaymentVVVP                             ");
        sb.append("         ,sumPaymentP33                              ");
        sb.append("        ,sumPaymentToPromyv                         ");
        sb.append("         ,sumPaymentCommision                        ");

        sb.append(" FROM [dbo].[getAllDataToUpdateSaldoVVVP] ()         ");
        return sb.toString();
    }
}
