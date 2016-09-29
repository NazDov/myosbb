package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceStockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.*;

/**
 * Created by vostap on 6/2/2015.
 */
public class PutCalcStrockWithoutPermissionPQuery extends AbstractModifyPrecompileQuery<CalcInvoiceStockWithoutPermission> {
    public PutCalcStrockWithoutPermissionPQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[CalcInvoiceStockWithoutPermition]\n" +
                "           (ContraAgentID\n" +
                "           ,[volume]\n" +
                "           ,[period]\n" +
                "           ,[periodCalc],[Sum],[Sum08],[DepartamentInputID],[SubServiceID],[DepartmentID],[TarifCategory],[Tariff],[koeficient],[AgreementID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceStockWithoutPermission value) throws SQLException {
        st.setLong(1, value.getContraAgent().getId());
        st.setDouble(2,value.getVal());
        st.setDate(3,new Date(value.getPeriod().getTime()));
        st.setDate(4,new Date(value.getPeriodCalculation().getTime()));
        st.setDouble(5,value.getSum());
        st.setDouble(6,value.getSum08());
        if (value.getDepartmentInput() == null)
            st.setNull(7, Types.BIGINT);
        else
            st.setLong(7,(value.getDepartmentInput().getId()));
        if (value.getSubService() == null)
            st.setNull(8, Types.BIGINT);
        else
            st.setLong(8,(value.getSubService().getId()));
        st.setLong(9,value.getDepartment().getId());
        st.setLong(10,value.getDepartment().getProperty().getCategoryOfTariff().getId());
        st.setDouble(11,value.getTariff());
        st.setDouble(12,value.getKoefficient());
        if (value.getAgreement() == null || value.getAgreement().getId() ==null)
            st.setNull(13,Types.BIGINT);
        else
            st.setLong(13,value.getAgreement().getId());


    }
}
