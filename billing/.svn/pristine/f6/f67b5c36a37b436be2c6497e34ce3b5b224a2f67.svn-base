package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vstoian on 27.01.2015.
 */
public class UpdateCommissionQuery extends AbstractModifyQuery<Commission> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocCommission]\n" +
                "   SET " +
                "       [ContragentID] = ?\n" +
                "      ,[AgreementID] = ?\n" +
                "      ,[DepartamentID] = ?\n" +
                "      ,[SumCommission] = ?\n" +
                "      ,[SumPayment] = ?\n" +
                "      ,[DateCommission] = ?\n" +
                "      ,[Notes] = ?\n" +
                "      ,[Algorithm] = ?\n" +
                "      ,[paymentService] = ?\n" +
                "      ,[departmentAgreementId] = ?\n" +
                "      ,[isAutomated] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Commission value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        if (value.getAgreement().getId() != null){
            st.setLong(2,value.getAgreement().getId());
        } else st.setNull(2, 0);
        if (value.getDepartment().getId() != null){
            st.setLong(3,value.getDepartment().getId());
        } else st.setNull(3, 0);
        st.setDouble(4, value.getSumCommission());
        st.setDouble(5, value.getSumPayment());
        st.setDate(6,new Date(value.getDateComission().getTime()));
        st.setString(7,value.getNotes());
        st.setLong(8,value.getAlgorithm().getId());
        st.setLong(9,value.getServicePayment().getId());
        if (value.getAgreementDep() != null && value.getAgreementDep().getId() != null){
            st.setLong(10,value.getAgreementDep().getId());
        } else st.setNull(10, Types.BIGINT);
        st.setInt(11,value.getIsAutomated());
        st.setLong(12,value.getId());
    }
}