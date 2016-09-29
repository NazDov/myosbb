package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CreatePsycalPayersQuery extends AbstractModifyQuery<PhysicalPayer> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocPsycalPayers]\n" +
                "           ([ContragentID]\n" +
                "           ,[ContrAgentAgreementID]\n" +
                "           ,[VolumeVP]\n" +
                "           ,[VolumeVV]\n" +
                "           ,[SumVP]\n" +
                "           ,[SumVV]\n" +
                "           ,[Pilga]\n" +
                "           ,[Subsidya]\n" +
                "           ,[period])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,dbo.getCurrentPeriod())";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PhysicalPayer value) throws SQLException {
        st.setLong(1, value.getContraAgent().getId());
        st.setLong(2, value.getAgreement().getId());
        if (value.getVolumeVp() == null)
            st.setNull(3, Types.DOUBLE);
        else
            st.setDouble(3, value.getVolumeVp());
        if (value.getVolumeVv() == null)
            st.setNull(4, Types.DOUBLE);
        else
        st.setDouble(4, value.getVolumeVv());
        if (value.getSumVp() == null)
            st.setNull(5, Types.DOUBLE);
        else
        st.setDouble(5, value.getSumVp());
        if (value.getSumVv() == null)
            st.setNull(6, Types.DOUBLE);
        else
        st.setDouble(6, value.getSumVv());
        if (value.getPilga() == null)
            st.setNull(7, Types.DOUBLE);
        else
        st.setDouble(7,value.getPilga());
        if (value.getSubs() == null)
            st.setNull(8, Types.DOUBLE);
        else
        st.setDouble(8,value.getSubs());
      
    }
}
