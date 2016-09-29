package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.correctionstockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.03.2016.
 */
public class AllCorrctionStockWithoutPermissionQuery extends AbstractSelectQuery<SaldoInvoiceSum,Void> {
    public AllCorrctionStockWithoutPermissionQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setSum(rs.getDouble("suma"));
        res.setAgreement(new Agreement(rs.getLong("agreementID")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("contrAgentID")));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select contrAgentID,agreementID,sum(suma) as suma from DocCorrectionForStockWithOutPermission  ");
        sb.append("         where   ");
        sb.append("  period = dbo.getCurrentPeriod()  ");
        sb.append("  group by contrAgentID,agreementID;  ");
        return sb.toString();
    }
}
