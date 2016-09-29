package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/18/2015.
 */
public class UpdateCalcInvoiceQuery extends AbstractModifyQuery<Long> {
    @Override
    protected String getSQLQuery() {
        return "declare @ContraAgent bigint = ?\n" +
                "\n" +
                "UPDATE [dbo].[RegSaldoOnContraAgent]\n" +
                "   SET\n" +
                "       [SaldoOnEnd] = (SaldonOnBegin)+(SELECT sumInvoice-sumPayment FROM [dbo].[getSaldoByContraAgentID_group] (@ContraAgent))\n" +
                "      ,[invoice] = (SELECT sumInvoice FROM [dbo].[getSaldoByContraAgentID_group] (@ContraAgent))\n" +
                "      ,[payments] = (SELECT sumPayment FROM [dbo].[getSaldoByContraAgentID_group] (@ContraAgent))\n" +
                " WHERE \n" +
                "\tcontraAgentID = @ContraAgent\n" +
                "and\n" +
                "\tperiod = dbo.getCurrentPeriod()\n";
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
