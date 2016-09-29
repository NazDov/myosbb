package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class UpdateRateDiscountNBUQuery extends AbstractModifyQuery<DiscountRateNBU> {
    @Override
    protected String getSQLQuery() {
        return  "UPDATE [dbo].[RefDiscountRateNBU]\n" +
                "   SET [discountRate] = ?\n" +
                " WHERE ID = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DiscountRateNBU value) throws SQLException {
        st.setDouble(1, value.getDiscountRate());
        st.setLong(2,value.getId());
    }
}
