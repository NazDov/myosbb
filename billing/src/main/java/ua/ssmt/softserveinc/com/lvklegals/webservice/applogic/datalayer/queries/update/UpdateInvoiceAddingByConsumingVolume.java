package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 25.12.2014.
 */
public class UpdateInvoiceAddingByConsumingVolume extends AbstractModifyQuery<CalcInvoice> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[CalcInvoiceResults]\n" +
                "   SET [volumeAddingConsume] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoice value) throws SQLException {
        st.setDouble(1,value.getVolumeAddingConsume());
        st.setLong(2,value.getId());
    }
}
