package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/26/2015.
 */
public class GetSumPayment  extends AbstractSelectQuery<Double,SumPaymentCondition> {
    public GetSumPayment(SumPaymentCondition condition) {
        super(condition);
    }

    @Override
    protected Double parseResultSet(ResultSet rs) throws SQLException {
        return rs.getDouble("s");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT sum(sumPayment) as s  ");
        sb.append("          FROM [dbo].[DocPayment]     ");
        sb.append("  where                               ");
        sb.append("         ContraAgentID = "+condition.getContraAgentID()+"           ");
        sb.append(" and                                 ");
        sb.append(" DatePayment >="+getDateAsString(condition.getDate1())+"                     ");
        sb.append(" and DatePayment <=   "+getDateAsString(condition.getDate2())+"                 ");
        sb.append(" and ServicePaymentID = "+condition.getServicePaymentID()+"            ");
        sb.append(" and ContraAgentID = "+condition.getContraAgentID());
        sb.append(" and DocAgreementID = "+condition.getAgreementID());
        sb.append(" group by contraAgentID,DocAgreementID");
        return sb.toString();
    }
}
