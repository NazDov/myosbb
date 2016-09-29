package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Saldo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyListQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12/4/2015.
 */
public class UpdateSaldoMainListQuery extends AbstractModifyListQuery<Saldo> {
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
    protected void fillPreparedStatement(PreparedStatement st, Saldo value) throws SQLException {
        st.setDouble(1,value.getSaldoOnBegin());
        st.setDouble(2,value.getSaldoOnEnd());
        st.setDouble(3,value.getInvoice());
        st.setDouble(4,value.getSumPayment());
        st.setLong(5,value.getId());
    }
}
