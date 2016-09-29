package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldodepartment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SaldoDepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 03.03.2016.
 */
public class SearchSaldoDepartmentQuery extends AbstractSelectQuery<SaldoDepartment,SaldoDepartmentCondition> {
    public SearchSaldoDepartmentQuery(SaldoDepartmentCondition condition) {
        super(condition);
    }

    @Override
    protected SaldoDepartment parseResultSet(ResultSet rs) throws SQLException {
        SaldoDepartment res = new SaldoDepartment();
        res.setId(rs.getLong("SaldoID"));
        res.setContraAgent(new ContraAgent(rs.getLong("ContraAgentID")));
        res.setAgreement(new Agreement(rs.getLong("DepartmentAgreementID")));
        res.setDepartment(new Department(rs.getLong("DepartmentID")));
        res.setInvoice(rs.getDouble("invoice"));
        res.setPayment(rs.getDouble("payment"));
        res.setSaldoOnBegin(rs.getDouble("SaldoOnBegin"));
        res.setSaldoOnEnd(rs.getDouble("SaldoOnEnd"));
        res.setSaldoDetails(fillSaldoDetails(rs));
        return res;

    }

    private SaldoDepartmentDetails fillSaldoDetails(ResultSet rs) throws SQLException {
        SaldoDepartmentDetails res = new SaldoDepartmentDetails();
        res.setId(rs.getLong("SaldoDetailsID"));
        res.setSumCorrectionOfRealize(rs.getDouble("SumCorrectionOfRealize"));
        res.setSaldoDepartmentID(rs.getLong("SaldoDepartmentID"));
        res.setSumInvoiceByLKP(rs.getDouble("SumInvoiceByLKP"));
        res.setSumPaymentDepartment(rs.getDouble("SumPaymentDepartment"));
        res.setSumInnerOborot(rs.getDouble("SumInnerOborot"));
        res.setSumComiss(rs.getDouble("SumComiss"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT sd.[id]  as SaldoID                  ");
        sb.append(" ,[ContraAgentID]                            ");
        sb.append(" ,[DepartmentAgreementID] ");
        sb.append(" ,[SaldoOnBegin] ");
        sb.append(" ,[invoice] ");
        sb.append(" ,[payment] ");
        sb.append(" ,[SaldoOnEnd] ");
        sb.append(" ,[DepartmentID] ");
        sb.append(" ,[Period]  ");
        sb.append(" ,sdd.[id] as SaldoDetailsID   ");
        sb.append(" ,[SaldoDepartmentID]   ");
        sb.append(" ,[SumCorrectionOfRealize]   ");
        sb.append(" ,[SumInvoiceByLKP]   ");
        sb.append(" ,[SumPaymentDepartment]   ");
        sb.append(" ,[SumInnerOborot]   ");
        sb.append(" ,[SumComiss]    ");
        sb.append(" FROM [RegSaldoOnDepartment] as sd   ");
        sb.append(" left join [RegSaldoOnDepartmentDetails] as sdd on   ");
        sb.append(" sd.id = sdd.SaldoDepartmentID    ");
        sb.append(" where 1=1  and period = dbo.getCurrentPeriod() ");
        if (condition.getAgreementID() != null)
            sb.append(" and DepartmentAgreementID = "+condition.getAgreementID());
        if (condition.getDepartmentID() != null)
            sb.append(" and DepartmentID = "+condition.getDepartmentID());
        return sb.toString();
    }
}
