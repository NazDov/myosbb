package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.GroupWatterSupply;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.GroupWatterSupplyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 21.01.2015.
 */
public class SearchWatterGroutSupplyQuery extends AbstractSelectQuery<GroupWatterSupply,GroupWatterSupplyCondition> {
    public SearchWatterGroutSupplyQuery(GroupWatterSupplyCondition condition) {
        super(condition);
    }

    @Override
    protected GroupWatterSupply parseResultSet(ResultSet rs) throws SQLException {
        GroupWatterSupply res = new GroupWatterSupply();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append(" SELECT [id] ");
        sb.append(" ,[Name]  ");
        sb.append(" FROM [dbo].[RefWaterConsumplionGroup]  ");
        if (condition.getId() != null)
            sb.append(" where id =  "+condition.getId());
        return sb.toString();
    }
}
