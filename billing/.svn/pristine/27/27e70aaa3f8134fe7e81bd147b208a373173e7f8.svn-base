package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServicePaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vstoian on 16.11.2014.
 */
public class SearchServicePaymentQuery extends AbstractSelectQuery<ServicePayment,ServicePaymentCondition> {
    public SearchServicePaymentQuery(ServicePaymentCondition condition) {
        super(condition);
    }

    @Override
    protected ServicePayment parseResultSet(ResultSet rs) throws SQLException {
        ServicePayment res = new ServicePayment();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" pt.id   ");
        sb.append(" ,pt.Name  ");
        sb.append(" FROM RefServicesPayment pt where 1=1 ");

        if (condition.getCode() != null)
            sb.append(" and Name = '"+condition.getCode()+"'");

        if (condition.getId() != null)
            sb.append(" and id = '"+condition.getId()+"'");
        return sb.toString();
    }
}