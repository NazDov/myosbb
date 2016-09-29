package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchAgreementQuery extends AbstractSelectQuery<Agreement,AgreementCondition> {
    public  SearchAgreementQuery(AgreementCondition condition) {
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
        res.setAgreementPenyaProperty(this.fillAgreementPenyaProperty(rs));
        return res;
    }

    private AgreementPenyaProperty fillAgreementPenyaProperty(ResultSet rs) throws SQLException {
        AgreementPenyaProperty res = new AgreementPenyaProperty();
        res.setId(rs.getLong("PenyaId"));

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
        sb.append(" SELECT top 300 a.[id]   ");
        sb.append(" ,a.[ContraAgentID]  ");
        sb.append(" ,a.[DateBegin]   ");
        sb.append(" ,a.[DateEnd]   ");
        sb.append(" ,a.[TypeAgreementID]  ");
        sb.append(" ,a.[KindAgreementID]  ");
        sb.append(" ,a.[Period]   ");
        sb.append(" ,a.[AgreementNumber]   ");
        sb.append(" ,a.[DepartmentID]   ");
        sb.append(" ,a.[IsActive]   ");
        sb.append(" ,penyaprop.AgreementID  as propAgreementID ");
        sb.append(" ,dp.calcPenya  ");
        sb.append(" ,penyaprop.id as PenyaId  ");
        sb.append(" FROM [dbo].[DocAgreement] as a  ");
        sb.append(" left join  ( select max(id) as id, AgreementID,Max(Period) as period   from RegInfPenyaAgreement ");
        sb.append(" where Period <= dbo.getCurrentPeriod() ");
        sb.append(" group by AgreementID   ) as penyaprop on  penyaprop.AgreementID = a.id  ");
        sb.append(" left join RegInfPenyaAgreement as dp on penyaprop.id = dp.id where 1=1 ");
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
            sb.append(" and a.id = "+condition.getId());
        if (condition.getOnlyContraAgent() == true)
            sb.append(" and DepartmentID is null");
        return sb.toString();
    }
}
