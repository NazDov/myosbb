package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/27/2015.
 */
public class GetSumStockWithoutPerimission extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumStockWithoutPerimission(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("ss");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                                              ");
        sb.append(" sum([Sum08]) as ss                                                                   ");
        sb.append(" ,[ContraAgentID]                                                                    ");
        sb.append(" ,[AgreementID]                                                                      ");
        sb.append(" FROM [dbo].[CalcInvoiceStockWithoutPermition]                                       ");
        sb.append(" where                                                                               ");
        sb.append(" ContraAgentID = "+condition.getContraAgentID()+" and AgreementID = "+condition.getAgreementID()+" and period = dbo.getCurrentPeriod()           ");
        sb.append(" group by ContraAgentID,AgreementID                                                  ");
        return sb.toString();
    }
}
