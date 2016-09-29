package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.10.2014.
 */
public class DeleteCancelZaborgovanistTubeQuery extends AbstractModifyQuery<CancelZaborgovanist> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocCancelZaborgovanist]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CancelZaborgovanist value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
