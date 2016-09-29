package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class DeleteContraAgentQuery extends AbstractModifyQuery<ContraAgent> {

    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RefContragents]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ContraAgent value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
