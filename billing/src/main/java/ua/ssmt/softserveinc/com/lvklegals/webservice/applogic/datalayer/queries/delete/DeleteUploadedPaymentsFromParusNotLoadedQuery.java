package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 10/5/2015.
 */
public class DeleteUploadedPaymentsFromParusNotLoadedQuery extends AbstractModifyQuery<PaymentFromParus> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("delete from [dbo].[DocPaymentNotLoaded] where [DatePayment] = ? and [OwnerBankAccountID] = ? and PaymentTypeID = 1");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentFromParus value) throws SQLException {
        st.setDate(1,new java.sql.Date(value.getDatePayment().getTime()));
        st.setLong(2,value.getOwnerBankAccountID());
    }
}
