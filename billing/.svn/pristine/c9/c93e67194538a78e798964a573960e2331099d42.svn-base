package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceTeploenergo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 11/11/2015.
 */
public class DeleteCalcInvoiceTeploQuery extends AbstractModifyQuery<CalcInvoiceTeploenergo> {
    @Override
    protected String getSQLQuery() {
        return " delete from CalcInvoiceTeploenergo where period = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceTeploenergo value) throws SQLException {
        st.setDate(1,new Date(value.getPeriod().getTime()));
    }
}
