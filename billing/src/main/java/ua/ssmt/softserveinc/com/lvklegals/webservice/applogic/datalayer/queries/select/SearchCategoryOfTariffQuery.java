package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CategoryOfTariffCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 16.11.2014.
 */
public class SearchCategoryOfTariffQuery extends AbstractSelectQuery<CategoryOfTariff,CategoryOfTariffCondition> {
    public SearchCategoryOfTariffQuery(CategoryOfTariffCondition condition) {
        super(condition);
    }

    @Override
    protected CategoryOfTariff parseResultSet(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append("  ,[Name] ");
        sb.append("  FROM [dbo].[RefTariffCategory]  ");
        sb.append(" where 1=1 ");
        if (condition.getId() != null)

        sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
