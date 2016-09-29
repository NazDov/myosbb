package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDepartmentDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.03.2016.
 */
public class UpdateSaldoDepartmentDetailsQuery extends AbstractModifyQuery<SaldoDepartmentDetails> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" UPDATE [dbo].[RegSaldoOnDepartmentDetails]      ");
        sb.append(" SET [SaldoDepartmentID] = ?                     ");
        sb.append(" ,[SumCorrectionOfRealize] = ?                   ");
        sb.append(" ,[SumInvoiceByLKP] = ?                          ");
        sb.append(" ,[SumPaymentDepartment] = ?                     ");
        sb.append(" ,[SumInnerOborot] = ?                           ");
        sb.append(" ,[SumComiss] = ?                                ");
        sb.append(" WHERE id = ?                                    ");

        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SaldoDepartmentDetails value) throws SQLException {
        st.setLong(1,value.getSaldoDepartmentID());
        st.setDouble(2,value.getSumCorrectionOfRealize());
        st.setDouble(3,value.getSumInvoiceByLKP());
        st.setDouble(4,value.getSumPaymentDepartment());
        st.setDouble(5,value.getSumInnerOborot());
        st.setDouble(6,value.getSumComiss());
        st.setDouble(7,value.getId());
    }
}
