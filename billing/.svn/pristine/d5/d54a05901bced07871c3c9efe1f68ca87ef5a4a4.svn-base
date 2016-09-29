package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 27.08.2014.
 */
public class CreatePaymentTypeQuery extends AbstractModifyQuery<PaymentType> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [RefPaymentType] " +
                "         ([Code] " +
                "         ,[Name])" +
                "          VALUES (?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentType paymentType) throws SQLException {
        st.setString(1,paymentType.getCode());
        st.setString(2,paymentType.getName());
    }
}
