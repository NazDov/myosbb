package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class DeleteCounterModelQuery extends AbstractModifyQuery<CounterModel> {
    @Override
    protected String getSQLQuery() {
        return
                "DELETE FROM [RefCounterModels]\n" +
                "      WHERE [ID] = ? \n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CounterModel value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
