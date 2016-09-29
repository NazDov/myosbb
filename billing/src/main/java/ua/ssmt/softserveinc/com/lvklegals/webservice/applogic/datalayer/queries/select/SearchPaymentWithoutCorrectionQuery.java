package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/23/2015.
 */
public class SearchPaymentWithoutCorrectionQuery extends AbstractSelectQuery<Payment, PaymentCondition>  {
    public SearchPaymentWithoutCorrectionQuery(PaymentCondition condition) {
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
        res.setContraAgent(fillContraAgent(rs));
        res.setAgreement(fillAgreement(rs));
        res.setBank(fillBanks(rs));
        res.setPaymentType(fillPaymentType(rs));
        res.setServicePayment(fillServicePayment(rs));
        res.setOwnerBankAccount(fillOwnerBankAccount(rs));
        return res;
    }

    private OwnerBankAccount fillOwnerBankAccount(ResultSet rs) throws SQLException {
        OwnerBankAccount res = new OwnerBankAccount(rs.getLong("OwnerBankAccountID"));
        return res;
    }

    private ServicePayment fillServicePayment (ResultSet rs) throws SQLException{
        ServicePayment res = new ServicePayment(rs.getLong("ServicePaymentID"));
        return  res;
    }
    private PaymentType fillPaymentType (ResultSet rs) throws SQLException{
        PaymentType res = new PaymentType(rs.getLong("PaymentTypeID"));
        return  res;
    }

    private Bank fillBanks(ResultSet rs) throws SQLException {
        Bank res = new Bank(rs.getLong("BankID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DocAgreementID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT   p.id   ");
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
        sb.append(" left join DocAgreement as a on  ");
        sb.append(" p.DocAgreementID = a.id   ");
        sb.append(" where 1=1 ");
        if (condition.getCorrectionId() != null)
            sb.append(" and p.CorrectionID = "+condition.getCorrectionId());
       if (condition.getPaymentTypeID() != null) {
            if (condition.getPaymentTypeID() == 1L)
                sb.append(" and p.PaymentTypeID = 1 ");
            if (condition.getPaymentTypeID() != 1L)
                sb.append(" and p.PaymentTypeID <> 1");
        }
        if (condition.getPaymentDate() != null)
            sb.append(" and p.DatePayment = "+getDateAsString(condition.getPaymentDate()));

        if (condition.getDateBegin() != null && condition.getDateEnd() != null)
        sb.append(" and p.DatePayment BETWEEN " + this.getDateAsString(condition.getDateBegin()) + " AND " + this.getDateAsString(condition.getDateEnd()) + " ");

        if (condition.getContraAgentID() != null)
        sb.append(" and p.ContraAgentID = "+condition.getContraAgentID());
        if (condition.getAgreementID() != null)
            sb.append(" and p.DocAgreementID = "+condition.getAgreementID());
        if (condition.getServicePaymentID() != null)
            sb.append(" and p.ServicePaymentID = "+condition.getServicePaymentID());
        if (condition.getAgreementNumber() != null)
            sb.append(" and a.AgreementNumber like '%"+condition.getAgreementNumber()+"%'");
        if (condition.getnSum()!=null)
            sb.append(" and p.SumPayment = "+condition.getnSum());
        if (condition.getAccountOwner() != null)
            sb.append(" and p.OwnerBankAccountID = "+condition.getAccountOwner());
        sb.append(" and CorrectionID is null");
        if (condition.getId() != null)
            sb.append(" and p.id = "+condition.getId());
        //(sb.toString());
        return sb.toString();
    }
}
