package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceRainsInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 19.01.2016.
 */
public class InsertCalcInvoiceRainPQuery extends AbstractModifyPrecompileQuery<CalcInvoiceRainsInvoice> {
    public InsertCalcInvoiceRainPQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[CalcInvoiceRainsInvoice]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[Period]\n" +
                "           ,[Sum],[Tariff],[volume],[AgreementID],[TariffGroupID])\n" +
                "     VALUES\n" +
                "           (?,?,dbo.getCurrentPeriod(),?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceRainsInvoice value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setDouble(3,value.getSum());
        st.setDouble(4,value.getTariff());
        st.setDouble(5,value.getVolume());
        st.setLong(6,value.getAgreement().getId());
        st.setLong(7,value.getCategoryOfTariff().getId());
    }
}
