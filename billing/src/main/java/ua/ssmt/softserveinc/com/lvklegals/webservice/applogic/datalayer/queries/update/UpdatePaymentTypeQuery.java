package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 11.11.2014.
 */
public class UpdatePaymentTypeQuery extends AbstractModifyQuery<PaymentType> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RefPaymentType]\n" +
                "   SET \n" +
                "       [Code] = ?\n" +
                "      ,[Name] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentType value) throws SQLException {
        st.setString(1,value.getCode());
        st.setString(2,value.getName());
    }
}
