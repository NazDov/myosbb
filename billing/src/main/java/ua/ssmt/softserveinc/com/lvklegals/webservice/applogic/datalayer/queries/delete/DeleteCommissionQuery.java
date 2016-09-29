package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vstoian on 27.01.2015.
 */
public class DeleteCommissionQuery extends AbstractModifyQuery<Commission> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocCommission]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Commission value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
