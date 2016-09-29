package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentToDelete;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 9/30/2015.
 */
public class CreateNotLoadedPaymentQuery extends AbstractModifyQuery<PaymentToDelete> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocPaymentNotLoaded]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DocAgreementID]\n" +
                "           ,[SumPayment]\n" +
                "           ,[ServicePaymentID]\n" +
                "           ,[NumberDocPayment]\n" +
                "           ,[PaymentTypeID]\n" +
                "           ,[Reason]\n" +
                "           ,[BankID]\n" +
                "           ,[BankAccount]\n" +
                "           ,[DatePayment]\n" +
                "           ,[IsAutomated]\n" +
                "           ,[OwnerBankAccountID]\n" +
                "           ,[CorrectionID]\n" +
                "           ,[EDRPO])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PaymentToDelete value) throws SQLException {
        if (value.getContraAgent().getId() == null)
            st.setNull(1,Types.BIGINT);
        else
            st.setLong(1, value.getContraAgent().getId());
        if (value.getAgreement().getId() != null){
            st.setLong(2,value.getAgreement().getId());
        } else st.setNull(2, Types.BIGINT);
        st.setDouble(3, value.getSumPayment());
        st.setLong(4,value.getServicePayment().getId());
        st.setString(5,value.getNumberDocPayment());
        st.setLong(6,value.getPaymentType().getId());
        st.setString(7,value.getReason());
        if (value.getBank().getId() != null){
            st.setLong(8,value.getBank().getId());
        } else st.setNull(8, Types.BIGINT);
        st.setString(9,value.getBankAccount());
        st.setDate(10,new Date(value.getDatePayment().getTime()));
        st.setInt(11,value.getIsAutomated());
        if (value.getOwnerBankAccount().getId() != null){
            st.setLong(12,value.getOwnerBankAccount().getId());
        } else st.setNull(12, Types.BIGINT);
        if (value.getCorrection().getId() != null){
            st.setLong(13,value.getCorrection().getId());
        } else st.setNull(13, Types.BIGINT);
        st.setString(14,value.getEdrpo());
    }

}
