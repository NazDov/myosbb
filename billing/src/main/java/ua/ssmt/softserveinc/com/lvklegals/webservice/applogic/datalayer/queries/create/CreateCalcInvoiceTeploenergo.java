package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceTeploenergo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceTeploenergoCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 10/16/2015.
 */
public class CreateCalcInvoiceTeploenergo extends AbstractModifyQuery<CalcInvoiceTeploenergo> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[CalcInvoiceTeploenergo]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[InputID]\n" +
                "           ,[Volume]\n" +
                "           ,[SubServiceID]\n" +
                "           ,[CategoryOfTariffID]\n" +
                "           ,[Sum]\n" +
                "           ,[HotWatterSupplierID]\n" +
                "           ,[Tariff]\n" +
                "           ,[AgreementSupplierID]\n" +
                "           ,[Period],[DepartmentAgreementID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?\n" +
                "           ,dbo.getCurrentPeriod(),?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceTeploenergo value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getInput().getId());
        st.setDouble(4,value.getVolume());
        st.setLong(5,value.getSubService().getId());
        st.setLong(6,value.getTariff().getId());
        st.setDouble(7,value.getSum());
        st.setLong(8,value.getHotWaterSupplier().getId());
        st.setDouble(9,value.getTariffValue());

        if (value.getHotWatterSupplierAgreement() == null || value.getHotWatterSupplierAgreement().getId() == null){
            st.setNull(10,Types.BIGINT);
        }
        else{
            st.setLong(10,value.getHotWatterSupplierAgreement().getId());
        }

        if (value.getDepartmentAgreement() == null || value.getDepartmentAgreement().getId() == null)
            st.setNull(11,Types.BIGINT);
        else
            st.setLong(11,value.getDepartmentAgreement().getId());



    }
}
