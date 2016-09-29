package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PhysicalPayer;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdatPsycalPayerQuery extends AbstractModifyQuery<PhysicalPayer> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocPsycalPayers]\n" +
                "   SET " +
                "       [ContragentID] = ?\n" +
                "      ,[ContrAgentAgreementID] = ?\n" +
                "      ,[VolumeVP] = ?\n" +
                "      ,[VolumeVV] = ?\n" +
                "      ,[SumVP] = ?\n" +
                "      ,[SumVV] = ?\n" +
                "      ,[Pilga] = ?\n" +
                "      ,[Subsidya] = ?\n" +

                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, PhysicalPayer value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getAgreement().getId());
        st.setDouble(3,value.getVolumeVp());
        st.setDouble(4,value.getVolumeVv());
        if (value.getSumVp() == null)
            st.setNull(5, Types.DOUBLE);
        else
            st.setDouble(5,value.getSumVp());
        if (value.getSumVv() == null)
            st.setNull(6, Types.DOUBLE);
        else
            st.setDouble(6,value.getSumVv());

        if (value.getPilga() == null)
            st.setNull(7, Types.DOUBLE);
        else
            st.setDouble(7,value.getPilga());

        if (value.getSubs() == null)
            st.setNull(8, Types.DOUBLE);
        else
            st.setDouble(8,value.getSubs());
        st.setLong(9,value.getId());
    }
}
