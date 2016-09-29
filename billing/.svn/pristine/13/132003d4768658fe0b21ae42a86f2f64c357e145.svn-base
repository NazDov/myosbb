package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentcommission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.03.2016.
 */
public class AllDepartmentCommissionQuery extends AbstractSelectQuery<DepartmentPaymentSum,Void> {
    public AllDepartmentCommissionQuery(Void condition) {
        super(condition);
    }

    @Override
    protected DepartmentPaymentSum parseResultSet(ResultSet rs) throws SQLException {
        DepartmentPaymentSum res = new DepartmentPaymentSum();
        res.setDepartmentAgreement(new Agreement(rs.getLong("departmentAgreementId")));
        res.getDepartmentAgreement().setDepartment(new Department(rs.getLong("departmentAgreementId")));
        res.setSum(rs.getDouble("Suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select DepartamentID,departmentAgreementId,sum(SumPayment) as Suma from DocCommission  ");
        sb.append(" where period = dbo.getCurrentPeriod() ");
        sb.append(" group by DepartamentID,departmentAgreementId  ");
        return sb.toString();
    }
}
