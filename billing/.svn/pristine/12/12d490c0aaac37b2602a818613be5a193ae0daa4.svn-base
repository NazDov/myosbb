package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoOnDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12/9/2015.
 */
public class CreateMainSaldoOnDepartmentQuery extends AbstractModifyQuery<SaldoOnDepartment> {
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" INSERT INTO [dbo].[RegSaldoOnDepartment]   ");
        sb.append(" ([ContraAgentID]                        ");
        sb.append(" ,[DepartmentAgreementID]                ");
        sb.append(" ,[SaldoOnBegin]                         ");
        sb.append(" ,[invoice]                              ");
        sb.append(" ,[payment]                              ");
        sb.append(" ,[SaldoOnEnd]                           ");
        sb.append(" ,[DepartmentID]                         ");
        sb.append(" ,[Period])                              ");
        sb.append(" VALUES                                  ");
        sb.append("         (?                              ");
        sb.append(" ,?                                      ");
        sb.append(" ,0                                      ");
        sb.append("         ,0                              ");
        sb.append("        ,0                              ");
        sb.append("         ,0                              ");
        sb.append("         ,?                              ");
        sb.append("         ,dbo.getCurrentPeriod())        ");


        sb.append(" INSERT INTO [dbo].[RegSaldoOnDepartmentDetails]  ");
        sb.append(" ([SaldoDepartmentID]                             ");
        sb.append(" ,[SumCorrectionOfRealize]                        ");
        sb.append(" ,[SumInvoiceByLKP]                              ");
        sb.append(" ,[SumPaymentDepartment]                         ");
        sb.append(" ,[SumInnerOborot]                               ");
        sb.append(" ,[SumComiss])                                       ");
        sb.append(" select s.id,0,0,0,0,0 from RegSaldoOnDepartment as s    ");
        sb.append(" left join RegSaldoOnDepartmentDetails as sd on      ");
        sb.append(" s.id = sd.SaldoDepartmentID         ");
        sb.append(" where sd.id is null");
        return sb.toString();
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SaldoOnDepartment value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getAgreement().getId());
        st.setLong(3,value.getDepartment().getId());
    }
}
