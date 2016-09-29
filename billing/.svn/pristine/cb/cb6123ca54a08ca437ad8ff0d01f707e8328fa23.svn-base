package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class DeleteUnregisterOfCounterQuery extends AbstractModifyQuery<UnregisterOfCounter> {

    @Override
    protected String getSQLQuery() {
        return "delete from DocUnregisterCounter where id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, UnregisterOfCounter value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
