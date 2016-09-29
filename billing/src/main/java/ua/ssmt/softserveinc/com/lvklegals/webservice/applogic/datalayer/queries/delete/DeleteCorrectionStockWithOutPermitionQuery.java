package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.10.2014.
 */
public class DeleteCorrectionStockWithOutPermitionQuery extends AbstractModifyQuery<DocCorrectionStockWithOutPermission> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocCorrectionForStockWithOutPermission]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DocCorrectionStockWithOutPermission value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
