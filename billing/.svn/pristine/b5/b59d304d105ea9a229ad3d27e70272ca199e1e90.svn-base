package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByCapacityTube;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 22.10.2014.
 */
public class UpdateAddingByCapacityTubeQuery extends AbstractModifyQuery<AddingByCapacityTube> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocAddingByCapacityTube]\n" +
                "   SET [ContraAgentID] = ?\n" +
                "      ,[DepartmentID] = ?\n" +
                "      ,[InputID] = ?\n" +
                "      ,[Label] = ?\n" +
                "      ,[Period] = dbo.getCurrentPeriod()\n" +
                "      ,[VolumeWatterSupply] = ?\n" +
                "      ,[VolumeWatterOut] = ?\n" +
                "      ,[SumWatterSupply] = ?\n" +
                "      ,[SumWatterOut] = ?\n" +
                "      ,[AgreementID] = ? " +
                " WHERE id = ?\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingByCapacityTube value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getInput().getId());
        st.setString(4,value.getLabel());
        st.setDouble(5,value.getVolumeWatterSupply());
        st.setDouble(6,value.getVolumeWatterOut());
        st.setDouble(7,value.getSumWatterSupply());
        st.setDouble(8,value.getSumWatterOut());
        if (value.getAgreement().getId() == null)
            st.setNull(9, Types.BIGINT);
        else
            st.setLong(9,value.getAgreement().getId());
        st.setLong(10,value.getId());
    }
}
