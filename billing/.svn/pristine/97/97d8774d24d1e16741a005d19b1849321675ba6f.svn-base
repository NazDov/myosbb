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
public class SearchCorrectionMaxIdQuery extends AbstractSelectQuery<Correction,CorrectionCondition> {
    public SearchCorrectionMaxIdQuery(CorrectionCondition condition) {
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
        res.setSumCorrection(rs.getDouble("SumCorrection"));
        res.setServicePayment(this.fillServicePayment(rs));
        res.setNotes(rs.getString("Notes"));
     //   res.setDepartmentOne(this.fillDepartmentOne(rs));
   //     res.setDepartmentTwo(this.fillDepartmentTwo(rs));
        res.setAgreementDepOne(this.fillAgreementDep1(rs));
        res.setAgreementDepTwo(this.fillAgreementDep2(rs));
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
    private ServicePayment fillServicePayment(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("ServicePaymentID"));
        return res;
    }

    private ContraAgent fillContraAgentOne(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("Contragent1ID"));
        //res.setShortName(rs.getString("ShortName"));
        return res;
    }

    private ContraAgent fillContraAgentTwo(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("Contragent2ID"));
        //res.setShortName(rs.getString("ShortName"));
        return res;
    }

    private Agreement fillAgreementOne(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DocNumber1"));
        //res.setShortName(rs.getString("ShortName"));
        return res;
    }

    private Agreement fillAgreementTwo(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DocNumber2"));
        //res.setShortName(rs.getString("ShortName"));
        return res;
    }



    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" cor.id   ");
        sb.append(" ,cor.DateCorrection  ");
        sb.append(" ,cor.Contragent1ID  ");
        sb.append(" ,cor.DocNumber1   ");
        sb.append(" ,cor.Contragent2ID  ");
        sb.append(" ,cor.DocNumber2   ");
        sb.append(" ,cor.SumCorrection   ");
        sb.append(" ,cor.ServicePaymentID  ");
        sb.append(" ,cor.Notes  ");
    //    sb.append(" ,cor.Department1 ");
   //     sb.append(" ,cor.Department2 ");
        sb.append(" ,cor.AgreementDep1 ");
        sb.append(" ,cor.AgreementDep2 ");
        sb.append(" FROM DocCorrection as cor ");
        sb.append(" WHERE cor.id in (SELECT max(id) FROM DocCorrection)  ");
        return sb.toString();
    }
}