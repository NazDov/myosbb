package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12/10/2015.
 */
public class UpdateSaldoAllDepartmentQuery extends AbstractModifyQuery<Void> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" UPDATE [dbo].[RegSaldoOnDepartment]                         ");
        sb.append(" SET                                                         ");
        sb.append("  [invoice] = (rc.sumCorrection+rc.sumInvoiceByLkp)          ");
        sb.append(" ,[payment] = (rc.sumPaymentCommision+rc.sumPaymentDepartment+sumPaymentToPromyv)    ");
        sb.append(" ,[SaldoOnEnd] = (SaldoOnBegin+(rc.sumCorrection+rc.sumInvoiceByLkp))-((rc.sumPaymentCommision+rc.sumPaymentDepartment+sumPaymentToPromyv)) ");
        sb.append(" from RegSaldoOnDepartment as s      ");
        sb.append(" left join dbo.getAllDataToUpdateSaldoOnDepartment() as rc on        ");
        sb.append(" s.ContraAgentID = rc.contraAgentID                      ");
        sb.append(" and                                             ");
        sb.append(" s.DepartmentAgreementID = rc.Agreementid                ");
        sb.append(" where Period = dbo.getCurrentPeriod()               ");


        sb.append(" UPDATE [dbo].[RegSaldoOnDepartmentDetails]                                  ");
        sb.append(" SET                                                                         ");
        sb.append("         [SumCorrectionOfRealize] = rc.sumCorrection                         ");
        sb.append(" ,[SumInvoiceByLKP] = rc.sumInvoiceByLkp                                     ");
        sb.append(" ,[SumPaymentDepartment] = rc.sumPaymentDepartment                           ");
        sb.append(" ,[SumInnerOborot] = rc.sumPaymentToPromyv                                   ");
        sb.append(" ,[SumComiss] = rc.sumPaymentCommision                                       ");
        sb.append(" from RegSaldoOnDepartmentDetails as rg                                      ");
        sb.append(" left join RegSaldoOnDepartment as s on                                      ");
        sb.append(" rg.SaldoDepartmentID = s.id                                                 ");
        sb.append(" left join dbo.getAllDataToUpdateSaldoOnDepartment() as rc on                ");
        sb.append(" s.ContraAgentID = rc.contraAgentID                                          ");
        sb.append(" and                                                                         ");
        sb.append(" s.DepartmentAgreementID = rc.Agreementid                                    ");
        sb.append(" where Period = dbo.getCurrentPeriod()                                       ");


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
