package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 10.12.2014.
 */
public class CreateCalcInvoiceQuery extends AbstractModifyQuery<CalcInvoice> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[CalcInvoiceResults]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentInputID]\n" +
                "           ,[FactorOnBeginMonth]\n" +
                "           ,[factorOnEndMonth]\n" +
                "           ,[volumeOnCounter]\n" +
                "           ,[realConsume]\n" +
                "           ,[volumeOnNorma]\n" +
                "           ,[CountDayByCheckers]\n" +
                "           ,[volumeOnCheckers]\n" +
                "           ,[countDayOnRepair]\n" +
                "           ,[volumeAddingConsume]\n" +
                "           ,[volumeCorrectionCounter]\n" +
                "           ,[volumeAddingCapacityInput]\n" +
                "           ,[volumeTotal]\n" +
                "           ,[coefWatterSupply]\n" +
                "           ,[coefTarrifWatterOut]\n" +
                "           ,[tariff]\n" +
                "           ,[Sum]\n" +
                "           ,[Period]\n" +
                "           ,[SubServiceID],[volumeTotalWithCoef],[ContrAgentAgreementID],[TarifCategotyID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,dbo.getCurrentPeriod(),?,?,?,?);";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, CalcInvoice value) throws SQLException {
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
        st.setDouble(20,value.getVolumeTotalWithCoef());
        if (value.getContrAgentAgreementID() == null)
            st.setNull(21, Types.BIGINT);
        else
            st.setLong(21,value.getContrAgentAgreementID());
        if (value.getTarifCategotyID() == null)
            st.setNull(22,Types.BIGINT);
        else
            st.setLong(22,value.getTarifCategotyID());

    }
}
