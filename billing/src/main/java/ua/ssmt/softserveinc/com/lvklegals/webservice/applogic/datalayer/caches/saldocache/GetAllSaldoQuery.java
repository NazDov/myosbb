package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoGroup;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 13.01.2016.
 */
public class GetAllSaldoQuery extends AbstractSelectQuery<Saldo,Void> {
    private int cnt = 0;
    public GetAllSaldoQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Saldo parseResultSet(ResultSet rs) throws SQLException {
        Saldo s = new Saldo();
        s.setContraAgent(this.fillContraAgent(rs));
        s.setAgreement(this.fillAgreement(rs));
        s.setSaldoGroup(this.fillSaldoGroup(rs));
        s.setPeriod(rs.getDate("Period"));
        s.setInvoice(rs.getDouble("Invoice"));
        s.setSumPayment(rs.getDouble("payments"));
        s.setSaldoOnBegin(rs.getDouble("SaldonOnBegin"));
        s.setSaldoOnEnd(rs.getDouble("SaldoOnEnd"));
        s.setId(rs.getLong("saldoID"));
        s.getAgreement().setContraAgent(s.getContraAgent());

        SaldoDetails sd = new SaldoDetails();
        sd.setId(rs.getLong("id"));
        sd.setSaldoID(rs.getLong("RegSaldoID"));
        sd.setSumInvoiceWatterSupplyAndWatterOut(rs.getDouble("sumInvoiceWatterSupplyAndWatterOut"));
        sd.setSumInvoiceRains(rs.getDouble("sumInvoiceRains"));
        sd.setSumCorrectionOfRealization(rs.getDouble("sumCorrectionOfRealization"));
        sd.setSumInvoiceByLkp(rs.getDouble("sumInvoiceByLkp"));
        sd.setSumInputByPhysicalPerson(rs.getDouble("sumInputByPhysicalPerson"));
        sd.setSumInvoiceByStockWithoutPermission(rs.getDouble("sumInvoiceByStockWithoutPermission"));
        sd.setSumInvoiceByPenya(rs.getDouble("sumInvoiceByPenya"));
        sd.setSumPaymentVVVPP33AndInnerProvod(rs.getDouble("sumPaymentVVVPP33AndInnerProvod"));
        sd.setSumPaymentCommis(rs.getDouble("sumPaymentCommis"));
        sd.setSumPenyaVVVPAndInnerProvod(rs.getDouble("sumPenyaVVVPAndInnerProvod"));
        s.setDetailses(sd);
        return s;
    }

    private SaldoGroup fillSaldoGroup(ResultSet rs) throws SQLException {
        SaldoGroup res = new SaldoGroup(rs.getLong("groupID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        return new ContraAgent(rs.getLong("ContraAgentID"));
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append(" SELECT s.[id]   as saldoID       ");
        sb.append(" ,s.[ContraAgentID]    ");
        sb.append(" ,s.[AgreementID]      ");
        sb.append(" ,s.[GroupSaldoID]  as groupID    ");
        sb.append(" ,s.[Period]           ");
        sb.append(" ,s.[SaldonOnBegin]    ");
        sb.append(" ,s.[SaldoOnEnd]       ");
        sb.append(" ,s.[invoice]          ");
        sb.append(" ,s.[payments]        ");

        sb.append(" , sd.[id]                                  ");
        sb.append(" ,[RegSaldoID]                                   ");
        sb.append(" ,[sumInvoiceWatterSupplyAndWatterOut]           ");
        sb.append(" ,[sumInvoiceRains]                              ");
        sb.append(" ,[sumCorrectionOfRealization]                   ");
        sb.append(" ,[sumInvoiceByLkp]                              ");
        sb.append(" ,[sumInputByPhysicalPerson]                     ");
        sb.append(" ,[sumInvoiceByStockWithoutPermission]           ");
        sb.append(" ,[sumInvoiceByPenya]                            ");
        sb.append(" ,[sumPaymentVVVPP33AndInnerProvod]              ");
        sb.append(" ,[sumPaymentCommis]                             ");
        sb.append(" ,[sumPenyaVVVPAndInnerProvod]                   ");

        sb.append(" from RegSaldoOnContraAgent as s ");
        sb.append(" left join RegSaldoDetails as sd on s.id = sd.RegSaldoID ");
        sb.append(" where  ");
        sb.append("         period = dbo.getCurrentPeriod()   ");


        return sb.toString();
    }
}
