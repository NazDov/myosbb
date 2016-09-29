package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByCapacityTube;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddingByCapacityCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.10.2014.
 */
public class SearchAddingByCapacityTubeQuery extends AbstractSelectQuery<AddingByCapacityTube,AddingByCapacityCondition> {
    public SearchAddingByCapacityTubeQuery(AddingByCapacityCondition condition) {
        super(condition);
    }

    @Override
    protected AddingByCapacityTube parseResultSet(ResultSet rs) throws SQLException {
        AddingByCapacityTube res = new AddingByCapacityTube();
        res.setId(rs.getLong("id"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setLabel(rs.getString("Label"));
        res.setVolumeWatterSupply(rs.getDouble("VolumeWatterSupply"));
        res.setVolumeWatterOut(rs.getDouble("VolumeWatterOut"));
        res.setSumWatterSupply(rs.getDouble("SumWatterSupply"));
        res.setSumWatterOut(rs.getDouble("SumWatterOut"));
        res.setAgreement(this.fillAgreement(rs));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }
    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }
    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" a.[id]    ");
        sb.append(" ,a.[ContraAgentID] ");
        sb.append(" ,a.[DepartmentID] ");
        sb.append(" ,a.[InputID]  ");
        sb.append(" ,a.[Label] ");
        sb.append(" ,a.[Period]  ");
        sb.append(" ,a.[VolumeWatterSupply] ");
        sb.append(" ,a.[VolumeWatterOut] ");
        sb.append(" ,a.[SumWatterSupply] ");
        sb.append(" ,a.[SumWatterOut] ");
        sb.append(" ,a.[AgreementID] ");
        sb.append(" ,agreement.AgreementNumber ");
        sb.append(" FROM [dbo].[DocAddingByCapacityTube]  as a ");
        sb.append(" left join DocAgreement as agreement ");
        sb.append("  on agreement.id = a.AgreementID ");
         sb.append("  where 1=1 ");

        if (condition.getId() != null)
            sb.append(" and a.id = "+condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and a.contraAgentID = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null)
            sb.append(" and a.departmentID = "+condition.getDepartmentID());
        return sb.toString();

    }
}
