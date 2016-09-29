package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.VolumeConsumption;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CreateVolumeConsumptionQuery extends AbstractModifyQuery<VolumeConsumption> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocVolumeConsumption]\n" +
                "           ([ContragentID]\n" +
                "           ,[AgreementID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[AgreementDepID]\n" +
                "           ,[InputID]\n" +
                "           ,[VolumeVP]\n" +
                "           ,[VolumeVV]\n" +
                "           ,[VolumeVPHotWatter]\n" +
                "           ,[Period],[DepartmentInputID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,(select top 1 CurrentPeriod from CurrentPeriod),?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, VolumeConsumption value) throws SQLException {
        if (value.getContraAgent() != null){
            st.setLong(1,value.getContraAgent().getId());
        } else st.setNull(1, 0);
        if (value.getAgreement() != null){
            st.setLong(2,value.getAgreement().getId());
        } else st.setNull(2, 0);
        if (value.getDepartment() != null){
            st.setLong(3,value.getDepartment().getId());
        } else st.setNull(3, 0);
        if (value.getAgreementDep() != null){
            st.setLong(4,value.getAgreementDep().getId());
        } else st.setNull(4, 0);
        if (value.getInput() != null){
            st.setLong(5,value.getInput().getId());
        } else st.setNull(5, 0);
        st.setDouble(6, value.getVolumeVp());
        st.setDouble(7,value.getVolumeVv());
        st.setDouble(8,value.getVolumeVPHotWatter());
        st.setLong(9,value.getDepartmentInput().getId());
    }
}
