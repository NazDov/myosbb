package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CommissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.Format;
import java.text.SimpleDateFormat;

/**
 * Created by vstoian on 27.01.2015.
 */
public class SearchCommissionQuery extends AbstractSelectQuery<Commission,CommissionCondition> {
    public SearchCommissionQuery(CommissionCondition condition) {
        super(condition);
    }

    @Override
    protected Commission parseResultSet(ResultSet rs) throws SQLException {
        Commission res = new Commission();
        res.setId(rs.getLong("id"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setAgreement(this.fillAgreement(rs));
        res.setAgreementDep(this.fillAgreementDep(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setDateComission(rs.getDate("DateCommission"));
        res.setSumCommission(rs.getDouble("SumCommission"));
        res.setSumPayment(rs.getDouble("SumPayment"));
        res.setPeriod(rs.getDate("period"));
        res.setNotes(rs.getString("Notes"));
        res.setAlgorithm(this.fillAlgorithm(rs));
        res.setServicePayment(fillServicePayment(rs));
        res.setIsAutomated(rs.getInt("IsAutomated"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }

    private Agreement fillAgreementDep (ResultSet rs) throws SQLException{
        Agreement res = new Agreement();
        res.setId(rs.getLong("departmentAgreementId"));
        res.setAgreementNumber(rs.getString("AgreementDepNumber"));
        return res;
    }

    private ServicePayment fillServicePayment (ResultSet rs ) throws SQLException{
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("paymentService"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartamentID"));
        return res;
    }

    private Algorithm fillAlgorithm(ResultSet rs) throws SQLException {
        Algorithm res = new Algorithm();
        res.setId(rs.getLong("Algorithm"));
        res.setName(rs.getString("Name"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContragentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" c.id   ");
        sb.append(" ,c.ContragentID  ");
        sb.append(" ,c.DepartamentID  ");
        sb.append(" ,c.AgreementID   ");
        sb.append(" ,c.SumPayment   ");
        sb.append(" ,c.SumCommission   ");
        sb.append(" ,c.DateCommission  ");
        sb.append(" ,c.Notes   ");
        sb.append(" ,c.Algorithm   ");
        sb.append(" ,c.period   ");
        sb.append(" ,c.paymentService ");
        sb.append(" ,c.departmentAgreementId ");
        sb.append(" ,c.isAutomated ");
        sb.append(" ,a.Name  ");
        sb.append(" ,da.AgreementNumber as AgreementNumber ");
        sb.append(" ,adep.AgreementNumber as AgreementDepNumber ");
        sb.append(" FROM DocCommission as c ");
        sb.append(" left join RefCalcAlgorithm as a on c.Algorithm = a.id");
        sb.append(" left join DocAgreement as da on  c.AgreementID = da.id");
        sb.append(" left join DocAgreement as adep on  c.departmentAgreementId = adep.id  where 1=1" );
        if (condition.getContraAgentID() != null)
            sb.append(" and c.contragentID = "+condition.getContraAgentID());
        if (condition.getAgreementID() != null)
            sb.append(" and c.AgreementID = "+ condition.getAgreementID());
        if (condition.getDepartmentID() != null)
            sb.append(" and c.DepartamentID = "+ condition.getDepartmentID());

        if (condition.getNotes() != null && !condition.getNotes().isEmpty())
            sb.append(" and c.Notes = '" + condition.getNotes()+"'");
        if (condition.getDateCommission() != null) {
            Format formatter = new SimpleDateFormat("yyyy-MM-dd");
            String date = formatter.format(condition.getDateCommission());
            sb.append(" and c.DateCommission = '"+ date +"'");
        }
        if (condition.getAlgorithm() != null)
            sb.append(" and c.algorithm = " + condition.getAlgorithm());
        if (condition.getSumPayment() != null)
            sb.append(" and c.SumPayment = " + condition.getSumPayment());
        if (condition.getSumCommission() != null)
            sb.append(" and c.SumCommission = " + condition.getSumCommission());
        if (condition.getPeriod() != null)
            sb.append(" and c.period = "+this.getDateAsString(condition.getPeriod()));
        if (condition.getId() != null)
            sb.append(" and c.id = "+condition.getId());
        if (condition.getDepartmentAgreementID() != null)
            sb.append(" and departmentAgreementId = "+condition.getDepartmentAgreementID());


        return sb.toString();
    }
}