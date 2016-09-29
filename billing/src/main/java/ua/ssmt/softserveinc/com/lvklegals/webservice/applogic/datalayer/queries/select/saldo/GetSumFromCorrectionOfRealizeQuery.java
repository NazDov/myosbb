package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/27/2015.
 */
public class GetSumFromCorrectionOfRealizeQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumFromCorrectionOfRealizeQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        Double res = (rs.getDouble("SumWatterSupply")+rs.getDouble("SumWatterOut"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                  ");
        sb.append("         [ContraAgentID]                                 ");
        sb.append("         ,sum([SumWatterSupply]) as SumWatterSupply      ");
        sb.append(" ,sum([SumWatterOut]) as SumWatterOut                    ");
        sb.append(" ,[AgreementID]                                          ");
        sb.append(" FROM [dbo].[DocCorrectionOfRealize]                     ");
        sb.append(" where                                                   ");
        sb.append(" ContraAgentID = "+condition.getContraAgentID()+" and AgreementID = "+condition.getAgreementID()+" and period = dbo.getCurrentPeriod() ");
        sb.append(" group by ContraAgentID,AgreementID                      ");
        return sb.toString();
    }
}
