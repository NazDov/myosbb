package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnparsedPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.*;

/**
 * Created by vostap on 20.11.2014.
 */
public class CreateUnparsedPaymentQuery extends AbstractModifyQuery<UnparsedPayment> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RefUnparsedPayment]\n" +
                "           ([Mfo]\n" +
                "           ,[NumberDocPayment]\n" +
                "           ,[OwnerBankAccount]\n" +
                "           ,[PayerBankAccount]\n" +
                "           ,[SumPayment]\n" +
                "           ,[Payer]\n" +
                "           ,[Reason]\n" +
                "           ,[DatePayment])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, UnparsedPayment value) throws SQLException {
        st.setString(1,value.getMfo());
        st.setString(2,value.getNumberDocPayment());
        st.setString(3, value.getOwnerBankAccount());
        st.setString(4,value.getPayerBankAccount());
        st.setDouble(5,value.getSumPayment());
        st.setString(6,value.getPayer());
        st.setString(7,value.getReason());
        st.setDate(8,new Date(value.getDatePayment().getTime()));
    }
}
