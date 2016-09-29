package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SumComission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 12/2/2015.
 */
public class GetSumByCommisQuery extends AbstractSelectQuery<Double,SumCondition> {
    public GetSumByCommisQuery(SumCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("s");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT                         ");
        sb.append("         [AgreementID]           ");
        sb.append(" ,[ContragentID]                 ");
        sb.append(" ,sum([SumCommission]) as s      ");

        sb.append(" FROM [dbo].[DocCommission]      ");
        sb.append(" where ContragentID = "+condition.getContraAgentID()+"          ");
        sb.append(" and AgreementID = "+condition.getAgreementID()+"             ");
        sb.append(" and period = dbo.getCurrentPeriod()     ");
        sb.append("  group by AgreementID,ContragentID       ");
        return sb.toString();
    }
}
