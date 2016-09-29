package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentToDelete;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 10/2/2015.
 */
public class DeleteNotLoadedPaymentQuery extends AbstractModifyQuery<PaymentToDelete> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocPaymentNotLoaded]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentToDelete value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
