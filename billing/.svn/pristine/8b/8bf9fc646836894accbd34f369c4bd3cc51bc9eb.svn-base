package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeActivity;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TypeActivityCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 22.12.2014.
 */
public class SearchTypeActivityQuery extends AbstractSelectQuery<TypeActivity,TypeActivityCondition> {
    public SearchTypeActivityQuery(TypeActivityCondition condition) {
        super(condition);
    }

    @Override
    protected TypeActivity parseResultSet(ResultSet rs) throws SQLException {
        TypeActivity res = new TypeActivity();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]     ");
        sb.append(" ,[Name]         ");
        sb.append(" FROM [dbo].[RefKindsOfActivity] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
