package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/27/2015.
 */
public class GetSumFromInvoiceByLKPQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumFromInvoiceByLKPQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        Double res = rs.getDouble("sum");
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                              ");
        sb.append("         ContraAgentID                               ");
        sb.append("         ,AgreementID                     ");
        sb.append(" ,sum([SumWithPdv]) as sum                                  ");
        sb.append(" FROM [dbo].[calculateVolumeLKP]                 ");
        sb.append(" where                                               ");
        sb.append(" ContraAgentID = "+condition.getContraAgentID()+" and AgreementID = "+condition.getAgreementID()+" and period = dbo.getCurrentPeriod() ");
        sb.append(" group by ContraAgentID,AgreementID       ");
        return sb.toString();
    }
}
