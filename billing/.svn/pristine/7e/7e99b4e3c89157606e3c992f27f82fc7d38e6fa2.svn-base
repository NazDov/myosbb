package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 9/3/2015.
 */
public class UpdateVolumeAddingConsumerInvoiceQuery extends AbstractModifyQuery<CalcInvoice> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[CalcInvoiceResults]\n" +
                "   SET \n" +
                "      [volumeAddingConsume] = ?,\n" +
                "      [sum] = ?\n" +
                ",[realConsume] = ?"+
                ",[volumeTotal] = ?"+
                ",[volumeTotalWithCoef] = ? "+
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoice value) throws SQLException {
        st.setDouble(1,value.getVolumeAddingConsume());
        st.setDouble(2,value.getSum());
        st.setDouble(3,value.getRealConsume());
        st.setDouble(4,value.getVolumeTotal());
        st.setDouble(5,value.getVolumeTotalWithCoef());
        st.setLong(6,value.getId());
    }
}
