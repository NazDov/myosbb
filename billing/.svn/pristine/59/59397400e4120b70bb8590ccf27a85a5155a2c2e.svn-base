package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.AreaType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AreaTypeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11.12.2014.
 */
public class SearchAreaTypeQuery extends AbstractSelectQuery<AreaType,AreaTypeCondition> {
    public SearchAreaTypeQuery(AreaTypeCondition condition) {
        super(condition);
    }

    @Override
    protected AreaType parseResultSet(ResultSet rs) throws SQLException {
        AreaType res = new AreaType();
        res.setId(rs.getLong("ID"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT  top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[Name]  ");
        sb.append(" FROM [dbo].[RefAreaType] ");
        sb.append(" where 1=1  ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
