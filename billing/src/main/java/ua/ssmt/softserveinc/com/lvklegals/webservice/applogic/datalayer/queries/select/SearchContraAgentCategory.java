package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgentCategory;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCategoryCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.12.2014.
 */
public class SearchContraAgentCategory extends AbstractSelectQuery<ContraAgentCategory,ContraAgentCategoryCondition> {

    public SearchContraAgentCategory(ContraAgentCategoryCondition condition) {
        super(condition);
    }

    @Override
    protected ContraAgentCategory parseResultSet(ResultSet rs) throws SQLException {
        ContraAgentCategory res = new ContraAgentCategory();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]   ");
        sb.append(" ,[name]       ");
        sb.append(" FROM [dbo].[RefCategoryKontragent] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
