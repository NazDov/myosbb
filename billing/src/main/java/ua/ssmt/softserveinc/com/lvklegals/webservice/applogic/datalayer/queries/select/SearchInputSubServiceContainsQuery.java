package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputSubServiceContain;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputSubServiceContainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 12.11.2014.
 */
public class SearchInputSubServiceContainsQuery extends AbstractSelectQuery<InputSubServiceContain,InputSubServiceContainsCondition> {
    public SearchInputSubServiceContainsQuery(InputSubServiceContainsCondition condition) {
        super(condition);
    }

    @Override
    protected InputSubServiceContain parseResultSet(ResultSet rs) throws SQLException {
        InputSubServiceContain res = new InputSubServiceContain();
        res.setId(rs.getLong("ID"));
        res.setWatterOut(rs.getBoolean("WatterSupply"));
        res.setWatterSupply(rs.getBoolean("WatterOut"));
        res.setPeriod(rs.getDate("Period"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[RegInfDepartmentInputID] ");
        sb.append(" ,[Period]  ");
        sb.append(" ,[WatterSupply]  ");
        sb.append(" ,[WatterOut]   ");
        sb.append("  FROM [dbo].[RegInputSubServiceContains] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and [id] = "+condition.getId());
        if (condition.getDepartmentInputID() != null)
            sb.append("and [RegInfDepartmentInputID] = "+condition.getDepartmentInputID());
        sb.append(" order by Period desc");
        return sb.toString();
    }
}
