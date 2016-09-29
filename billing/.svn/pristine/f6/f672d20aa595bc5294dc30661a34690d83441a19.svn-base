package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceRainsInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 06.02.2015.
 */
public class DeleteCalcRainsInvoiceInPeriodQuery extends AbstractModifyQuery<CalcInvoiceRainsInvoice> {

    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[CalcInvoiceRainsInvoice]\n" +
                "  where   period = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceRainsInvoice value) throws SQLException {
        st.setDate(1,new Date(value.getPeriod().getTime()));
    }
}
