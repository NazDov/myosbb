package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.StockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 11.11.2014.
 */
public class UpdateStockWithoutPermissionQuery extends AbstractModifyQuery<StockWithoutPermission> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocInvoiceByStockWithoutPermission]\n" +
                "   SET " +
                "      [periodCalculation] = ?\n" +
                "      ,[contraAgentID] = ?\n" +
                "      ,[period] = dbo.getCurrentPeriod()\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, StockWithoutPermission value) throws SQLException {
        st.setDate(1,new Date(value.getPeriodCalculation().getTime()));
        //st.setLong(2, value.getContraAgent().getId());
        st.setLong(3,value.getId());
    }
}
