package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vstoian on 16.11.2014.
 */
public class SearchCorrectionQuery extends AbstractSelectQuery<Correction,CorrectionCondition> {
    public SearchCorrectionQuery(CorrectionCondition condition) {
        super(condition);
    }

    @Override
    protected Correction parseResultSet(ResultSet rs) throws SQLException {
        Correction res = new Correction();
        res.setId(rs.getLong("id"));
        res.setDateCorrection(rs.getDate("DateCorrection"));
        res.setContraAgentOne(this.fillContraAgentOne(rs));
        res.setDocNumberOne(this.fillAgreementOne(rs));
        res.setContraAgentTwo(this.fillContraAgentTwo(rs));
        res.setDocNumberTwo(this.fillAgreementTwo(rs));
   //     res.setDepartmentOne(this.fillDepartmentOne(rs));
   //     res.setDepartmentTwo(this.fillDepartmentTwo(rs));
        res.setAgreementDepOne(this.fillAgreementDep1(rs));
        res.setAgreementDepTwo(this.fillAgreementDep2(rs));
        res.setSumCorrection(rs.getDouble("SumCorrection"));
        res.setServicePayment(this.fillServicePayment(rs));
        res.setServicePaymentsecond(this.fillServicePaymentSecond(rs));
        res.setInternalTurnOver(this.fillInternalTurnOver(rs));
        res.setPaymentType(this.fillPaymentType(rs));
        res.setNotes(rs.getString("Notes"));
        res.setPeriod(rs.getDate("period"));

        return res;
    }

    private ServicePayment fillServicePayment(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("ServicePaymentID"));

        return res;
    }

    private ServicePayment fillServicePaymentSecond(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("ServicePaymentIDSecond"));
        return res;
    }

    private InternalTurnOver fillInternalTurnOver(ResultSet rs) throws SQLException {
        InternalTurnOver res = new InternalTurnOver();
        res.setId(rs.getLong("internalTurnOverID"));
        return res;
    }

    private Department fillDepartmentOne (ResultSet rs)  throws SQLException{
        Department res = new Department();
        res.setId(rs.getLong("Department1"));
        return res;
    }

    private Department fillDepartmentTwo (ResultSet rs)  throws SQLException{
        Department res = new Department();
        res.setId(rs.getLong("Department2"));
        return res;
    }
    private ContraAgent fillContraAgentOne(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        ContraAgentProperty prop = new ContraAgentProperty();
        res.setId(rs.getLong("Contragent1ID"));
        return res;
    }

    private ContraAgent fillContraAgentTwo(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        ContraAgentProperty prop = new ContraAgentProperty();
        res.setId(rs.getLong("Contragent2ID"));
        return res;
    }

    private Agreement fillAgreementOne(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DocNumber1"));
        return res;
    }

    private Agreement fillAgreementTwo(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DocNumber2"));
        return res;
    }

    private Agreement fillAgreementDep1(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementDep1"));
        return res;
    }

    private Agreement fillAgreementDep2(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementDep2"));
        return res;
    }
    private PaymentType fillPaymentType(ResultSet rs) throws SQLException {
        PaymentType res = new PaymentType();
        res.setId(rs.getLong("TypePaymentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        /*sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" cor.id   ");
        sb.append(" ,cor.DateCorrection  ");
        sb.append(" ,cor.Contragent1ID  ");
        sb.append(" ,c1.ShortName  as ShortName1");
        sb.append(" ,cor.DocNumber1   ");
        sb.append(" ,a1.AgreementNumber as AgreementNumber1 ");
        sb.append(" ,cor.Contragent2ID  ");
        sb.append(" ,c2.ShortName as ShortName2 ");
        sb.append(" ,cor.DocNumber2   ");
        sb.append(" ,a2.AgreementNumber as AgreementNumber2 ");
        sb.append(" ,cor.SumCorrection   ");
        sb.append(" ,cor.ServicePaymentID  ");
        sb.append(" ,cor.Notes  ");
        sb.append(" ,cor.TypePaymentID  ");
        sb.append(" FROM DocCorrection as cor ");*/

        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" id   ");
        sb.append(" ,[DateCorrection]    ");
        sb.append(" ,[DocNumber1]     ");
        sb.append(" ,[Contragent1ID]    ");
        sb.append(" ,[DocNumber2]     ");
        sb.append(" ,[Contragent2ID]    ");
        sb.append(" ,[SumCorrection]    ");
        sb.append(" ,[ServicePaymentID]   ");
        sb.append(" ,[Notes]    ");
        sb.append(" ,[TypePaymentID]    ");
        sb.append(" ,[internalTurnOverID] ");
        sb.append(" ,[ServicePaymentIDSecond] ");
        sb.append(" ,[period] ");
/*        sb.append(" ,[Department1] ");
        sb.append(" ,[Department2] ");   */
        sb.append(" ,[AgreementDep1] ");
        sb.append(" ,[AgreementDep2] ");
        sb.append(" FROM [dbo].[DocCorrection] where 1=1   ");

        if (condition.getId() != null)
            sb.append(" and id = " + condition.getId());
        if (condition.getContraAgent1ID() != null)
            sb.append(" and contragent1ID = "+condition.getContraAgent1ID());
        if (condition.getContraAgent2ID() != null)
            sb.append(" and contragent2ID = "+condition.getContraAgent2ID());
        if (condition.getDocNumber1ID() != null)
            sb.append(" and DocNumber1 = '"+condition.getDocNumber1ID()+"'");
        if (condition.getDocNumber2ID() != null)
            sb.append(" and DocNumber2 = '"+condition.getDocNumber2ID()+"'");
        if (condition.getSumCorrection() != null)
            sb.append(" and SumCorrection = " + condition.getSumCorrection());
         if (condition.getDateStart() != null && condition.getDateEnd() != null)
             sb.append(" and DateCorrection BETWEEN " + this.getDateAsString(condition.getDateStart()) + " AND " + this.getDateAsString(condition.getDateEnd()) + " ");
        if (condition.getDepartmentID() != null )
            sb.append(" and AgreementDep1 = "+condition.getAgreementDepartmentID());


        return sb.toString();
    }
}