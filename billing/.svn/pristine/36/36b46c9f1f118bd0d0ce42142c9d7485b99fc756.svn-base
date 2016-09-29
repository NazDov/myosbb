package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 06.11.2014.
 */
public class DeleteContinueRepairOrCheckQuery extends AbstractModifyQuery<ContinueRepairOrCheck> {

    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocContinueRepairOrCheck] WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ContinueRepairOrCheck value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
