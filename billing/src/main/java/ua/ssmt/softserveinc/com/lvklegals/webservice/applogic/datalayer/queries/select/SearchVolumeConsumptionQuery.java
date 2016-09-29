package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.VolumeConsumptionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vstoian on 16.11.2014.
 */
public class SearchVolumeConsumptionQuery extends AbstractSelectQuery<VolumeConsumption,VolumeConsumptionCondition> {
    public SearchVolumeConsumptionQuery(VolumeConsumptionCondition condition) {
        super(condition);
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
        res.setVolumeVPHotWatter(rs.getDouble("VolumeVPHotWatter"));
        res.setAgreement(this.fillAgreement(rs));
        res.setAgreementDep(this.fillAgreementDep(rs));
        res.setService(this.fillSerivce(rs));
        res.setDepartmentInput(this.fillDepartmentInput(rs));
        return res;
    }

    private Service fillSerivce(ResultSet rs) throws SQLException {
        return new Service(rs.getLong("ServiceID"));
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

    private DepartmentInput fillDepartmentInput(ResultSet rs) throws SQLException {
        DepartmentInput res = new DepartmentInput(rs.getLong("DepartmentInputID"));
        res.setHotWaterSupplier(new HotWaterSupplier(rs.getLong("hotSupplierID")));
        Input i = new Input();
        i.setService(this.fillSerivce(rs));

        res.setInput(i);

        Department d = new Department();
        d.setId(rs.getLong("DepartmentID"));
        d.setProperty(new DepartmentProperty());
        d.getProperty().setCategoryOfTariff(new CategoryOfTariff(rs.getLong("CategoryID")));
        res.setDepartment(d);
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT distinct  vc.id   ");
        sb.append(" ,vc.Period as Period  ");
        sb.append(" ,vc.ContragentID  ");
        sb.append(" ,c1.ShortName  as ShortName");
        sb.append(" ,vc.AgreementID as AgreementID ");
        sb.append(" ,da.AgreementNumber as AgreementNumber ");
        sb.append(" ,vc.DepartmentID   ");
        sb.append(" ,dep.Name as depName   ");
        sb.append(" ,vc.AgreementDepID  ");
        sb.append(" ,adep.AgreementNumber as AgreementDepNumber ");
        sb.append(" ,vc.DepartmentInputID ");
        sb.append(" ,vc.DepartmentInputID ");
        sb.append(" ,vc.InputID  ");
        sb.append(" ,vc.VolumeVp  ");
        sb.append(" ,vc.VolumeVv  ");
        sb.append(" ,i.ServiceID  ");
        sb.append(", dep.DepartmentID ");
        sb.append(",di.hotSupplierID ");
        sb.append(" ,dep.CategoryID  ");
        sb.append(" ,vc.VolumeVPHotWatter  ");
        sb.append(" FROM DocVolumeConsumption as vc ");
        sb.append(" left join RegInfKontragentProperty as c1 on  vc.ContragentID = c1.ContraAgentID");
        sb.append(" left join DocAgreement as da on  vc.AgreementID = da.id");
        sb.append(" left join RegInfDepartamentCharacters as dep on  vc.DepartmentID = dep.DepartmentID");
        sb.append(" left join DocAgreement as adep on  vc.AgreementDepID = adep.id");
        sb.append(" left join RefInputs as i on  vc.InputID = i.id");
        sb.append(" left join RegInfDepartsInputs as di on di.id = vc.DepartmentInputID ");
        sb.append(" where 1=1");

        if (condition.getAgreement() != null)
            sb.append(" and da.AgreementNumber = '"+condition.getAgreement().getAgreementNumber()+"'");
        if (condition.getContraAgentID() != null)
            sb.append(" and vc.ContragentID = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null)
            sb.append(" and vc.DepartmentID = "+condition.getDepartmentID());
        if (condition.getInputID() != null)
            sb.append(" and vc.InputID = "+condition.getInputID());
        if (condition.getPeriod() != null)
            sb.append(" and vc.Period = "+this.getDateAsString(condition.getPeriod()));
        if (condition.getAgreementDep() != null)
            sb.append(" and vc.AgreementDepID = "+condition.getAgreementDep().getId());
        if (condition.getVolumeVp() != null)
            sb.append(" and vc.VolumeVp = "+condition.getVolumeVp());
        if (condition.getVolumeVv() != null)
            sb.append(" and vc.VolumeVv = "+condition.getVolumeVv());

   /*     if (condition.getPeriod() != null) {
            Format formatter = new SimpleDateFormat("yyyy-MM-dd");
            String period = formatter.format(condition.getPeriod());
            sb.append(" and vc.Period = '" + period + "'");
        }
        if (condition.getInputID() != null){
            sb.append(" and vc.InputID = "+condition.getInputID());
        }*/

        return sb.toString();
    }
}