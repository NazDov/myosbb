package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Correction;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vstoian on 27.01.2015.
 */
public class UpdateCorrectionQuery extends AbstractModifyQuery<Correction> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocCorrection]\n" +
                "   SET " +
                "       [DateCorrection] = ?\n" +
                "      ,[DocNumber1] = ?\n" +
                "      ,[Contragent1ID] = ?\n" +
                "      ,[DocNumber2] = ?\n" +
                "      ,[Contragent2ID] = ?\n" +
                "      ,[SumCorrection] = ?\n" +
                "      ,[ServicePaymentID] = ?\n" +
                "      ,[Notes] = ?\n" +
                "      ,[TypePaymentID] = ?\n" +
                "      ,[internalTurnOverID] = ?\n" +
                "      ,[ServicePaymentIDSecond] = ?\n" +
      //          "      ,[Department1] = ?\n" +
       //         "      ,[Department2] = ?\n" +
                "      ,[AgreementDep1] = ?\n" +
                "      ,[AgreementDep2] = ?\n" +

                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Correction value) throws SQLException {
        st.setDate(1, new Date(value.getDateCorrection().getTime()));
        st.setLong(2, value.getDocNumberOne().getId());
        st.setLong(3, value.getContraAgentOne().getId());
        st.setLong(4, value.getDocNumberTwo().getId());
        st.setLong(5, value.getContraAgentTwo().getId());
        st.setDouble(6, value.getSumCorrection());
        st.setLong(7, value.getServicePayment().getId());
        st.setString(8, value.getNotes());
        st.setLong(9, value.getPaymentType().getId());
        st.setLong(10,value.getInternalTurnOver().getId());
        st.setLong(11,value.getServicePaymentsecond().getId());
     /*   if (value.getDepartmentOne().getId() == null)
            st.setNull(12, Types.BIGINT);
        else
            st.setLong(12,value.getDepartmentOne().getId());
        if (value.getDepartmentTwo().getId() == null)
            st.setNull(13, Types.BIGINT);
        else
            st.setLong(13,value.getDepartmentTwo().getId());
*/
        if (value.getAgreementDepOne() != null && value.getAgreementDepOne().getId() != null){
            st.setLong(12,value.getAgreementDepOne().getId());
        } else st.setNull(12, 0);
        if (value.getAgreementDepTwo() != null && value.getAgreementDepTwo().getId() != null){
            st.setLong(13,value.getAgreementDepTwo().getId());
        } else st.setNull(13, 0);
        st.setLong(14,value.getId());

    }
}