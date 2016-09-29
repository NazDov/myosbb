package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.VolumeConsumptionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.Format;
import java.text.SimpleDateFormat;

/**
 * Created by vostap on 6/1/2015.
 */
public class GetAllDocumentVolumeLKPPQuery extends AbstractSelectPreCompileQuery<VolumeConsumption,VolumeConsumptionCondition> {

    public GetAllDocumentVolumeLKPPQuery(Connection connection) {
        super(connection,null);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {

    }

    @Override
    protected VolumeConsumption parseResultSet(ResultSet rs) throws SQLException {
        VolumeConsumption res = new VolumeConsumption();
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("Period"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setVolumeVp(rs.getDouble("VolumeVp"));
        res.setVolumeVv(rs.getDouble("VolumeVv"));
        res.setAgreement(this.fillAgreement(rs));
        res.setAgreementDep(this.fillAgreementDep(rs));
        res.setDate(rs.getDate("Date"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }

    private Agreement fillAgreementDep(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementDepID"));
        res.setAgreementNumber(rs.getString("AgreementDepNumber"));
        return res;
    }
    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContragentID"));
        //res.setShortName(rs.getString("ShortName"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" vc.id   ");
        sb.append(" ,vc.Period as Period  ");
        sb.append(" ,vc.Date as Date  ");
        sb.append(" ,vc.ContragentID  ");
        sb.append(" ,c1.ShortName  as ShortName");
        sb.append(" ,vc.AgreementID as AgreementID ");
        sb.append(" ,da.AgreementNumber as AgreementNumber ");
        sb.append(" ,vc.DepartmentID   ");
        sb.append(" ,dep.Name as depName   ");
        sb.append(" ,vc.AgreementDepID  ");
        sb.append(" ,adep.AgreementNumber as AgreementDepNumber ");
        sb.append(" ,vc.InputID  ");
        sb.append(" ,vc.VolumeVp  ");
        sb.append(" ,vc.VolumeVv  ");
        sb.append(" FROM DocVolumeConsumption as vc ");
        sb.append(" inner join RegInfKontragentProperty as c1 on  vc.ContragentID = c1.ContraAgentID");
        sb.append(" left join DocAgreement as da on  vc.AgreementID = da.id");
        sb.append(" left join RegInfDepartamentCharacters as dep on  vc.DepartmentID = dep.id");
        sb.append(" left join DocAgreement as adep on  vc.AgreementDepID = adep.id");
        sb.append(" left join RefInputs as i on  vc.InputID = i.id");

        if (condition.getAgreement() != null)
            sb.append(" and da.AgreementNumber = '"+condition.getAgreement().getAgreementNumber()+"'");
        if (condition.getContraAgentID() != null)
            sb.append(" and vc.ContragentID = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null)
            sb.append(" and vc.DepartmentID = "+condition.getDepartmentID());
        if (condition.getAgreementDep() != null)
            sb.append(" and vc.AgreementDepID = "+condition.getAgreementDep().getId());
        if (condition.getVolumeVp() != null)
            sb.append(" and vc.VolumeVp = "+condition.getVolumeVp());
        if (condition.getVolumeVv() != null)
            sb.append(" and vc.VolumeVv = "+condition.getVolumeVv());
        if (condition.getDate() != null) {
            Format formatter = new SimpleDateFormat("yyyy-MM-dd");
            String dateV = formatter.format(condition.getDate());
            sb.append(" and vc.Date = '" + dateV + "'");
        }
        if (condition.getPeriod() != null) {
            Format formatter = new SimpleDateFormat("yyyy-MM-dd");
            String period = formatter.format(condition.getPeriod());
            sb.append(" and vc.Period = '" + period + "'");
        }
        if (condition.getInputID() != null){
            sb.append(" and vc.InputID = "+condition.getInputID());
        }
        return sb.toString();
    }
}
