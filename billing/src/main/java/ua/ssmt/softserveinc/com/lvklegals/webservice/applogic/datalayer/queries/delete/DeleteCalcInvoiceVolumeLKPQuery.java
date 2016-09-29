package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceVolumeLKP;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 6/3/2015.
 */
public class DeleteCalcInvoiceVolumeLKPQuery  extends AbstractModifyQuery<CalcInvoiceVolumeLKP>{
    @Override
    protected String getSQLQuery() {
       return "DELETE FROM [dbo].[calculateVolumeLKP] where Period = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceVolumeLKP value) throws SQLException {
        st.setDate(1, new Date(value.getDate().getTime()));
    }
}
