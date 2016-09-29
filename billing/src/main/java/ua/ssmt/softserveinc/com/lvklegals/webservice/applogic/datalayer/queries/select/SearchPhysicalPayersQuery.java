package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PhysicalPayersCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/23/2015.
 */
public class SearchPhysicalPayersQuery extends AbstractSelectQuery<PhysicalPayer, PhysicalPayersCondition>  {
    public SearchPhysicalPayersQuery(PhysicalPayersCondition condition) {
        super(condition);
    }

    @Override
    protected PhysicalPayer parseResultSet(ResultSet rs) throws SQLException {
        PhysicalPayer res = new PhysicalPayer();
        res.setId(rs.getLong("id"));
        res.setPilga(rs.getDouble("Pilga"));
        res.setSubs(rs.getDouble("Subsidya"));
        res.setSumVv(rs.getDouble("SumVV"));
        res.setSumVp(rs.getDouble("SumVP"));
        res.setVolumeVp(rs.getDouble("VolumeVP"));
        res.setVolumeVv(rs.getDouble("VolumeVV"));
        res.setPeriod(rs.getDate("period"));
        res.setContraAgent(fillContraAgent(rs));
        res.setAgreement(fillAgreement(rs));

        return res;
    }


    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContragentID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("ContrAgentAgreementID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT   p.id   ");
        sb.append(" ,p.ContragentID  ");
        sb.append(" ,p.ContrAgentAgreementID   ");
        sb.append(" ,p.VolumeVP   ");
        sb.append(" ,p.VolumeVV  ");
        sb.append(" ,p.SumVP  ");
        sb.append(" ,p.SumVV  ");
        sb.append(" ,p.Pilga   ");
        sb.append(" ,p.Subsidya   ");
        sb.append(" ,p.period   ");
        sb.append(" FROM DocPsycalPayers as p ");
        sb.append(" left join DocAgreement as a on  ");
        sb.append(" p.ContrAgentAgreementID = a.id   ");
        sb.append(" where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and p.[id] = "+condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and p.[ContragentID] = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and p.period = "+this.getDateAsString(condition.getPeriod()));
        return sb.toString();
    }
}
