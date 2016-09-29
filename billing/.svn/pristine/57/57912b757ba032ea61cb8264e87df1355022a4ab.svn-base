package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vstoian on 27.01.2015.
 */
public class UpdateVolumeConsumptionQuery extends AbstractModifyQuery<VolumeConsumption> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocVolumeConsumption]\n" +
                "   SET " +
                "      [ContragentID] = ?\n" +
                "      ,[AgreementID] = ?\n" +
                "      ,[DepartmentID] = ?\n" +
                "      ,[AgreementDepID] = ?\n" +
                "      ,[InputID] = ?\n" +
                "      ,[VolumeVP] = ?\n" +
                "      ,[VolumeVV] = ?\n" +
                "      ,[VolumeVPHotWatter] = ?\n" +
                "      ,[Period] = dbo.getCurrentPeriod()\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, VolumeConsumption value) throws SQLException {
        st.setLong(1, value.getContraAgent().getId());
        st.setLong(2, value.getAgreement().getId());
        st.setLong(3, value.getDepartment().getId());
        st.setLong(4, value.getAgreementDep().getId());
        st.setLong(5, value.getInput().getId());
        st.setDouble(6, value.getVolumeVp());
        st.setDouble(7, value.getVolumeVv());
        st.setDouble(8, value.getVolumeVPHotWatter());
        st.setLong(9, value.getId());
    }
}