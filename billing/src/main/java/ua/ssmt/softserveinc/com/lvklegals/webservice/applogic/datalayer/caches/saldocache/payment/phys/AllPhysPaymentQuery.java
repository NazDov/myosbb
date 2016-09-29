package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.phys;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.01.2016.
 */
public class AllPhysPaymentQuery extends AbstractSelectQuery<SaldoInvoiceSum,Void> {
    public AllPhysPaymentQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum s = new SaldoInvoiceSum();
        //s.setContraAgent(new ContraAgent(rs.getLong()));
        s.setAgreement(this.fillAgreement(rs));
        double res = 0;
        double sumVVVP= rs.getDouble("SumVP")+rs.getDouble("SumVV");
        double sumPilgAndSubsid = rs.getDouble("SumPilga")+rs.getDouble("SumSubsidya");
        res = sumVVVP - sumPilgAndSubsid;
        s.setSum(res);
        return s;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement(rs.getLong("ContrAgentAgreementID"));
        res.setContraAgent(new ContraAgent(rs.getLong("ContragentID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                  ");
        sb.append("  [ContragentID]                                         ");
        sb.append(" ,[ContrAgentAgreementID]                                ");
        sb.append(" ,sum([SumVP]) as SumVP                                  ");
        sb.append(" ,sum([SumVV]) as SumVV                                  ");
        sb.append(" ,sum([Pilga]) as SumPilga                               ");
        sb.append(" ,sum([Subsidya]) as SumSubsidya                         ");
        sb.append(" FROM [dbo].[DocPsycalPayers]                            ");
        sb.append(" where period = dbo.getCurrentPeriod()                   ");
        sb.append(" group by ContragentID,ContrAgentAgreementID             ");
        return sb.toString();
    }
}
