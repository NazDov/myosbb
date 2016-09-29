package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 11/29/2015.
 */
public class CreateSaldoDetailsQuery extends AbstractModifyQuery<SaldoDetails> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [dbo].[RegSaldoDetails]                 ");
        sb.append(" ([RegSaldoID]                                       ");
        sb.append(" ,[sumInvoiceWatterSupplyAndWatterOut]               ");
        sb.append(" ,[sumInvoiceRains]                                  ");
        sb.append(" ,[sumCorrectionOfRealization]                       ");
        sb.append(" ,[sumInvoiceByLkp]                                  ");
        sb.append(" ,[sumInputByPhysicalPerson]                         ");
        sb.append(" ,[sumInvoiceByStockWithoutPermission]               ");
        sb.append(" ,[sumInvoiceByPenya]                                ");
        sb.append(" ,[sumPaymentVVVPP33AndInnerProvod]                  ");
        sb.append(" ,[sumPaymentCommis]                                 ");
        sb.append(" ,[sumPenyaVVVPAndInnerProvod],[sumPaymentVVVP],[sumPaymentPenya],[sumDocumentStockWithoutPermission],[sumInvoiceTeploenergo]\n" +
                "           ,[sumInovoiceCancelDept]\n" +
                "           ,[sumInvoiceCorrectionStockWithoutPermission]\n" +
                "           ,[sumPDV],[sumPaymentProvyv],[sumPaymentPP3],[sumPaymentStockWithoutPermission])                      ");
        sb.append(" VALUES                                              ");
        sb.append("         (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)                     ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {

        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SaldoDetails value) throws SQLException {
        st.setLong(1,value.getSaldoID());
        st.setDouble(2,value.getSumInvoiceWatterSupplyAndWatterOut());
        st.setDouble(3,value.getSumInvoiceRains());
        st.setDouble(4,value.getSumCorrectionOfRealization());
        st.setDouble(5,value.getSumInvoiceByLkp());
        st.setDouble(6,value.getSumInputByPhysicalPerson());
        st.setDouble(7,value.getSumInvoiceByStockWithoutPermission());
        st.setDouble(8,value.getSumInvoiceByPenya());
        st.setDouble(9,value.getSumPaymentVVVPP33AndInnerProvod());
        st.setDouble(10,value.getSumPaymentCommis());
        st.setDouble(11,value.getSumPenyaVVVPAndInnerProvod());
        st.setDouble(12,value.getSumPaymentVVVP());
        st.setDouble(13,value.getSumPaymentPenya());
        st.setDouble(14,value.getSumDocumentStockWithoutPermission());
        st.setDouble(15,value.getSumInvoiceTeploenergo());
        st.setDouble(16,value.getSumInvoiceCancelDept());
        st.setDouble(17,value.getSumInvoiceCorrectionStockWithoutPermission());
        st.setDouble(18,value.getPdv());
        st.setDouble(19,value.getSumPaymentPromyv());
        st.setDouble(20,value.getSumPaymentPP3());
        st.setDouble(21,value.getSumPaymentStockWithoutPermission());
    }
}
