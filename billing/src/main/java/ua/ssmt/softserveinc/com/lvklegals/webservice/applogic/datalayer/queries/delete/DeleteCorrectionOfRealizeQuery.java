package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.10.2014.
 */
public class DeleteCorrectionOfRealizeQuery extends AbstractModifyQuery<CorrectionOfRealize> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" DELETE FROM [dbo].[DocCorrectionOfRealize]   ");
        sb.append(" WHERE id = ?   ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CorrectionOfRealize value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
