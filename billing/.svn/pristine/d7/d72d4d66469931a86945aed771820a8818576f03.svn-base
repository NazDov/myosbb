package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.invoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoGroup;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SaldoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/7/2015.
 */
public class SearchSaldoQuery extends AbstractSelectQuery<Saldo,SaldoCondition> {
    public SearchSaldoQuery(SaldoCondition condition) {
        super(condition);
    }

    @Override
    protected Saldo parseResultSet(ResultSet rs) throws SQLException {
        Saldo res = new Saldo();
        res.setContraAgent(this.fillContraAgent(rs));
        res.setAgreement(this.fillAgreement(rs));
        res.setSaldoGroup(this.fillSaldoGroup(rs));
        res.setPeriod(rs.getDate("Period"));
        res.setInvoice(rs.getDouble("Invoice"));
        res.setSumPayment(rs.getDouble("payments"));
        res.setSaldoOnBegin(rs.getDouble("SaldonOnBegin"));
        res.setSaldoOnEnd(rs.getDouble("SaldoOnEnd"));
        res.setId(rs.getLong("saldoID"));
        return res;
    }

    private SaldoGroup fillSaldoGroup(ResultSet rs) throws SQLException {
        SaldoGroup res = new SaldoGroup(rs.getLong("groupID"));
        res.setName("Name");
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
        sb.append(" ,s.[GroupSaldoID]     ");
        sb.append(" ,g.[Name]     ");
        sb.append(" ,s.[Period]           ");
        sb.append(" ,s.[SaldonOnBegin]    ");
        sb.append(" ,s.[SaldoOnEnd]       ");
        sb.append(" ,s.[invoice]          ");
        sb.append(" ,s.[payments],g.id as groupID         ");
        sb.append(" FROM [dbo].[RegSaldoOnContraAgent] as s left join [RefSaldoGroup] as g on g.id = s.GroupSaldoID where 1=1 ");

        if (condition.getContraAgentID() != null)
            sb.append(" and ContraAgentID = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and period = "+getDateAsString(condition.getPeriod()));
        if (condition.getAgreementID() != null)
            sb.append(" and AgreementID = "+condition.getAgreementID());
        if (condition.getSaldoGroupID() != null)
            sb.append(" and GroupSaldoID = "+condition.getSaldoGroupID());

        return sb.toString();
    }
}
