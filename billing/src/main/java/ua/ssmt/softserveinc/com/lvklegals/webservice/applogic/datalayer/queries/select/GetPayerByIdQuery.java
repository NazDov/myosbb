package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Payer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by afedorak on 28.05.15.
 */

public class GetPayerByIdQuery extends AbstractSelectQuery<Payer,Long> {

    public GetPayerByIdQuery(Long condition) {
        super(condition);
    }

    @Override
    protected Payer parseResultSet(ResultSet rs) throws SQLException {
        Payer payer = new Payer();
        payer.setId(rs.getLong(1));
        payer.setName(rs.getString(2));

        return payer;
    }

    @Override
    protected String getSQLQuery() {
        String qry =
                "Select top "+ Options.getMaxCountToSelectRow()+
                        " * " +
                        "  FROM [KVK].[dbo].[RefPayer]" +
                        "  where id = "
                        + condition;

        return qry;
    }
}


