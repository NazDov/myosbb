package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 13.01.2016.
 */
public class GetAllInvoiceSumQuery extends AbstractSelectQuery<SaldoInvoiceSum,String> {
    private String agreementColumnName;
    public GetAllInvoiceSumQuery(String condition,String agreementColumnName) {
        super(condition);
        this.agreementColumnName = agreementColumnName;
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setAgreement(new Agreement(rs.getLong(agreementColumnName)));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("ContraAgentID")));
        res.setSum(rs.getDouble("s"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select ContraAgentID,"+agreementColumnName+", sum(sum) as s from  "+condition);
        sb.append("  where period = dbo.getCurrentPeriod()   ");
        sb.append("  group by ContraAgentID , "+agreementColumnName);
        return sb.toString();
    }
}
