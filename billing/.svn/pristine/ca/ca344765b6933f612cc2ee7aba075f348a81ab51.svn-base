package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.01.2016.
 */
public class AllCorrectionOfRealizeQuery extends AbstractSelectQuery<SaldoInvoiceSum, Void> {
    public AllCorrectionOfRealizeQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        Double s = (rs.getDouble("SumWatterSupply") + rs.getDouble("SumWatterOut"));
        res.setSum(s);
        res.setAgreement(this.fillAgreement(rs));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement(rs.getLong("AgreementID"));
        res.setContraAgent(new ContraAgent(rs.getLong("ContraAgentID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                  ");
        sb.append("         [ContraAgentID]                                 ");
        sb.append("         ,sum([SumWatterSupply]) as SumWatterSupply      ");
        sb.append(" ,sum([SumWatterOut]) as SumWatterOut                    ");
        sb.append(" ,[AgreementID]                                          ");
        sb.append(" FROM [dbo].[DocCorrectionOfRealize]                     ");
        sb.append(" where                                                   ");
        sb.append(" period = dbo.getCurrentPeriod() ");
        sb.append(" group by ContraAgentID,AgreementID                      ");
        return sb.toString();
    }
}
