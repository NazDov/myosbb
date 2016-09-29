package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 6/1/2015.
 */
public class DeleteDocLKPQuery extends AbstractModifyQuery<ContraAgent> {
    @Override
    protected String getSQLQuery() {
        return "delete from DocVolumeConsumption where ContrAgentID = ?";
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
