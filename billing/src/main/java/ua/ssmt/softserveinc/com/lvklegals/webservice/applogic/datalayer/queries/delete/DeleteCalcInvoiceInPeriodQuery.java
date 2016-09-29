package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 11.12.2014.
 */
public class DeleteCalcInvoiceInPeriodQuery extends AbstractModifyQuery<CalcInvoice> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" delete from [CalcInvoiceResultDetails] where [calcInvoiceID] in (select id from CalcInvoiceResults where period = ?) \n   ");
        sb.append("DELETE FROM [CalcInvoiceResults]\n" +
                "  where   period = ?");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoice value) throws SQLException {
        st.setDate(1,new Date(value.getPeriod().getTime()));
        st.setDate(2,new Date(value.getPeriod().getTime()));
    }
}
