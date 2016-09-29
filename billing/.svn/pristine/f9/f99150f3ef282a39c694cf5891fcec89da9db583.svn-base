package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;


public class CreateCounterModelQuery extends AbstractModifyQuery<CounterModel> {
    @Override
    protected String getSQLQuery() {
        return  "INSERT INTO [dbo].[RefCounterModels]\n" +
                "           ([Name]\n" +
                "           ,[MaxLength])\n" +
                "     VALUES (?,?)\n";
    }
    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CounterModel value) throws SQLException {
        st.setString(1,value.getName());
        st.setInt(2, value.getMaxLength());
    }
}
