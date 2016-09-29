package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoInvoiceSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.01.2016.
 */
public class AllPaymentQuery  extends AbstractSelectQuery<SaldoInvoiceSum,SumPaymentCondition>{
    public AllPaymentQuery(SumPaymentCondition condition) {
        super(condition);
    }

    @Override
    protected SaldoInvoiceSum parseResultSet(ResultSet rs) throws SQLException {
        SaldoInvoiceSum res = new SaldoInvoiceSum();
        res.setAgreement(new Agreement(rs.getLong("DocAgreementID")));
        res.getAgreement().setContraAgent(new ContraAgent(rs.getLong("contraAgentID")));
        res.setServicePaymentID(rs.getDouble("ServicePaymentID"));
        res.setSum(rs.getDouble("s"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT sum(sumPayment) as s,ServicePaymentID,contraAgentID,DocAgreementID  ");
        sb.append("          FROM [dbo].[DocPayment]     ");
        sb.append("  where                               ");
        sb.append(" DatePayment >="+getDateAsString(condition.getDate1())+"                     ");
        sb.append(" and DatePayment <=   "+getDateAsString(condition.getDate2())+"                 ");
        sb.append(" group by contraAgentID,DocAgreementID,ServicePaymentID");
        return sb.toString();
    }
}
