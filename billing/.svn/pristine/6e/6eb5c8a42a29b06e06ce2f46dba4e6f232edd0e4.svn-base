package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/18/2015.
 */
public class UpdateSaldoQuery extends AbstractModifyQuery<Long> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append(" declare @ContraAgent bigint = ?\n" +
                " declare @sumInvoice decimal(10,2) = isNull(dbo.getAllSumInvoiceInCurrentPeriod(@ContraAgent),0)\n" +
                " declare @sumPayments decimal(10,2) = isNull(dbo.getAllSumPaymentInCurrentPeriod(@ContraAgent),0)\n" +
                "\n" +
                " UPDATE [dbo].[RegSaldoOnContraAgent]\n" +
                "\tSET\n" +
                "      [SaldoOnEnd] = isNull(SaldonOnBegin,0)+(@sumInvoice-@sumPayments)\n" +
                "      ,[invoice] = @sumInvoice\n" +
                "      ,[payments] = @sumPayments\n" +
                " WHERE \n" +
                "       contraAgentID = @ContraAgent and\n" +
                "       period = dbo.getCurrentPeriod()");

        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Long value) throws SQLException {
        st.setLong(1,value);
    }
}
