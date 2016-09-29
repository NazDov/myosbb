package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceRainsInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 21.01.2016.
 */
public class SearchInvoiceRainsForInvoiceQuery  extends AbstractSelectQuery<CalcInvoiceRainsInvoice,CalcInvoiceCondition> {

    public SearchInvoiceRainsForInvoiceQuery(CalcInvoiceCondition condition) {
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
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
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
        sb.append(" ,[Sum],[Tariff],[Volume] ,[TariffGroupID] ");
        sb.append(" FROM [dbo].[CalcInvoiceRainsInvoice]   ");
        sb.append(" where 1=1   ");
        if (condition.getContraAgentID() != null)
            sb.append("and contraAgentID = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and period = "+getDateAsString(condition.getPeriod()));
        return sb.toString();
    }

}
