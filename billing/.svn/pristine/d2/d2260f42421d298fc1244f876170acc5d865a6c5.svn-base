package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceRainsInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 04.02.2015.
 */
public class SearchInvoiceRainsQuery extends AbstractSelectQuery<CalcInvoiceRainsInvoice,CalcInvoiceCondition> {

    public SearchInvoiceRainsQuery(CalcInvoiceCondition condition) {
        super(condition);
    }

    @Override
    protected CalcInvoiceRainsInvoice parseResultSet(ResultSet rs) throws SQLException {
        CalcInvoiceRainsInvoice  res = new CalcInvoiceRainsInvoice();
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setSum(rs.getDouble("Sum"));
        res.setTariff(rs.getDouble("Tariff"));
        res.setVolume(rs.getDouble("Volume"));
        res.setCategoryOfTariff(fillCategoryOfTariff(rs));
        res.setAgreement(new Agreement(rs.getLong("AgreementID")));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        res.getProperty().setCategoryOfTariff(new CategoryOfTariff(rs.getLong("TariffGroupID")));
        return res;
    }
    private CategoryOfTariff fillCategoryOfTariff(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("TariffGroupID"));
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
        sb.append(" SELECT [id]  ");
        sb.append(" ,[ContraAgentID]  ");
        sb.append(" ,[DepartmentID]   ");
        sb.append(" ,[Period]   ");
        sb.append(" ,[Sum],[Tariff],[Volume] ,[TariffGroupID],[AgreementID] ");
        sb.append(" FROM [dbo].[CalcInvoiceRainsInvoice]   ");
        sb.append(" where 1=1   ");
        if (condition.getContraAgentID() != null)
            sb.append("and contraAgentID = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and period = "+getDateAsString(condition.getPeriod()));
        return sb.toString();
    }
}
