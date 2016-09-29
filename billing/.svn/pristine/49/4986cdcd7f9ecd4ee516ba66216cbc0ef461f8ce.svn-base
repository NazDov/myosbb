package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;

/**
 * Created by vostap on 12/9/2015.
 */
public class DeleteSaldoOnNextPeriodQuery extends AbstractModifyQuery<Date> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" delete from RegSaldoOnContraAgent   ");
        sb.append(" where period = ?  ");

        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Date value) throws SQLException {
        st.setDate(1,new java.sql.Date(value.getTime()));
    }
}
