package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentDepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class SearchPaymentDepartmentQuery extends AbstractSelectQuery<PaymentDepartment, PaymentDepartmentCondition> {
    public SearchPaymentDepartmentQuery(PaymentDepartmentCondition condition) {
        super(condition);
    }

    @Override
    protected PaymentDepartment parseResultSet(ResultSet rs) throws SQLException {
        PaymentDepartment res = new PaymentDepartment();
        res.setId(rs.getLong("id"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDatePayment(rs.getDate("DatePayment"));
        res.setAgreement(this.fillAgreement(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setSumPayment(rs.getDouble("SumPayment"));
        res.setServicePayment(this.fillServicePayment(rs));
        res.setPaymentType(this.fillPaymentType(rs));
        res.setNote(rs.getString("Note"));
        res.setPeriod(rs.getDate("period"));
        res.setContragentAgreement(fillAgreementContrAgent(rs));
        return res;
    }

    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
  //      res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }
    private Agreement fillAgreementContrAgent(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("ContrAgentAgreementID"));
//        res.setAgreementNumber(rs.getString("ContrAgentNumer"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
//        res.getProperty().setName(rs.getString("depName"));
        return res;
    }
    private ServicePayment fillServicePayment(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("servicePaymentId"));
        return res;
    }
    private PaymentType fillPaymentType(ResultSet rs) throws SQLException {
        PaymentType res = new PaymentType();
        res.setId(rs.getLong("paymentTypeId"));
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
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" p.id   ");
        sb.append(" ,p.ContraAgentID  ");
        sb.append(" ,p.DatePayment   ");
        sb.append(" ,p.AgreementID   ");
 //       sb.append(" ,a.AgreementNumber   ");
        sb.append(" ,p.DepartmentID   ");
//        sb.append(" ,d.Name as depName   ");
        sb.append(" ,p.SumPayment   ");
        sb.append(" ,p.Note  ");
        sb.append(" ,p.period  ");
        sb.append(" ,p.paymentTypeId  ");
        sb.append(" ,p.servicePaymentId  ");
        sb.append(" ,p.ContrAgentAgreementID  ");
  //      sb.append(" ,a.AgreementNumber  as ContrAgentNumer  ");
        sb.append(" FROM DocPaymentDepartment as p where 1=1 ");
     //   sb.append(" inner join DocAgreement as a on  p.AgreementID = a.id");
    //    sb.append(" inner join DocAgreement as b on  p.ContrAgentAgreementID = b.id");
//        sb.append(" inner join RegInfDepartamentCharacters as d on  p.DepartmentID = d.DepartmentID");

        if (condition.getId() != null)
            sb.append(" and p.id = "+condition.getId());
        if (condition.getContraAgentID() != null)
            sb.append(" and p.contraAgentID = "+condition.getContraAgentID());
        if (condition.getDateBegin() != null && condition.getDateEnd() != null)
            sb.append(" and p.DatePayment BETWEEN " + this.getDateAsString(condition.getDateBegin()) + " AND " + this.getDateAsString(condition.getDateEnd()) + " ");
        if (condition.getAgreementNumber() != null)
            sb.append(" and a.AgreementNumber  like '%"+condition+"%'");

        return sb.toString();
    }
}