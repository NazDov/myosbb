package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/27/2015.
 */
public class GetSumFromInvoiceRainQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumFromInvoiceRainQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        Double res = rs.getDouble("ss");
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select sum(sum) as ss from CalcInvoiceRainsInvoice  ");
        sb.append(" where ContraAgentID = "+condition.getContraAgentID()+" and AgreementID = "+condition.getAgreementID()+" and period = dbo.getCurrentPeriod() ");
        sb.append(" group by ContraAgentID,AgreementID   ");
        return sb.toString();
    }
}
