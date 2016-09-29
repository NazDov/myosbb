package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdateCorrectionStockWithOutPermissionQuery extends AbstractModifyQuery<DocCorrectionStockWithOutPermission> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocCorrectionForStockWithOutPermission]\n" +
                "   SET " +
                "       [contrAgentID] = ?\n" +
                "      ,[agreementID] = ?\n" +
                "      ,[suma] = ?\n" +
                "      ,[dateReason] = ?\n" +
                "      ,[numberDocumentReason] = ?\n" +
                "      ,[note] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DocCorrectionStockWithOutPermission value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getAgreement().getId());
        if (value.getSum() == null)
            st.setNull(3, Types.DOUBLE);
        else
            st.setDouble(3,value.getSum());
        st.setDate(4, new Date(value.getDateReason().getTime()));
        if (value.getNumberReason() == null)
            st.setNull(5, Types.NVARCHAR);
        else
            st.setString(5, value.getNumberReason());
        if (value.getNote() == null)
            st.setNull(6, Types.NVARCHAR);
        else
            st.setString(6, value.getNote());
        st.setLong(7,value.getId());
    }
}
