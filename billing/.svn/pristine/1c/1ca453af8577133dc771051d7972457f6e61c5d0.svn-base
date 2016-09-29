package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.correctionofrealize;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CorrectionOfRealizeSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SumPaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 10.03.2016.
 */
public class AllCorrectionOfRealizeSaldoDepartmentQuery extends AbstractSelectQuery<CorrectionOfRealizeSum,SumPaymentCondition> {
    public AllCorrectionOfRealizeSaldoDepartmentQuery(SumPaymentCondition condition) {
        super(condition);
    }

    @Override
    protected CorrectionOfRealizeSum parseResultSet(ResultSet rs) throws SQLException {
        CorrectionOfRealizeSum res = new CorrectionOfRealizeSum();
        res.setDepartment(new Department(rs.getLong("DepartmentID")));
        res.setDepartmentAgreement(new Agreement(rs.getLong("DepartmentAgreementID")));
        res.setSum(rs.getDouble("suma"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select DepartmentID,DepartmentAgreementID,sum(SumWatterOut)+sum(SumWatterSupply) as suma from DocCorrectionOfRealize  ");
        sb.append(" where                                                                                                                 ");
        sb.append(" DepartmentAgreementID is not null                                                                                     ");
        sb.append(" and DocumentDate >= "+getDateAsString(condition.getDate1()));
        sb.append(" and DocumentDate <= "+getDateAsString(condition.getDate2()));
        sb.append(" group by DepartmentID,DepartmentAgreementID                                                                           ");
        return sb.toString();
    }
}
