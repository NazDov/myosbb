package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceVolumeLKP;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 6/1/2015.
 */
public class PutCalcResultVolumeLKPInvoicePQuery extends AbstractModifyPrecompileQuery<CalcInvoiceVolumeLKP> {
    public PutCalcResultVolumeLKPInvoicePQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[calculateVolumeLKP]\n" +
                "           (\n" +
                "            [RegInfDepartmentID]\n" +  //1
                "           ,[CalcVolume]" +            //2
                "           ,[Period]," +               //3
                "            [sum]" +                   //4
                "           ,[Tariff]" +                //5
                "           ,[SubServiceID]" +          //6
                "           ,[TariffGroupID]" +         //7
                "           ,[ContraAgentID]" +         //8
                "           ,[AgreementID]" +           //9
                "           ,[pdv]" +                   //10

                "           ,[sumWithPdv]\n" +         //11
                "           ,[DepartmentAgreementID])\n" +         //11
                "     VALUES\n" +
                "           (?,?,dbo.getCurrentPeriod(),?,?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoiceVolumeLKP value) throws SQLException {
        st.setLong(1,value.getDepartmentInput().getId());
        st.setDouble(2,value.getVolume());
        st.setDouble(3,value.getSum());
        st.setDouble(4,value.getTarrif());
        st.setLong(5,value.getSubService().getId());
        st.setLong(6,value.getCategoryOfTariff().getId());
        st.setLong(7,value.getContraAgent().getId());
        st.setLong(8,value.getAgreement().getId());
        st.setDouble(9,value.getPdv());
        st.setDouble(10,value.getSumWithPdv());
        st.setLong(11,value.getDepartmentAgreement().getId());
    }
}
