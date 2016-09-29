package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.*;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CreateCommissionQuery extends AbstractModifyQuery<Commission> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocCommission]\n" +
                "           ([ContragentID]\n" +
                "           ,[AgreementID]\n" +
                "           ,[DepartamentID]\n" +
                "           ,[SumCommission]\n" +
                "           ,[SumPayment]\n" +
                "           ,[DateCommission]\n" +
                "           ,[Notes]\n" +
                "           ,[Algorithm]\n" +
                "           ,[paymentService]\n" +
                "           ,[departmentAgreementId]\n" +
                "           ,[isAutomated]\n" +
                "           ,[period])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,dbo.getCurrentPeriod())";
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
        if (value.getDepartment() != null && value.getDepartment().getId() != null){
            st.setLong(3,value.getDepartment().getId());
        } else st.setNull(3, 0);
        st.setDouble(4, value.getSumCommission());
        if (value.getSumPayment() != null)
            st.setDouble(5, value.getSumPayment());
        else
            st.setNull(5,Types.DOUBLE);
        st.setDate(6, new Date(value.getDateComission().getTime()));
        st.setString(7,value.getNotes());
        st.setLong(8,value.getAlgorithm().getId());
        if (value.getServicePayment().getId() != null){
        st.setLong(9,value.getServicePayment().getId());
        } else st.setNull(9, 0);
        if (value.getAgreementDep().getId() != null){
            st.setLong(10,value.getAgreementDep().getId());
        } else st.setNull(10, 0);
        if (value.getIsAutomated() != null){
        st.setInt(11,value.getIsAutomated());
        } else st.setNull(11, 0);
    }
}
