package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by vostap on 30.03.2016.
 */
public class DeleteListPaymentQuery extends AbstractModifyQuery<List<Payment>> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocPayment]\n" +
                "      WHERE id in (?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, List<Payment> value) throws SQLException {
        st.setLong(1,value.get(0).getId());
        st.setLong(2,value.get(1).getId());
    }
}
