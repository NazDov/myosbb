package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CancelZaborgovanist;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdatCancelZaborgovanistQuery extends AbstractModifyQuery<CancelZaborgovanist> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocCancelZaborgovanist]\n" +
                "   SET " +
                "       [contrAgentID] = ?\n" +
                "      ,[agreementId] = ?\n" +
                "      ,[serviceId] = ?\n" +
                "      ,[suma] = ?\n" +
                "      ,[Label] = ?\n" +
                " WHERE id = ?";
    }
    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CancelZaborgovanist value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getAgreement().getId());
        st.setLong(3, value.getService().getId());
        if (value.getSum() == null)
            st.setNull(4, Types.DOUBLE);
        else
            st.setDouble(4,value.getSum());
        if (value.getNote() == null)
            st.setNull(5, Types.NVARCHAR);
        else
            st.setString(5, value.getNote());  
        st.setLong(6,value.getId());
    }
}
