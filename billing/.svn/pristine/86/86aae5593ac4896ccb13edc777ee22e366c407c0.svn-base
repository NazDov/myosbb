package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/27/2015.
 */
public class GetSumFromInvoicePunkt33 extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumFromInvoicePunkt33(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return null;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                          ");
        sb.append("         [ContraAgentID]                         ");
        sb.append(" ,[AgreementId]                                  ");
        sb.append(" ,sum([SumWatterSupply]) as SumWatterSupply      ");
        sb.append(" ,sum([SumWatterOut]) as SumWatterOut            ");
        sb.append(" FROM [dbo].[AddingCalculationByP3.3]            ");
        sb.append(" where                                           ");
        sb.append(" ContraAgentID = "+condition.getContraAgentID()+" and AgreementId = "+condition.getAgreementID()+" and period = dbo.getCurrentPeriod()");
        sb.append(" group by ContraAgentID,AgreementId              ");
        return sb.toString();
    }
}
