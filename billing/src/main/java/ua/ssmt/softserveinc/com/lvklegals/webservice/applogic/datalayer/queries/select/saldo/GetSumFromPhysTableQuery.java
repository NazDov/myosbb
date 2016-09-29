package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/27/2015.
 */
public class GetSumFromPhysTableQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumFromPhysTableQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        double res = 0;
        double sumVVVP= rs.getDouble("SumVP")+rs.getDouble("SumVV");
        double sumPilgAndSubsid = rs.getDouble("SumPilga")+rs.getDouble("SumSubsidya");
        res = sumVVVP - sumPilgAndSubsid;
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                                                  ");
        sb.append("  [ContragentID]                                         ");
        sb.append(" ,[ContrAgentAgreementID]                                ");
        sb.append(" ,sum([SumVP]) as SumVP                                  ");
        sb.append(" ,sum([SumVV]) as SumVV                                  ");
        sb.append(" ,sum([Pilga]) as SumPilga                               ");
        sb.append(" ,sum([Subsidya]) as SumSubsidya                         ");
        sb.append(" FROM [dbo].[DocPsycalPayers]                            ");
        sb.append(" where period = dbo.getCurrentPeriod()                   ");
        sb.append(" and ContragentID = "+condition.getContraAgentID()+" and ContrAgentAgreementID = "+condition.getAgreementID()+" and period = dbo.getCurrentPeriod()");
        sb.append(" group by ContragentID,ContrAgentAgreementID             ");
        return sb.toString();
    }
}
