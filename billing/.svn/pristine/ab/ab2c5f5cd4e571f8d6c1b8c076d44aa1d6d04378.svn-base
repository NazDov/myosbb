package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by vostap on 09.03.2016.
 */
public class UpdateSaldoDepartmentQuery extends AbstractModifyQuery<SaldoDepartment> {

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" UPDATE [RegSaldoOnDepartment]       ");
        sb.append(" SET [ContraAgentID] = ?             ");
        sb.append(" ,[DepartmentAgreementID] = ?        ");
        sb.append(" ,[SaldoOnBegin] = ?                 ");
        sb.append(" ,[invoice] = ?                      ");
        sb.append(" ,[payment] = ?                      ");
        sb.append(" ,[SaldoOnEnd] = ?                   ");
        sb.append(" ,[DepartmentID] = ?                 ");
        sb.append(" WHERE [ID] = ?                      ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SaldoDepartment value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getAgreement().getId());
        st.setDouble(3,value.getSaldoOnBegin());
        st.setDouble(4,value.getInvoice());
        st.setDouble(5,value.getPayment());
        st.setDouble(6,value.getSaldoOnEnd());
        st.setLong(7,value.getDepartment().getId());
        st.setLong(8,value.getId());
    }
}
