package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoicePDV;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/4/2015.
 */
public class DeleteCalcInvoicePDVQuery extends AbstractModifyQuery<CalcInvoicePDV> {
    @Override
    protected String getSQLQuery() {
        return " delete from calcInvoicePDV where period = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoicePDV value) throws SQLException {
        st.setDate(1, new Date(value.getPeriod().getTime()));
    }
}
