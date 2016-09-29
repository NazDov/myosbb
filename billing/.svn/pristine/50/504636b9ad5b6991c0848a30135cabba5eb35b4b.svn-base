package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 23.10.2014.
 */
public class CreateCorrectionOfRealizeQuery extends AbstractModifyQuery<CorrectionOfRealize> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [dbo].[DocCorrectionOfRealize]   ");
        sb.append(" ([DocumentDate]  ");
        sb.append("  ,[ContraAgentID]   ");
        sb.append(" ,[DepartmentID]    ");
        sb.append(" ,[InputID]    ");
        sb.append(" ,[VolumeWatterSupply]  ");
        sb.append(" ,[VolumeWatterOut]   ");
        sb.append(" ,[SumWatterSupply]   ");
        sb.append(" ,[SumWatterOut]     ");
        sb.append(" ,[Label]      ");
        sb.append(" ,[Period]    ");
        sb.append(" ,[ReasonID]   ");
        sb.append(" ,[DocumnentReasonNumber]  ");
        sb.append(" ,[DocumentReasonDate]  ");
        sb.append(" ,[AgreementID]  ");
        sb.append(" ,[typeCorrectionID]  ");
        sb.append(" ,[tarifCategoryId]  ");
        sb.append(" ,[periodTarif]  ");
        sb.append(" ,[subServicevv]  ");
        sb.append(" ,[subServicevp]  ");
        sb.append(" ,[tarifvv]  ");
        sb.append(" ,[tarifvp]  ");
        sb.append(" ,[sumbezpdvVV]  ");
        sb.append(" ,[sumbezpdvVP]  ");
        sb.append(" ,[sumpdv]  ");
        sb.append(" ,[DepartmentAgreementID] ) ");
        sb.append("  VALUES     ");
        sb.append("        (GETDATE(),?,?,?,?,?,?,?,?,dbo.getCurrentPeriod(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)  ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CorrectionOfRealize value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getInput().getId());
        if (value.getVolumeWatterSupply()==null)
            st.setNull(4,Types.DOUBLE);
        else
        st.setDouble(4,value.getVolumeWatterSupply());
        if (value.getVolumeWatterOut()==null)
            st.setNull(5,Types.DOUBLE);
        else
        st.setDouble(5,value.getVolumeWatterOut());
        if (value.getSumWaterSupply() == null)
            st.setNull(6,Types.DOUBLE);
        else
            st.setDouble(6, value.getSumWaterSupply());
        if (value.getSumWatterOut() == null)
            st.setNull(7,Types.DOUBLE);
        else
            st.setDouble(7, value.getSumWatterOut());

        st.setString(8,value.getLabel());
        if (value.getReason().getId() == null)
            st.setNull(9, Types.BIGINT);
        else
            st.setLong(9,value.getReason().getId());
        if (value.getDocumentReasonNumber() == null)
            st.setNull(10,Types.CHAR);
        else
            st.setString(10, value.getDocumentReasonNumber());

        if (value.getDocumentReasonDate() == null)
            st.setNull(11,Types.DATE);
        else
            st.setDate(11,new Date(value.getDocumentReasonDate().getTime()));
        if (value.getAgreement().getId() == null)
            st.setNull(12,Types.BIGINT);
        else
            st.setLong(12,value.getAgreement().getId());
        if (value.getTypeCorrection().getId() == null)
            st.setNull(13,Types.BIGINT);
        else
        st.setLong(13,value.getTypeCorrection().getId());
        if (value.getCategoryOfTariff().getId() == null)
            st.setNull(14,Types.BIGINT);
        else
        st.setLong(14,value.getCategoryOfTariff().getId());
        if (value.getDateTarif() == null)
            st.setNull(15,Types.DATE);
        else
            st.setDate(15,new Date(value.getDateTarif().getTime()));

        if (value.getSubServicevvID() == null)
            st.setNull(16,Types.BIGINT);
        else
            st.setLong(16,value.getSubServicevvID());

        if (value.getSubServicevpID() == null)
            st.setNull(17,Types.BIGINT);
        else
            st.setLong(17,value.getSubServicevpID());


        if (value.getTarifvv() == null)
            st.setNull(18,Types.DOUBLE);
        else
            st.setDouble(18,value.getTarifvv());

        if (value.getTarifvp() == null)
            st.setNull(19,Types.DOUBLE);
        else
            st.setDouble(19,value.getTarifvp());

        if (value.getSumbezpdvVV() == null)
            st.setNull(20,Types.DOUBLE);
        else
            st.setDouble(20,value.getSumbezpdvVV());

        if (value.getSumbezpdvVP() == null)
            st.setNull(21,Types.DOUBLE);
        else
            st.setDouble(21,value.getSumbezpdvVP());

        if (value.getSumpdv() == null)
            st.setNull(22,Types.DOUBLE);
        else
            st.setDouble(22,value.getSumpdv());

        if (value.getDepAgreement().getId() == null)
            st.setNull(23,Types.BIGINT);
        else
            st.setLong(23,value.getDepAgreement().getId());

    }
}
