package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeletePaymentDepartmentQuery extends AbstractModifyQuery<PaymentDepartment> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocPaymentDepartment]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentDepartment value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
