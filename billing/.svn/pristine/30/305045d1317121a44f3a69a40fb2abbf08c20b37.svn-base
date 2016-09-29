package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 24.09.2014.
 */
public class DeleteCounterStatusQuery extends AbstractModifyQuery<SysCounterStatus> {

    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[SysCounterStatuses]\n" +
                "      WHERE CounterID = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SysCounterStatus value) throws SQLException {
        st.setLong(1,value.getCounterID());
    }
}
