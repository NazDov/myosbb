package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 11/29/2015.
 */
public class CreateMainSaldoQuery extends AbstractModifyQuery<Saldo> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [dbo].[RegSaldoOnContraAgent]           ");
        sb.append(" ([ContraAgentID]                                    ");
        sb.append(" ,[AgreementID]                                      ");
        sb.append(" ,[GroupSaldoID]                                     ");
        sb.append(" ,[Period]                                           ");
        sb.append(" ,[SaldonOnBegin]                                    ");
        sb.append(" ,[SaldoOnEnd]                                       ");
        sb.append(" ,[invoice]                                          ");
        sb.append(" ,[payments])                                        ");
        sb.append(" VALUES                                              ");
        sb.append("         (?,?,?,dbo.getCurrentPeriod(),?,?,?,?)      ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Saldo value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getAgreement().getId());
        st.setLong(3,value.getSaldoGroup().getId());
        st.setDouble(4,value.getSaldoOnBegin());
        st.setDouble(5,value.getSaldoOnEnd());
        st.setDouble(6,value.getInvoice());
        st.setDouble(7,value.getSumPayment());
    }
}
