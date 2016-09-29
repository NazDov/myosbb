package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Service;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SubServiceCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.10.2014.
 */
public class SearchSubServiceQuery extends AbstractSelectQuery<SubService,SubServiceCondition> {
    public SearchSubServiceQuery(SubServiceCondition condition) {
        super(condition);
    }

    @Override
    protected SubService parseResultSet(ResultSet rs) throws SQLException {
        SubService res = new SubService();
        res.setId(rs.getLong("SubServiceID"));
        res.setName(rs.getString("SubServiceName"));
        res.setService(this.fillService(rs));
        return res;
    }

    private Service fillService(ResultSet rs) throws SQLException {
        Service s = new Service();
        s.setId(rs.getLong("SerivceID"));
        s.setName(rs.getString("ServiceName"));
        return s;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" ss.[id] as SubServiceID   ");
        sb.append(" ,ss.[name] as SubServiceName  ");
        sb.append("  ,[ServiceID] as SerivceID  ");
        sb.append("  ,s.name as ServiceName   ");
        sb.append("  FROM [dbo].[RefSubServices] as ss  ");
        sb.append("  left join RefServices as s on  ");
        sb.append("  ss.ServiceID = s.id   ");
        sb.append("  where 1=1  ");
        if (condition.getServiceID() != null)
            sb.append(" and ServiceID = "+condition.getServiceID());
        if (condition.getId() != null)
            sb.append(" and ss.[id] = "+condition.getId());
        return sb.toString();
    }
}
