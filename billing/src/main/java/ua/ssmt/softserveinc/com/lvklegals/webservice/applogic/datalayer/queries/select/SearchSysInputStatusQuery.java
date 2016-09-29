package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysInputStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SysInputStatusCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 15.11.2014.
 */
public class SearchSysInputStatusQuery extends AbstractSelectQuery<SysInputStatus,SysInputStatusCondition> {
    public SearchSysInputStatusQuery(SysInputStatusCondition condition) {
        super(condition);
    }

    @Override
    protected SysInputStatus parseResultSet(ResultSet rs) throws SQLException {
        SysInputStatus res = new SysInputStatus();
        res.setStatusesDate(rs.getDate("StatusesDate"));
        res.setStatus(rs.getLong("InputStatusID"));
        res.setId(rs.getLong("ID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [ID]  ");
        sb.append(" ,[RegInfDepartmentInputID]  ");
        sb.append(" ,[Period]   ");
        sb.append(" ,[InputStatusID]  ");
        sb.append(" ,[StatusesDate]  ");
        sb.append("   FROM [dbo].[sysInputStatus]  ");
        sb.append(" where 1=1  ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        if (condition.getDepartmentInputID() != null)
            sb.append("and RegInfDepartmentInputID = "+condition.getDepartmentInputID());
        sb.append("order by RegInfDepartmentInputID desc");

        return sb.toString();
    }
}
