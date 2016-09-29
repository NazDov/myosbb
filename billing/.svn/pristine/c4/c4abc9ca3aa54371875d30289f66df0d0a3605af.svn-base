package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 19.01.2016.
 */
public class UpdateSaldoDetailsPQuery extends AbstractModifyPrecompileQuery<SaldoDetails> {
    public UpdateSaldoDetailsPQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" UPDATE [dbo].[RegSaldoDetails]                      ");
        sb.append(" SET                                                 ");
        sb.append("         [sumInvoiceWatterSupplyAndWatterOut] = ?    ");
        sb.append(" ,[sumInvoiceRains] = ?                              ");
        sb.append(" ,[sumCorrectionOfRealization] = ?                   ");
        sb.append(" ,[sumInvoiceByLkp] = ?                              ");
        sb.append(" ,[sumInputByPhysicalPerson] = ?                     ");
        sb.append(" ,[sumInvoiceByStockWithoutPermission] = ?           ");
        sb.append(" ,[sumInvoiceByPenya] = ?                            ");
        sb.append(" ,[sumPaymentVVVPP33AndInnerProvod] = ?              ");
        sb.append(" ,[sumPaymentCommis] = ?                             ");
        sb.append(" ,[sumPenyaVVVPAndInnerProvod] = ?, [sumPaymentVVVP] = ?                   ");
        sb.append("             ,[sumPaymentProvyv] = ?, [sumPaymentPP3] = ?,[sumPaymentStockWithoutPermission] = ?, [sumPaymentPenya] = ?, [sumDocumentStockWithoutPermission]=?    ");
        sb.append("   ,[sumInvoiceTeploenergo] = ?,[sumInovoiceCancelDept] = ? ,[sumInvoiceCorrectionStockWithoutPermission]=? ,sumPDV = ?" );
        sb.append(" WHERE [id] = ?                                      ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SaldoDetails value) throws SQLException {
        st.setDouble(1,value.getSumInvoiceWatterSupplyAndWatterOut());
        st.setDouble(2,value.getSumInvoiceRains());
        st.setDouble(3, value.getSumCorrectionOfRealization());
        st.setDouble(4,value.getSumInvoiceByLkp());
        st.setDouble(5,value.getSumInputByPhysicalPerson());
        st.setDouble(6,value.getSumInvoiceByStockWithoutPermission());
        st.setDouble(7,value.getSumInvoiceByPenya());
        st.setDouble(8,value.getSumPaymentVVVPP33AndInnerProvod());
        st.setDouble(9,value.getSumPaymentCommis());
        st.setDouble(10, value.getSumPenyaVVVPAndInnerProvod());
        st.setDouble(11,value.getSumPaymentVVVP());
        st.setDouble(12,value.getSumPaymentPromyv());
        st.setDouble(13,value.getSumPaymentPP3());
        st.setDouble(14,value.getSumPaymentStockWithoutPermission());
        st.setDouble(15,value.getSumPaymentPenya());
        st.setDouble(16,value.getSumDocumentStockWithoutPermission());
        st.setDouble(17,value.getSumInvoiceTeploenergo());
        st.setDouble(18,value.getSumInvoiceCancelDept());
        st.setDouble(19,value.getSumInvoiceCorrectionStockWithoutPermission());
        st.setDouble(20,value.getPdv());
        st.setDouble(21,value.getId());
    }
}
