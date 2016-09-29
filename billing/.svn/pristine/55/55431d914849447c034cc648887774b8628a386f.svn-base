package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.OperationType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.OperationTypeCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 15.10.2014.
 */
public class SearchOperationTypeQuery extends AbstractSelectQuery<OperationType,OperationTypeCondition> {
    public SearchOperationTypeQuery(OperationTypeCondition condition) {
        super(condition);
    }

    @Override
    protected OperationType parseResultSet(ResultSet rs) throws SQLException {
        OperationType res = new OperationType();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id] ");
        sb.append(",[Name]  ");
        sb.append(" FROM [dbo].[DocUnregisterCounterOperationType]  where 1=1");
        if (condition.getId() != null)
            sb.append("and id = "+condition.getId());
        return sb.toString();
    }
}
