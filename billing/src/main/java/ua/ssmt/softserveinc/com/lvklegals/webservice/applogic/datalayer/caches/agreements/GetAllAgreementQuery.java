package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.KindAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 24.12.2015.
 */
public class GetAllAgreementQuery extends AbstractSelectQuery<Agreement,Void>{
    public GetAllAgreementQuery(Void condition) {
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
        sb.append(" select * from DocAgreement ");
        sb.append(" order by DateBegin desc  ");
        return sb.toString();
    }
}
