package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 25.12.2015.
 */
public class GetAllTarrifQuery extends AbstractSelectQuery<Tariff,Void> {

    public GetAllTarrifQuery(Void condition) {
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
        t.setPeriod(rs.getDate("Period"));
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
        sb.append(" SELECT  t.[id]  ");
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
       /* sb.append(" and t.[CategoryID] = ?");
        sb.append(" and t.[SubServiceID] = ?");
        sb.append(" and dateInAction <=dbo.getCurrentPeriod()");*/
        sb.append(" order by dateInAction desc");
        return sb.toString();
    }
}
