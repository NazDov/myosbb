package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;
/**
 * Created by vostap on 6/19/2015.
 */
public class SearchPaymentClearQuery extends AbstractSelectQuery<Payment, PaymentCondition> {

    public SearchPaymentClearQuery(PaymentCondition condition) {
        super(condition);
    }

    @Override
    protected Payment parseResultSet(ResultSet rs) throws SQLException {
        Payment res = new Payment();
        res.setId(rs.getLong("id"));
        res.setSumPayment(rs.getDouble("SumPayment"));
        res.setNumberDocPayment(rs.getString("NumberDocPayment"));
        res.setReason(rs.getString("Reason"));
        res.setBankAccount(rs.getString("BankAccount"));
        res.setDatePayment(rs.getDate("DatePayment"));
        res.setIsAutomated(rs.getInt("IsAutomated"));
        return res;
    }



    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  p.id   ");
        sb.append(" ,p.ContraAgentID  ");
        sb.append(" ,p.DocAgreementID   ");
        sb.append(" ,p.SumPayment   ");
        sb.append(" ,p.ServicePaymentID  ");
        sb.append(" ,p.NumberDocPayment  ");
        sb.append(" ,p.PaymentTypeID  ");
        sb.append(" ,p.Reason   ");
        sb.append(" ,p.BankID   ");
        sb.append(" ,p.BankAccount   ");
        sb.append(" ,p.DatePayment   ");
        sb.append(" ,p.IsAutomated   ");
        sb.append(" ,p.OwnerBankAccountID   ");
        sb.append(" ,p.CorrectionID as correctionId  ");
        sb.append(" FROM DocPayment as p ");
        sb.append(" where 1=1 ");
        if (condition.getCorrectionId() != null)
            sb.append(" and p.CorrectionID = "+condition.getCorrectionId());

        //(sb.toString());
        return sb.toString();
    }
}
