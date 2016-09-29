package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentTypeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vstoian on 16.11.2014.
 */
public class SearchPaymentTypeQuery extends AbstractSelectQuery<PaymentType,PaymentTypeCondition> {
    public SearchPaymentTypeQuery(PaymentTypeCondition condition) {
        super(condition);
    }

    @Override
    protected PaymentType parseResultSet(ResultSet rs) throws SQLException {
        PaymentType res = new PaymentType();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("Name"));
        res.setCode(rs.getString("Code"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" pt.id   ");
        sb.append(" ,pt.Code  ");
        sb.append(" ,pt.Name  ");
        sb.append(" FROM RefPaymentType pt where 1=1 ");

        if (condition.getCode() != null)
            sb.append(" and code = '"+condition.getCode()+"'");
        if (condition.getId() != null)
            sb.append(" and pt.id = "+condition.getId());

        return sb.toString();
    }
}