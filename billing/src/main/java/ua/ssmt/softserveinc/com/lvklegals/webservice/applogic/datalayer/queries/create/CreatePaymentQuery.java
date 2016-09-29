package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Payment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.*;

/**
 * Created by vostap on 20.11.2014.
 */
public class CreatePaymentQuery extends AbstractModifyQuery<Payment> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocPayment]\n" +
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
                "           ,[CorrectionID],[SourceInputID],[AgreementDepId])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Payment value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
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
        if (value.getSourceInputPayment().getId() != null){
        st.setLong(14,value.getSourceInputPayment().getId());
        } else st.setNull(14, Types.BIGINT);
      /*  if (value.getDepartment().getId() != null){
            st.setLong(15,value.getDepartment().getId());
        } else st.setNull(15, Types.BIGINT);*/
        if (value.getAgreementDep().getId() != null){
            st.setLong(15,value.getAgreementDep().getId());
        } else st.setNull(15, Types.BIGINT);

    }
}
