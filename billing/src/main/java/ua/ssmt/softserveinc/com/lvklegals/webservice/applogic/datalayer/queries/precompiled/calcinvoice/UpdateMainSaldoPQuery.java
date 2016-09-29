package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 15.01.2016.
 */
public class UpdateMainSaldoPQuery extends AbstractModifyPrecompileQuery<Saldo> {
    public UpdateMainSaldoPQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" UPDATE [dbo].[RegSaldoOnContraAgent]        ");
        sb.append(" SET                                         ");
        sb.append("  [SaldonOnBegin] = ?                        ");
        sb.append(" ,[SaldoOnEnd] = ?                           ");
        sb.append(" ,[invoice] = ?                              ");
        sb.append(" ,[payments] = ?                             ");
        sb.append(" WHERE id=?                                  ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Saldo value) throws SQLException {
        st.setDouble(1,value.getSaldoOnBegin());
        st.setDouble(2,value.getSaldoOnEnd());
        st.setDouble(3,value.getInvoice());
        st.setDouble(4,value.getSumPayment());
        st.setLong(5,value.getId());
    }
}
