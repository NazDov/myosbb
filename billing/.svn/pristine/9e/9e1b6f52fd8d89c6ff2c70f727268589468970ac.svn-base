package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 18.09.2014.
 */
public class DeleteCounterQuery extends AbstractModifyQuery<Counter> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RefCounters]\n" +
                "      WHERE [ID] = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Counter value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
