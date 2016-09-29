package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/4/2015.
 */
public class CalculatePDVQuery extends AbstractModifyQuery {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [dbo].[calcInvoicePDV]  ");
        sb.append(" (                                   ");
        sb.append("         [period]                    ");
        sb.append(" ,[contraAgentID]                    ");
        sb.append(" ,[totalInvoiceWithoutPDV]           ");
        sb.append(" ,[totalInoiceWithPDV]               ");
        sb.append(" ,[sumPDV]                           ");
        sb.append(" ,[serviceID])                       ");
        sb.append(" select                              ");
        sb.append(" dbo.getCurrentPeriod(),             ");
        sb.append("         c.id as contraAgentID,      ");
        sb.append(" (isNull(totalInvoiceWithoutPdv,0)+isNull(totalRainWithoutPvd,0)) as sumInvoiceWithoutPDV,    ");
        sb.append(" ((isNull(totalInvoiceWithoutPdv,0)+isnull(totalRainWithoutPvd,0))*1.2) as sumInvoiceWithPDV, ");
        sb.append(" (((isNull(totalInvoiceWithoutPdv,0)+isNull(totalRainWithoutPvd,0))*1.2)-(isNull(totalInvoiceWithoutPdv,0)+isNull(totalRainWithoutPvd,0))) as pdv, ");
        sb.append(" 1 ");
        sb.append(" from RefContragents as c  ");
        sb.append(" left join (   ");
        sb.append("         select contraAgentID,period,sum(isNull([sum],0)) as totalInvoiceWithoutPdv from CalcInvoiceResults   ");
        sb.append(" where period =dbo.getCurrentPeriod()  ");
        sb.append(" group by ContraAgentID,period  )  as ci on c.id = ContraAgentID  ");
        sb.append(" left join (   ");
        sb.append("         select contraAgentID,period,isNull(sum([sum]),0) as totalRainWithoutPvd from CalcInvoiceRainsInvoice   ");
        sb.append(" where period = dbo.getCurrentPeriod()   ");
        sb.append(" group by contraAgentID,period ) as rain on rain.ContraAgentID = c.id   ");

        sb.append(" INSERT INTO [dbo].[calcInvoicePDV]   ");
        sb.append(" (                                   ");
        sb.append("         [period]             ");
        sb.append(" ,[contraAgentID]    ");
        sb.append(" ,[totalInvoiceWithoutPDV]     ");
        sb.append(" ,[totalInoiceWithPDV]      ");
        sb.append(" ,[sumPDV]              ");
        sb.append(" ,[serviceID])         ");
        sb.append(" select                        ");
        sb.append(" dbo.getCurrentPeriod(),        ");
        sb.append("         c.id as contraAgentID, ");
        sb.append(" (isNull(totalInvoiceWithoutPdv,0)) as sumInvoiceWithoutPDV,   ");
        sb.append(" ((isNull(totalInvoiceWithoutPdv,0))*1.2) as sumInvoiceWithPDV,  ");
        sb.append(" (((isNull(totalInvoiceWithoutPdv,0))*1.2)-(isNull(totalInvoiceWithoutPdv,0))) as pdv,   ");
        sb.append(" 3    ");
        sb.append(" from RefContragents as c   ");
        sb.append(" left join (   ");
        sb.append("         select contraAgentID,cwp.period,sum(isNull(cwp.[sum],0)) as totalInvoiceWithoutPdv from CalcInvoiceStockWithoutPermition as cwp  ");
        sb.append(" left join CalcInvoiceResults as ci on cwp.id = cwp.CalcInvoiceID  ");
        sb.append(" where cwp.period =dbo.getCurrentPeriod()   ");
        sb.append(" group by ContraAgentID,cwp.period  )  as ci on c.id = ContraAgentID   ");

        sb.append("  INSERT INTO [dbo].[calcInvoicePDV]   ");
        sb.append(" (                       ");
        sb.append("         [period]        ");
        sb.append(" ,[contraAgentID]      ");
        sb.append(" ,[totalInvoiceWithoutPDV]   ");
        sb.append(" ,[totalInoiceWithPDV]   ");
        sb.append(" ,[sumPDV]     ");
        sb.append(" ,[serviceID])    ");

        sb.append(" select    ");
        sb.append(" dbo.getCurrentPeriod(),   ");
        sb.append("         c.id as contraAgentID,   ");
        sb.append(" (isNull(totalInvoiceWithoutPdv,0)+isNull(totalRainWithoutPvd,0)) as sumInvoiceWithoutPDV,  ");
        sb.append(" ((isNull(totalInvoiceWithoutPdv,0)+isnull(totalRainWithoutPvd,0))*1.2) as sumInvoiceWithPDV,  ");
        sb.append(" (((isNull(totalInvoiceWithoutPdv,0)+isNull(totalRainWithoutPvd,0))*1.2)-(isNull(totalInvoiceWithoutPdv,0)+isNull(totalRainWithoutPvd,0))) as pdv,  ");
        sb.append(" 6   ");
        sb.append(" from RefContragents as c  ");
        sb.append(" left join (   ");
        sb.append("        select contraAgentID,period,sum(isNull([sum],0)) as totalInvoiceWithoutPdv from CalcInvoiceResults  ");
        sb.append(" where period =dbo.getCurrentPeriod()   ");
        sb.append(" group by ContraAgentID,period  )  as ci on c.id = ContraAgentID  ");
        sb.append(" left join (   ");
        sb.append("         select contraAgentID,period,isNull(sum([suma]),0) as totalRainWithoutPvd from CalcHotWatterSupplier  ");
        sb.append(" where period = dbo.getCurrentPeriod()   ");
        sb.append(" group by contraAgentID,period ) as rain on rain.ContraAgentID = c.id   ");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Object value) throws SQLException {

    }
}
