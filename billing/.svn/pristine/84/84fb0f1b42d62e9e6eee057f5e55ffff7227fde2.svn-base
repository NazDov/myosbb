package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11.03.2016.
 */
public class AllDepartmentPaymentQuery extends AbstractSelectQuery<DepartmentPaymentSum,Void> {
    public AllDepartmentPaymentQuery(Void condition) {
        super(condition);
    }

    @Override
    protected DepartmentPaymentSum parseResultSet(ResultSet rs) throws SQLException {
        DepartmentPaymentSum res = new DepartmentPaymentSum();
        res.setDepartmentAgreement(new Agreement(rs.getLong("AgreementDepId")));
        res.setSum(rs.getDouble("suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select AgreementDepId,sum(SumPayment) as suma from DocPayment  ");
        sb.append(" where AgreementDepId is not null    ");
        sb.append(" group by AgreementDepId     ");
        return sb.toString();
    }
}
