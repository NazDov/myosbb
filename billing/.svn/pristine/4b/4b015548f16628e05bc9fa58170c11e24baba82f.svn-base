package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TariffCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 21.09.2014.
 */
public class SearchTariffQuery extends AbstractSelectQuery<Tariff,TariffCondition> {
    public SearchTariffQuery(TariffCondition condition) {
        super(condition);
    }

    @Override
    protected Tariff parseResultSet(ResultSet rs) throws SQLException {
        Tariff t = new Tariff();
        t.setId(rs.getLong("id"));
        t.setTariff(rs.getDouble("tarrif"));
        t.setDateInAction((rs.getDate("dateInAction")));
        t.setCategory(this.fillCategory(rs));
        t.setSubService(this.fillSubService(rs));
        return t;
    }

    private SubService fillSubService(ResultSet rs) throws SQLException {
        SubService res = new SubService();
        res.setId(rs.getLong("SubServiceID"));
        res.setName(rs.getString("SubServiceName"));
        return res;
    }

    private CategoryOfTariff fillCategory(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("CategoryID"));
        res.setName(rs.getString("TarrifGroupName"));
        return res;
    }
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" t.[id]  ");
        sb.append(" ,t.[SubServiceID]  ");
        sb.append(" ,t.[CategoryID]  ");
        sb.append(" ,t.[tarrif]  ");
        sb.append(" ,t.[dateInAction]  ");
        sb.append(" ,t.[Period]  ");
        sb.append(" ,ss.name as SubServiceName  ");
        sb.append("         ,tc.Name as TarrifGroupName  ");
        sb.append("  FROM [dbo].[RegTariff] as t  ");
        sb.append("  left join [RefSubServices] as ss on  ");
        sb.append("  t.SubServiceID = ss.id  ");
        sb.append("  left join [RefTariffCategory] as tc on  ");
        sb.append("  tc.id = t.CategoryID  ");
        sb.append(" where 1=1 ");
        sb.append(" and period <= dbo.getCurrentPeriod()");
        if (condition.getCategoryID() != null)
            sb.append(" and t.[CategoryID] = "+condition.getCategoryID());
        if (condition.getId() != null)
            sb.append(" and t.[id] = "+condition.getId());
        if (condition.getDateInAction() != null)
            sb.append(" and t.[dateInAction] <= "+this.getDateAsString(condition.getDateInAction()));
        if (condition.getPeriod() != null)
            sb.append(" and t.[Period] <= "+this.getDateAsString(condition.getPeriod()));
        if (condition.getSubServiceID() != null)
            sb.append(" and t.[SubServiceID] = "+condition.getSubServiceID());
        if (condition.getTariff() != null)
            sb.append(" and t.[tarrif] = "+condition.getTariff());
        sb.append("order by [dateInAction] desc");
        return sb.toString();
    }
}
