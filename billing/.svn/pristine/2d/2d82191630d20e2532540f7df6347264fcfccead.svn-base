package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 11/28/2015.
 */
public class SearchSaldoDetailsQuery  extends AbstractSelectQuery<SaldoDetails,SaldoDetails>{

    public SearchSaldoDetailsQuery(SaldoDetails condition) {
        super(condition);
    }

    @Override
    protected SaldoDetails parseResultSet(ResultSet rs) throws SQLException {
        SaldoDetails res = new SaldoDetails();
        res.setId(rs.getLong("id"));
        res.setSaldoID(rs.getLong("RegSaldoID"));
        res.setSumInvoiceWatterSupplyAndWatterOut(rs.getDouble("sumInvoiceWatterSupplyAndWatterOut"));
        res.setSumInvoiceRains(rs.getDouble("sumInvoiceRains"));
        res.setSumCorrectionOfRealization(rs.getDouble("sumCorrectionOfRealization"));
        res.setSumInvoiceByLkp(rs.getDouble("sumInvoiceByLkp"));
        res.setSumInputByPhysicalPerson(rs.getDouble("sumInputByPhysicalPerson"));
        res.setSumInvoiceByStockWithoutPermission(rs.getDouble("sumInvoiceByStockWithoutPermission"));
        res.setSumInvoiceByPenya(rs.getDouble("sumInvoiceByPenya"));
        res.setSumPaymentVVVPP33AndInnerProvod(rs.getDouble("sumPaymentVVVPP33AndInnerProvod"));
        res.setSumPaymentCommis(rs.getDouble("sumPaymentCommis"));
        res.setSumPenyaVVVPAndInnerProvod(rs.getDouble("sumPenyaVVVPAndInnerProvod"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT [id]                                     ");
        sb.append(" ,[RegSaldoID]                                   ");
        sb.append(" ,[sumInvoiceWatterSupplyAndWatterOut]           ");
        sb.append(" ,[sumInvoiceRains]                              ");
        sb.append(" ,[sumCorrectionOfRealization]                   ");
        sb.append(" ,[sumInvoiceByLkp]                              ");
        sb.append(" ,[sumInputByPhysicalPerson]                     ");
        sb.append(" ,[sumInvoiceByStockWithoutPermission]           ");
        sb.append(" ,[sumInvoiceByPenya]                            ");
        sb.append(" ,[sumPaymentVVVPP33AndInnerProvod]              ");
        sb.append(" ,[sumPaymentCommis]                             ");
        sb.append(" ,[sumPenyaVVVPAndInnerProvod]                   ");
        sb.append(" FROM [dbo].[RegSaldoDetails]                    ");
        sb.append(" where 1=1                                       ");
        sb.append(" and RegSaldoID = "+condition.getSaldoID());
        return sb.toString();
    }
}
