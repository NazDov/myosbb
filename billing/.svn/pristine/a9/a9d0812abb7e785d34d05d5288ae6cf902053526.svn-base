package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.paymentdepartment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.03.2016.
 */
public class DepartmentDepartmentPaymentQuery extends AbstractSelectQuery<DepartmentPaymentSum,Void> {
    public DepartmentDepartmentPaymentQuery(Void condition) {
        super(condition);
    }

    @Override
    protected DepartmentPaymentSum parseResultSet(ResultSet rs) throws SQLException {
        DepartmentPaymentSum res = new DepartmentPaymentSum();
        res.setDepartmentAgreement(new Agreement());
        res.getDepartmentAgreement().setDepartment(new Department(rs.getLong("DepartmentID")));
        res.setSum(rs.getDouble("Suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select DepartmentID,sum(SumPayment) as Suma from DocPaymentDepartment   ");
        sb.append(" group by DepartmentID ");
        return sb.toString();
    }
}
