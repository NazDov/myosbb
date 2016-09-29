package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 05.01.2016.
 */
public class UpdateMaxValueIDToCalcInvoice extends AbstractModifyQuery<Long> {
    @Override
    protected String getSQLQuery() {
        return "update sysCalcInvoiceCounter set lastVal = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Long value) throws SQLException {
        st.setLong(1,value);
    }
}
