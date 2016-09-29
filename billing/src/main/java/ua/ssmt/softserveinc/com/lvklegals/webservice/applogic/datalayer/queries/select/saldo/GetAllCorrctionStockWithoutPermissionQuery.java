package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.03.2016.
 */
public class GetAllCorrctionStockWithoutPermissionQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetAllCorrctionStockWithoutPermissionQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("suma");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select contrAgentID,agreementID,sum(suma) as suma from DocCorrectionForStockWithOutPermission  ");
        sb.append("         where   ");
        sb.append(" contrAgentID = "+condition.getContraAgentID());
        sb.append(" and agreementID = "+condition.getAgreementID());
        sb.append("  and period = dbo.getCurrentPeriod()  ");
        sb.append("  group by contrAgentID,agreementID;  ");
        return sb.toString();
    }
}
