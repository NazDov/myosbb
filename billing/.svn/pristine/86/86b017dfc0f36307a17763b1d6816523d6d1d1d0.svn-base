package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Payer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 24.07.15.
 */
public class SearchPayer extends AbstractSelectQuery<Payer,PayerCondition> {

    public SearchPayer(PayerCondition condition) {
        super(condition);
    }

    @Override
    protected Payer parseResultSet(ResultSet rs) throws SQLException {
        Payer res = new Payer();
        res.setId(rs.getLong("id"));
        res.setName(rs.getString("name"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]  ");
        sb.append(",[name]     ");
        sb.append(" FROM [dbo].[RefPayer] where 1=1 ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
