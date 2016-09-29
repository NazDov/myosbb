package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Service;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.04.2015.
 */
public class GetSubServiceByServiceIDPQuery extends AbstractSelectPreCompileQuery<SubService,Long> {

    public GetSubServiceByServiceIDPQuery(Connection connection,Long condition) {
        super(connection,condition);
    }

    public GetSubServiceByServiceIDPQuery(Connection connection) {
        super(connection,-1L);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        st.setLong(1,condition);
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
        sb.append(" and ServiceID = ?");
        return sb.toString();
    }
}
