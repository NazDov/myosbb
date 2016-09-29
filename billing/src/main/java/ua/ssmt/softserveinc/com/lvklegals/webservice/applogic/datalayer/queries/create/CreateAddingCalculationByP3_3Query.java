package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingCalculationByP3;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 19.11.2014.
 */
public class CreateAddingCalculationByP3_3Query extends AbstractModifyQuery<AddingCalculationByP3> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[AddingCalculationByP3.3]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[InputID]\n" +
                "           ,[VolumeWatterSupply]\n" +
                "           ,[VolumeWatterOut]\n" +
                "           ,[SumWatterSupply]\n" +
                "           ,[SumWatterOut]\n" +
                "           ,[CountDayToCalculate]\n" +
                "           ,[ReasonID]\n" +
                "           ,[NumberDocumentReason]\n" +
                "           ,[Label]\n" +
                "           ,[Period],[ReasonDate],[AgreementId])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,dbo.getCurrentPeriod(),?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingCalculationByP3 value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getInput().getId());
        st.setDouble(4,value.getVolumeWatterSupply());
        st.setDouble(5,value.getVolumeWatterOut());
        st.setDouble(6,value.getSumWatterSupply());
        st.setDouble(7,value.getSumWatterOut());
        st.setLong(8,value.getDateCalculation());
        st.setLong(9,value.getReason().getId());
        st.setString(10,value.getNumberDocumentReason());
        st.setString(11,value.getLabel());
        if (value.getReasonDate() == null)
            st.setNull(12, Types.DATE);
        else
            st.setDate(12,new Date(value.getReasonDate().getTime()));
        if (value.getAgreement().getId() == null)
            st.setNull(13, Types.BIGINT);
        else
            st.setLong(13, value.getAgreement().getId());
    }
}
