package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractModifyPrecompileQuery;

import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 02.04.2015.
 */
public class PutCalcResultInvoicePQuery extends AbstractModifyPrecompileQuery<CalcInvoice> {

    public PutCalcResultInvoicePQuery(Connection connection) {
        super(connection);
    }

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[CalcInvoiceResults]\n" +
                "           ([ContraAgentID]\n" +               //1
                "           ,[DepartmentInputID]\n" +           //2
                "           ,[FactorOnBeginMonth]\n" +          //3
                "           ,[factorOnEndMonth]\n" +            //4
                "           ,[volumeOnCounter]\n" +             //5
                "           ,[realConsume]\n" +                 //6
                "           ,[volumeOnNorma]\n" +               //7
                "           ,[CountDayByCheckers]\n" +          //8
                "           ,[volumeOnCheckers]\n" +            //9
                "           ,[countDayOnRepair]\n" +            //10
                "           ,[volumeAddingConsume]\n" +         //11
                "           ,[volumeCorrectionCounter]\n" +     //12
                "           ,[volumeAddingCapacityInput]\n" +   //13
                "           ,[volumeTotal]\n" +                 //14
                "           ,[coefWatterSupply]\n" +            //15
                "           ,[coefTarrifWatterOut]\n" +         //16
                "           ,[tariff]\n" +                      //17
                "           ,[Sum]\n" +                         //18
                "           ,[Period]\n" +
                "           ,[SubServiceID]\n" +                //19
                "           ,[ContrAgentAgreementID]  "+        //20
                "           ,[DepartamentAgreementID] "+        //21
                "           ,[TotalVolumeCounterByMonth] "+     //22
                "           ,[countDayOnNorma] "+               //23
                "           ,[volumeOnRepair] "+                //24
                "           ,[volumeCorrectionDonarach] " +     //25
                "           ,[TarifCategotyID],[volumeTotalWithCoef],[id]) "+              //26   //27
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,dbo.getCurrentPeriod(),?,?,?,?,?,?,?,?,?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoice value) throws SQLException {
        if (value.getContraAgent() == null)
            System.out.println(value.getDepartmentInput().getId());
        if (value.getContraAgent().getId() == null)
            System.out.println(value.getDepartmentInput().getId());
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartmentInput().getId());
        st.setInt(3,value.getFactorOnBeginMonth());
        st.setInt(4,value.getFactorOnEndMonth());
        st.setInt(5,value.getVolumeOnCounter());
        st.setInt(6,value.getRealConsume());
        st.setDouble(7,value.getVolumeOnNorma());
        st.setDouble(8,value.getCountDayByCheckers());
        st.setDouble(9,value.getVolumeOnCheckers());
        st.setDouble(10,value.getCountDayOnRepair());
        st.setDouble(11,value.getVolumeAddingConsume());
        st.setInt(12,value.getVolumeCorrectionCounter());
        st.setDouble(13,value.getVolumeAddingCapacityInput());
        st.setDouble(14,value.getVolumeTotal());
        st.setDouble(15,value.getCoefWatterSupply());
        st.setDouble(16,value.getCoefTarrifWatterOut());
        st.setDouble(17,value.getTariff());
        st.setDouble(18,value.getSum());
        st.setLong(19,value.getSubService().getId());

        if (value.getContrAgentAgreementID() == null)
            st.setNull(20, Types.BIGINT);
        else
            st.setLong(20, value.getContrAgentAgreementID());

        if (value.getDepartamentAgreementID() == null)
            st.setNull(21, Types.BIGINT);
        else
            st.setLong(21, value.getDepartamentAgreementID());

            st.setInt(22,value.getTotalVolumeCounterByMonth());

            st.setInt(23,value.getCountDayOnNorma());

            st.setInt(24, value.getVolumeOnRepair());

            st.setInt(25,value.getVolumeCorrectionDonarach());

            st.setLong(26,value.getTarifCategotyID());

        st.setDouble(27,value.getVolumeTotalWithCoef());
        st.setLong(28,value.getId());

    }
}
