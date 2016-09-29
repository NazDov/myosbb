package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 05.09.2014.
 */
public class DeleteContraAgentPropertyQuery extends AbstractModifyQuery<ContraAgent> {


    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [RegInfKontragentProperty] \n" +
                "\t where ContraAgentID = ?";
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
