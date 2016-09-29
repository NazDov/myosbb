package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.Format;
import java.text.SimpleDateFormat;

/**
 * Created by vstoian on 16.11.2014.
 */
public class SearchPaymentQuery extends AbstractSelectQuery<Payment, PaymentCondition> {
    public SearchPaymentQuery(PaymentCondition condition) {
        super(condition);
    }

    @Override
    protected Payment parseResultSet(ResultSet rs) throws SQLException {
        Payment res = new Payment();
        res.setId(rs.getLong("id"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setAgreement(this.fillAgreement(rs));
        res.setSumPayment(rs.getDouble("SumPayment"));
        res.setServicePayment(this.fillServicePayment(rs));
        res.setNumberDocPayment(rs.getString("NumberDocPayment"));
        res.setPaymentType(this.fillPaymentType(rs));
        res.setReason(rs.getString("Reason"));
        res.setBank(this.fillBank(rs));
        res.setBankAccount(rs.getString("BankAccount"));
        res.setDatePayment(rs.getDate("DatePayment"));
        res.setIsAutomated(rs.getInt("IsAutomated"));
        res.setOwnerBankAccount(this.fillOwnerBankAccount(rs));
        res.setCorrection(this.fillCorrection(rs));
   //     res.setDepartment(this.fillDep(rs));
        res.setAgreementDep(this.fillDepAgreement(rs));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DocAgreementID"));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }

    private Correction fillCorrection(ResultSet rs) throws SQLException {
        Correction res = new Correction();
        res.setId(rs.getLong("CorrectID"));
        return res;
    }
    private Department fillDep(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }
    private Agreement fillDepAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementDepId"));
        return res;
    }

    private ServicePayment fillServicePayment(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("ServicePaymentID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        //res.setShortName(rs.getString("ShortName"));
        return res;
    }

    private PaymentType fillPaymentType(ResultSet rs) throws SQLException {
        PaymentType res = new PaymentType();
        res.setId(rs.getLong("PaymentTypeID"));
        return res;
    }

    private Bank fillBank(ResultSet rs) throws SQLException {
        Bank res = new Bank();
        res.setId(rs.getLong("BankID"));
        res.setName(rs.getString("BankName"));
        return res;
    }

    private OwnerBankAccount fillOwnerBankAccount(ResultSet rs) throws SQLException {
        OwnerBankAccount res = new OwnerBankAccount();
        res.setId(rs.getLong("OwnerBankAccountID"));
        res.setOwnerBankAccount(rs.getString("ownerBankAccount"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  p.id   ");
        sb.append(" ,p.ContraAgentID  ");
        sb.append(" ,c.ShortName  ");
        sb.append(" ,p.DocAgreementID   ");
        sb.append(" ,a.AgreementNumber   ");
        sb.append(" ,p.SumPayment   ");
        sb.append(" ,p.ServicePaymentID  ");
        sb.append(" ,p.NumberDocPayment  ");
        sb.append(" ,p.PaymentTypeID  ");
        sb.append(" ,p.Reason   ");
        sb.append(" ,p.BankID   ");
        sb.append(" ,b.BankName   ");
        sb.append(" ,p.BankAccount   ");
        sb.append(" ,p.DatePayment   ");
        sb.append(" ,p.IsAutomated   ");
      //  sb.append(" ,p.DepartmentID   ");
        sb.append(" ,p.AgreementDepId   ");
        sb.append(" ,p.OwnerBankAccountID   ");
        sb.append(" ,ba.Name as ownerBankAccount  ");
        sb.append(" ,p.CorrectionID as CorrectID  ");
        sb.append(" FROM DocPayment as p ");
        sb.append(" left join RefBanks as b on  p.BankID = b.id ");
        sb.append(" inner join RegInfKontragentProperty as c on  p.ContraAgentID = c.ContraAgentID");
        sb.append(" and c.id in (select max(id) from RegInfKontragentProperty pp where pp.contraagentID=c.ContraAgentID)");
        sb.append(" inner join DocAgreement as a on  p.DocAgreementID = a.id");
        sb.append(" left join refOwnerBankAccount as ba on  p.OwnerBankAccountID = ba.id");
        sb.append(" where 1=1 ");
        if (condition.getCorrectionId() != null)
            sb.append(" and p.CorrectionID = " + condition.getCorrectionId());
        if (condition.getId() != null)
            sb.append(" and p.id = " + condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and p.contraAgentID = " + condition.getContraAgentID());
        if (condition.getReason() != null)
            sb.append(" and p.Reason = '" + condition.getReason() + "'");
        if (condition.getDocNumber() != null)
            sb.append(" and p.NumberDocPayment = '" + condition.getDocNumber() + "'");
        if (condition.getDateBegin() != null) {
            Format formatter = new SimpleDateFormat("yyyy-MM-dd");
            String beginDate = formatter.format(condition.getDateBegin());
            sb.append(" and p.DatePayment >= '" + beginDate + "'");
        }
        if (condition.getDateEnd() != null) {
            Format formatter = new SimpleDateFormat("yyyy-MM-dd");
            String endDate = formatter.format(condition.getDateEnd());
            sb.append(" and p.DatePayment <= '" + endDate + "'");
        }
        if (condition.getPaymentTypeID() != null) {
            sb.append(" and PaymentTypeID = " + condition.getPaymentTypeID());
        }
        if (condition.getPaymentDate() != null)
            sb.append(" and  p.DatePayment = " + getDateAsString(condition.getPaymentDate()));
        if (condition.getContraAgentID() != null)
            sb.append(" and p.ContraAgentID = " + condition.getContraAgentID());
        if (condition.getAgreementNumber() != null)
            sb.append(" and a.AgreementNumber = '" + condition.getAgreementNumber() + "'");
        if (condition.getServicePaymentID() != null)
            sb.append(" and p.ServicePaymentID = " + condition.getServicePaymentID());
        if (condition.getAccountOwner() != null)
            sb.append(" and ba.id = " + condition.getAccountOwner());
        if (condition.getnSum() != null)
            sb.append(" and p.[SumPayment] = " + condition.getnSum());

        if (condition.getPaymentTypeID() != null) {
            if (condition.getPaymentTypeID() == 1L)
                sb.append(" and p.PaymentTypeID = 1 ");
            if (condition.getPaymentTypeID() != 1L)
                sb.append(" and p.PaymentTypeID <> 1");
        }

        if (condition.getAgreementDepartmentID() != null)
            sb.append(" and AgreementDepId = "+condition.getAgreementDepartmentID());


        //(sb.toString());
        return sb.toString();
    }
}