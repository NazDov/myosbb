package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class CreateDiscountRateQuery extends AbstractModifyQuery<DiscountRateNBU> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RefDiscountRateNBU]\n" +
                "           ([discountRate]\n" +
                "           ,[period])\n" +
                "     VALUES\n" +
                "           (?,dbo.getCurrentPeriod())";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DiscountRateNBU value) throws SQLException {
        st.setDouble(1, value.getDiscountRate());


    }
}
