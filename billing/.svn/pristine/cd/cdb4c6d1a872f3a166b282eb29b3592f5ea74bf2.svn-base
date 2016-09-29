package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.KindAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchAgreementByDepQuery extends AbstractSelectQuery<Agreement,AgreementCondition> {
    public SearchAgreementByDepQuery(AgreementCondition condition) {
        super(condition);
    }

    @Override
    protected Agreement parseResultSet(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("id"));
        res.setBeginDate(rs.getDate("DateBegin"));
        res.setEndDate(rs.getDate("DateEnd"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setKindAgreement(this.fillKindAgreement(rs));
        res.setTypeAgreement(this.fillTypeAgreement(rs));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        res.setDepartment(this.fillDepartment(rs));
        res.setActive(rs.getBoolean("IsActive"));
        return res;
    }

    private TypeAgreement fillTypeAgreement(ResultSet rs) throws SQLException {
        TypeAgreement res = new TypeAgreement();
        res.setId(rs.getLong("TypeAgreementID"));
        return res;
    }

    private KindAgreement fillKindAgreement(ResultSet rs) throws SQLException {
        KindAgreement res = new KindAgreement();
        res.setId(rs.getLong("KindAgreementID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]   ");
        sb.append(" ,[ContraAgentID]  ");
        sb.append(" ,[DateBegin]   ");
        sb.append(" ,[DateEnd]   ");
        sb.append(" ,[TypeAgreementID]  ");
        sb.append(" ,[KindAgreementID]  ");
        sb.append(" ,[Period]   ");
        sb.append(" ,[AgreementNumber]   ");
        sb.append(" ,[DepartmentID]   ");
        sb.append(" ,[IsActive]   ");
        sb.append(" FROM [dbo].[DocAgreement] where DepartmentID is not  null ");
        if (condition.getAgreementNumber() != null)
            sb.append(" and AgreementNumber = '"+condition.getAgreementNumber()+"'");
        if (condition.getContraAgentID() != null)
            sb.append(" and contraAgentID = "+condition.getContraAgentID());
        if (condition.getDepartamentID() != null)
            sb.append(" and departmentID = "+condition.getDepartamentID());
        if (condition.getStatus() != null) {
            if (condition.getStatus() == true)
                sb.append(" and isActive = 1");
            if (condition.getStatus() == false)
                sb.append(" and isActive = 0");
        }
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
     //   if (condition.getOnlyContraAgent() == true)
      //      sb.append(" and DepartmentID is null");

        return sb.toString();
    }
}
