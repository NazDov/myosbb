package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.SaldoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12/9/2015.
 */
public class CreateSaldoOnNextPeriodQuery extends AbstractModifyQuery<Saldo> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" declare @currentPeriod date = ?   ");
        sb.append(" declare @newPeriod date = ?     ");
        sb.append(" INSERT INTO [dbo].[RegSaldoOnContraAgent]    ");
        sb.append(" ([ContraAgentID]                             ");
        sb.append(" ,[AgreementID]                               ");
        sb.append(" ,[GroupSaldoID]                              ");
        sb.append(" ,[Period]                                    ");
        sb.append(" ,[SaldonOnBegin]                             ");
        sb.append(" ,[SaldoOnEnd]                                ");
        sb.append(" ,[invoice]                                   ");
        sb.append(" ,[payments])                                 ");
        sb.append("  select [ContraAgentID]                      ");
        sb.append(" ,[AgreementID]                               ");
        sb.append(" ,[GroupSaldoID]                              ");
        sb.append(" ,@newPeriod                                  ");
        sb.append(" ,[SaldoOnEnd]                                ");
        sb.append(" ,0                                           ");
        sb.append("         ,0                                   ");
        sb.append("         ,0                                   ");
        sb.append(" from RegSaldoOnContraAgent as s              ");
        sb.append(" left join RegSaldoDetails as sd on           ");
        sb.append(" s.id = sd.RegSaldoID                         ");
        sb.append(" where period = @currentPeriod                   ");


        sb.append(" INSERT INTO [dbo].[RegSaldoDetails]          ");
        sb.append(" ([RegSaldoID]                                ");
        sb.append(" ,[sumInvoiceWatterSupplyAndWatterOut]        ");
        sb.append(" ,[sumInvoiceRains]                           ");
        sb.append(" ,[sumCorrectionOfRealization]                ");
        sb.append(" ,[sumInvoiceByLkp]                           ");
        sb.append(" ,[sumInputByPhysicalPerson]                  ");
        sb.append(" ,[sumInvoiceByStockWithoutPermission]        ");
        sb.append(" ,[sumInvoiceByPenya]                         ");
        sb.append(" ,[sumPaymentVVVPP33AndInnerProvod]           ");
        sb.append(" ,[sumPaymentCommis]                          ");
        sb.append(" ,[sumPenyaVVVPAndInnerProvod]                ");
        sb.append(" ,[sumPaymentVVVP]                            ");
        sb.append(" ,[sumPaymentProvyv]                          ");
        sb.append(" ,[sumPaymentPP3]                             ");
        sb.append(" ,[sumPaymentStockWithoutPermission]          ");
        sb.append(" ,[sumPaymentPenya]                           ");
        sb.append(" ,[sumDocumentStockWithoutPermission])        ");
        sb.append(" select s.id                                  ");
        sb.append("         ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0     ");
        sb.append(" from RegSaldoOnContraAgent as s              ");
        sb.append(" left join RegSaldoDetails as sd on           ");
        sb.append(" s.id = sd.RegSaldoID                         ");
        sb.append(" where sd.id is null               ");

        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Saldo value) throws SQLException {
        st.setDate(1,new Date(value.getCurrentPeriod().getTime()));
        st.setDate(2,new Date(value.getNewPeriod().getTime()));
    }
}
