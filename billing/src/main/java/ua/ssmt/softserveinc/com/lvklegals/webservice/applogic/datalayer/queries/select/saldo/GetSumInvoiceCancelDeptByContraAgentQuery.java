package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceWithServiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.03.2016.
 */
public class GetSumInvoiceCancelDeptByContraAgentQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumInvoiceCancelDeptByContraAgentQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("suma");
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
        sb.append(" and [contrAgentID] = "+condition.getContraAgentID());
        sb.append(" and [agreementId] = "+condition.getAgreementID());
        sb.append("  group by contrAgentID,agreementId,serviceID  ");
        return sb.toString();
    }
}
