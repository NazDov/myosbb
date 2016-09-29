package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.*;

/**
 * Created by vstoian on 27.11.2014.
 */
public class CreatePaymentDepartmentQuery extends AbstractModifyQuery<PaymentDepartment> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocPaymentDepartment]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DatePayment]\n" +
                "           ,[AgreementID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[SumPayment]\n" +
                "           ,[Note]\n" +
                "           ,[ContrAgentAgreementID]\n" +
                "           ,[paymentTypeId]\n" +
                "           ,[servicePaymentId]\n" +
                "           ,[period])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,dbo.getCurrentPeriod())";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentDepartment value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setDate(2,new Date(value.getDatePayment().getTime()));
        st.setLong(3,value.getAgreement().getId());
        st.setLong(4,value.getDepartment().getId());
        st.setDouble(5, value.getSumPayment());
        st.setString(6,value.getNote());
        st.setLong(7,value.getContragentAgreement().getId());
        st.setLong(8,value.getPaymentType().getId());
        st.setLong(9,value.getServicePayment().getId());
    }
}
