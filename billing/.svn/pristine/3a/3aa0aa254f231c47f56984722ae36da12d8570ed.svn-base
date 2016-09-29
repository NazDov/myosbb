package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 26.05.2015.
 */
public class DeleteUploadedPaymentsFromParusQuery  extends AbstractModifyQuery<PaymentFromParus>{

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("delete from [dbo].[DocPayment] where [DatePayment] = ? and [OwnerBankAccountID] = ? and PaymentTypeID = 1");
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
