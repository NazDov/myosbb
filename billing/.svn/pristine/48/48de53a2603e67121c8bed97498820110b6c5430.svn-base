package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingCalculationByP3;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ReasonAddingByCapacityTube;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddingCalculationByP3Condition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchAddingCalculationByP3_3Query extends AbstractSelectQuery<AddingCalculationByP3,AddingCalculationByP3Condition> {

    public SearchAddingCalculationByP3_3Query(AddingCalculationByP3Condition condition) {
        super(condition);
    }

    @Override
    protected AddingCalculationByP3 parseResultSet(ResultSet rs) throws SQLException {
        AddingCalculationByP3 res = new AddingCalculationByP3();
        res.setID(rs.getLong("ID"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setNumberDocumentReason(rs.getString("NumberDocumentReason"));
        res.setReason(this.fillReason(rs));
        res.setPeriod(rs.getDate("period"));
        res.setVolumeWatterSupply(rs.getDouble("VolumeWatterSupply"));
        res.setVolumeWatterOut(rs.getDouble("VolumeWatterOut"));
        res.setSumWatterSupply(rs.getDouble("SumWatterSupply"));
        res.setSumWatterOut(rs.getDouble("SumWatterOut"));
        res.setLabel(rs.getString("Label"));
        res.setReasonDate(rs.getDate("ReasonDate"));
        res.setDateCalculation(rs.getInt("CountDayToCalculate"));
        res.setReasonDate(rs.getDate("ReasonDate"));
        res.setAgreement(this.fillAgreement(rs));
        return res;
    }

    private ReasonAddingByCapacityTube fillReason(ResultSet rs) throws SQLException {
        ReasonAddingByCapacityTube res = new ReasonAddingByCapacityTube();
        res.setId(rs.getLong("ReasonID"));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementId"));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }
    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res =  new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }
    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return  res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" a.[id]  ");
        sb.append(" ,a.[ContraAgentID] ");
        sb.append(" ,a.[DepartmentID] ");
        sb.append(" ,a.[InputID] ");
        sb.append(" ,a.[VolumeWatterSupply] ");
        sb.append(" ,a.[VolumeWatterOut] ");
        sb.append(" ,a.[SumWatterSupply] ");
        sb.append(" ,a.[SumWatterOut] ");
        sb.append(" ,a.[CountDayToCalculate] ");
        sb.append(" ,a.[ReasonID]  ");
        sb.append(" ,a.[NumberDocumentReason] ");
        sb.append(" ,a.[Label] ");
        sb.append(" ,a.[period] ");
        sb.append(" ,a.[ReasonDate] ");
        sb.append(" ,a.[AgreementId] ");
        sb.append(" ,agreement.AgreementNumber ");
        sb.append(" FROM [dbo].[AddingCalculationByP3.3]  as  a ");
        sb.append(" left join DocAgreement  as agreement ");
        sb.append("  on a.AgreementId = agreement.id ");
        sb.append(" where 1=1  ");

        if (condition.getId() != null)
            sb.append(" and a.id = "+condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and a.contraAgentID = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null)
            sb.append(" and a.departmentID = "+condition.getDepartmentID());
        if (condition.getPeriod() != null)
            sb.append(" and a.Period = "+condition.getPeriod());
        return sb.toString();
    }
}
