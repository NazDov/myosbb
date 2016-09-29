package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.TypeRemove;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TypeRemoveCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 21.05.15.
 */
public class SearchTypeRemoveQuery extends AbstractSelectQuery<TypeRemove,TypeRemoveCondition> {
    public SearchTypeRemoveQuery(TypeRemoveCondition condition) {
        super(condition);
    }

    @Override
    protected TypeRemove parseResultSet(ResultSet rs) throws SQLException {
        TypeRemove res = new TypeRemove();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[Name]   ");
        sb.append("  FROM [dbo].[DocUnregisterCounterOperationType] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return  sb.toString();
    }
}
