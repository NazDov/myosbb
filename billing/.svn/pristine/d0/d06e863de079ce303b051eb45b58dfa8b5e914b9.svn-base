package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.stockwithoutpermission.paymentstockwithoutpermission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 18.01.2016.
 */
public class PaymentStockWithOutPermissionQuery extends AbstractSelectQuery<SaldoInvoiceSum,Void> {
    public PaymentStockWithOutPermissionQuery(Void condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setAgreement(new Agreement(rs.getLong("agreementID")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("contrAgentID")));
        res.setSum(rs.getDouble("suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                  ");
        sb.append("  [contrAgentID]                                         ");
        sb.append(" ,[agreementID]                                          ");
        sb.append(" ,sum([suma]) as suma                                    ");
        sb.append(" FROM [dbo].[DocCorrectionForStockWithOutPermission]     ");
        sb.append(" where                                                   ");
        sb.append("         period = dbo.getCurrentPeriod()                 ");
        sb.append(" group by contrAgentID,agreementID                       ");
        return sb.toString();
    }
}
