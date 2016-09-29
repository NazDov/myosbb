package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentinvoicebylkp;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 14.03.2016.
 */
public class AllDepartmentInvoiceQuery extends AbstractSelectQuery<DepartmentPaymentSum,Void> {
    public AllDepartmentInvoiceQuery(Void condition) {
        super(condition);
    }

    @Override
    protected DepartmentPaymentSum parseResultSet(ResultSet rs) throws SQLException {
        DepartmentPaymentSum res = new DepartmentPaymentSum();
        res.setDepartmentAgreement(new Agreement(rs.getLong("DepartmentAgreementID")));
        res.setSum(rs.getDouble("suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select DepartmentAgreementID,sum(sum) as suma from calculateVolumeLKP  ");
        sb.append("         where               ");
        sb.append(" Period = dbo.getCurrentPeriod()     ");
        sb.append(" group by DepartmentAgreementID      ");
        return sb.toString();
    }
}
