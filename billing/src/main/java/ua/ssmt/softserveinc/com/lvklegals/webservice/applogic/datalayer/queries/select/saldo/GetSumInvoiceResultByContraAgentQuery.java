package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/26/2015.
 */
public class GetSumInvoiceResultByContraAgentQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumInvoiceResultByContraAgentQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("s");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select sum(sum) as s from CalcInvoiceResults")
                .append(" where contraAgentID = " + condition.getContraAgentID())
                .append(" and period = dbo.getCurrentPeriod() and ContrAgentAgreementID="+condition.getAgreementID()+" and period = dbo.getCurrentPeriod() ")
                .append(" group by contraAgentID,ContrAgentAgreementID");
        return sb.toString();
    }
}
