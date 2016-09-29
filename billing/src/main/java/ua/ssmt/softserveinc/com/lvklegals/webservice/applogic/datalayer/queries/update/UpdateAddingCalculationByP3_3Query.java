package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingCalculationByP3;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 19.11.2014.
 */
public class UpdateAddingCalculationByP3_3Query extends AbstractModifyQuery<AddingCalculationByP3> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[AddingCalculationByP3.3]\n" +
                "   SET [VolumeWatterSupply] = ?\n" +
                "      ,[VolumeWatterOut] = ?\n" +
                "      ,[SumWatterSupply] = ?\n" +
                "      ,[SumWatterOut] = ?\n" +
                "      ,[CountDayToCalculate] = ?\n" +
                "      ,[ReasonID] = ?\n" +
                "      ,[NumberDocumentReason] = ?\n" +
                "      ,[Label] = ?\n" +
                "      ,[AgreementId] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingCalculationByP3 value) throws SQLException {
        st.setDouble(1,value.getVolumeWatterSupply());
        st.setDouble(2,value.getVolumeWatterOut());
        st.setDouble(3,value.getSumWatterSupply());
        st.setDouble(4,value.getSumWatterOut());
        st.setInt(5,value.getDateCalculation());
        st.setLong(6,value.getReason().getId());
        st.setString(7,value.getNumberDocumentReason());
        st.setString(8,value.getLabel());
        if (value.getAgreement().getId() == null)
            st.setNull(9, Types.BIGINT);
        else
            st.setLong(9, value.getAgreement().getId());
        st.setLong(10,value.getID());
    }
}
