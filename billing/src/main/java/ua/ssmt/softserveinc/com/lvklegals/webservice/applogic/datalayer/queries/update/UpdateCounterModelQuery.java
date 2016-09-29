package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class UpdateCounterModelQuery extends AbstractModifyQuery<CounterModel> {
    @Override
    protected String getSQLQuery() {
        return
                "UPDATE [dbo].[RefCounterModels]\n" +
                "   SET [Name] = ?\n" +
                "      ,[MaxLength] = ?\n" +
                " WHERE [ID] = ?\n";

    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CounterModel value) throws SQLException {
        st.setString(1,value.getName());
        st.setInt(2, value.getMaxLength());
        st.setLong(3,value.getId());
    }
}
