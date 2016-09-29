package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class DeleteCorrectionOfCounterQuery extends AbstractModifyQuery<CorrectionOfCounter> {
    @Override
    protected String getSQLQuery() {
        return "delete from DocCorrectionCounters where id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CorrectionOfCounter value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
