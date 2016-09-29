package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Service;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 15.10.2014.
 */
public class SearchServiceQuery extends AbstractSelectQuery<Service,ServiceCondition> {

    public SearchServiceQuery(ServiceCondition condition) {
        super(condition);
    }

    @Override
    protected Service parseResultSet(ResultSet rs) throws SQLException {
        Service service = new Service();
        service.setId(rs.getLong("id"));
        service.setName(rs.getString("Name"));
        return service;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(",[Name]  ");
        sb.append(" FROM [dbo].[RefServices] ");
        sb.append(" where 1=1");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
