package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12/9/2015.
 */
public class UpdateSaldoAllContraAgentQuery extends AbstractModifyQuery<Void> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" update RegSaldoOnContraAgent         ");
        sb.append(" set invoice = (rc.sumaInvoiceVVVP+sumInvoiceRains+sumInvoiceByLkp+sumInvoicePhys+sumInvoiceCorrectionRealize),   ");
        sb.append("         payments = (rc.sumPaymentVVVP+rc.sumPaymentP33+sumPaymentToPromyv+sumPaymentCommision)     ");
        sb.append("         ,SaldoOnEnd = (rc.sumaInvoiceVVVP+sumInvoiceRains+sumInvoiceByLkp+sumInvoicePhys+sumInvoiceCorrectionRealize)-(rc.sumPaymentVVVP+rc.sumPaymentP33+sumPaymentToPromyv+sumPaymentCommision) ");
        sb.append(" from RegSaldoOnContraAgent as r   ");
        sb.append(" left join dbo.getAllDataToUpdateSaldoVVVP() as rc on   ");
        sb.append(" r.ContraAgentID = rc.contraAgentID    ");
        sb.append(" and   ");
        sb.append(" r.AgreementID = rc.AgreementID   ");

        sb.append(" where GroupSaldoID = 1    ");;
        sb.append(" and Period = dbo.getCurrentPeriod()   ");

        sb.append(" update RegSaldoDetails   ");
        sb.append(" set sumInvoiceWatterSupplyAndWatterOut = rc.sumaInvoiceVVVP   ");
        sb.append("         ,sumInvoiceRains =  rc.sumInvoiceRains   ");
        sb.append("         ,sumInvoiceByLkp = rc.sumInvoiceByLkp    ");
        sb.append("         ,sumInputByPhysicalPerson = sumInvoicePhys    ");
        sb.append("         ,sumCorrectionOfRealization = rc.sumInvoiceCorrectionRealize   ");
        sb.append(" from RegSaldoDetails as rg   ");
        sb.append(" left join RegSaldoOnContraAgent as s on   ");
        sb.append(" rg.RegSaldoID = s.id   ");
        sb.append(" left join dbo.getAllDataToUpdateSaldoVVVP() as rc on   ");
        sb.append(" s.ContraAgentID = rc.contraAgentID   ");
        sb.append(" and    ");
        sb.append(" s.AgreementID = rc.AgreementID   ");

        sb.append(" where GroupSaldoID = 1   ");
        sb.append(" and Period = dbo.getCurrentPeriod()   ");


        sb.append(" update RegSaldoOnContraAgent   ");
        sb.append(" set invoice = (rc.sumInvoiceCalcWithoutPermission+sumaDocCorrectionForStockWithoutPermission),  ");
        sb.append("         payments = (sumPaymentStockWithoutPermission)   ");
        sb.append("         ,SaldoOnEnd = (rc.sumInvoiceCalcWithoutPermission+sumaDocCorrectionForStockWithoutPermission)-(sumPaymentStockWithoutPermission)  ");
        sb.append("         from RegSaldoOnContraAgent as r  ");
        sb.append(" left join dbo.getAllDataToUpdateSaldoStockWithoutPermission() as rc on  ");
        sb.append(" r.ContraAgentID = rc.contraAgentID  ");
        sb.append(" and  ");
        sb.append(" r.AgreementID = rc.AgreementID   ");

        sb.append(" where GroupSaldoID = 2   ");
        sb.append(" and Period = dbo.getCurrentPeriod()   ");

        sb.append(" update RegSaldoDetails   ");
        sb.append(" set sumInvoiceByStockWithoutPermission = rc.sumInvoiceCalcWithoutPermission   ");
        sb.append("         ,sumDocumentStockWithoutPermission = rc.sumaDocCorrectionForStockWithoutPermission   ");
        sb.append("         ,sumPaymentStockWithoutPermission = rc.sumPaymentStockWithoutPermission   ");
        sb.append(" from RegSaldoDetails as rg   ");
        sb.append(" left join RegSaldoOnContraAgent as s on   ");
        sb.append(" rg.RegSaldoID = s.id   ");
        sb.append(" left join dbo.getAllDataToUpdateSaldoStockWithoutPermission() as rc on   ");
        sb.append(" s.ContraAgentID = rc.contraAgentID   ");
        sb.append(" and   ");
        sb.append(" s.AgreementID = rc.AgreementID   ");

        sb.append(" where GroupSaldoID = 2  ");
        sb.append(" and Period = dbo.getCurrentPeriod()   ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Void value) throws SQLException {

    }
}
