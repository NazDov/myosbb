package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoicetohotwattersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllCalcInoviceToHotWatterSupplierQuery extends AbstractSelectQuery<CalcInvoice,Void> {
    public AllCalcInoviceToHotWatterSupplierQuery(Void condition) {
        super(condition);
    }

    @Override
    protected CalcInvoice parseResultSet(ResultSet rs) throws SQLException {
        CalcInvoice res = new CalcInvoice();
        res.setContraAgent(this.fillContraAgent(rs));
        // res.setId(rs.getLong("id"));
        res.setDepartmentInput(this.fillInput(rs));
        res.setFactorOnEndMonth(rs.getInt("factorOnEndMonth"));
        res.setFactorOnBeginMonth(rs.getInt("FactorOnBeginMonth"));
        res.setVolumeOnCounter(rs.getInt("volumeOnCounter"));
        res.setRealConsume(rs.getInt("realConsume"));
        res.setVolumeOnNorma(rs.getDouble("volumeOnNorma"));
        res.setCountDayByCheckers(rs.getInt("volumeOnCheckers"));
        res.setCountDayOnRepair(rs.getInt("countDayOnRepair"));
        res.setVolumeAddingConsume(rs.getInt("volumeAddingConsume"));
        res.setVolumeCorrectionCounter(rs.getInt("volumeCorrectionCounter"));
        res.setVolumeAddingCapacityInput(rs.getInt("volumeAddingCapacityInput"));
        res.setVolumeTotal(rs.getInt("volumeTotal"));
        res.setCoefWatterSupply(rs.getDouble("coefWatterSupply"));
        res.setCoefTarrifWatterOut(rs.getDouble("coefTarrifWatterOut"));
        res.setTariff(rs.getDouble("tariff"));
        res.setSubService(this.fillSubService(rs));
        res.setSum(rs.getDouble("Sum"));
        res.setTarifCategotyID(rs.getLong("TarifCategotyID"));
        return res;
    }

    private SubService fillSubService(ResultSet rs) throws SQLException {
        SubService res = new SubService();
        res.setId(rs.getLong("SubServiceID"));
        return res;
    }

    private DepartmentInput fillInput(ResultSet rs) throws SQLException {
        DepartmentInput res = new DepartmentInput();
        res.setId(rs.getLong("DepartmentInputID"));
        return res;
    }


    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("  SELECT  ");
        sb.append("  [ContraAgentID]   ");
        sb.append(" ,[DepartmentInputID]   ");
        sb.append(" ,[FactorOnBeginMonth]   ");
        sb.append(" ,[factorOnEndMonth]   ");
        sb.append("  ,[volumeOnCounter]   ");
        sb.append("  ,[realConsume]   ");
        sb.append("  ,[volumeOnNorma]   ");
        sb.append("  ,[CountDayByCheckers]   ");
        sb.append("  ,[volumeOnCheckers]   ");
        sb.append("  ,[countDayOnRepair]    ");
        sb.append("  ,[volumeAddingConsume]   ");
        sb.append("  ,[volumeCorrectionCounter]   ");
        sb.append("  ,[volumeAddingCapacityInput]   ");
        sb.append("  ,[TarifCategotyID]   ");
        sb.append("  ,[volumeTotal]   ");
        sb.append("  ,[coefWatterSupply]   ");
        sb.append("   ,[coefTarrifWatterOut]   ");
        sb.append("  ,[tariff]   ");
        sb.append("  ,[Sum]    ");
        sb.append("  ,c.[Period]    ");
        sb.append("   ,[SubServiceID]   ");
        sb.append("          FROM [dbo].[CalcInvoiceResults] as c ");
        sb.append("  right join [RegInfDepartsInputs] as di on ");
        sb.append("  c.DepartmentInputID = di.id ");
        sb.append("  left join [RefInputs] as i on ");
        sb.append("  di.InputID = i.id  ");
        sb.append("  where i.ServiceID =2  ");
        sb.append("  and hotSupplierID is not null  ");
        sb.append(" and c.Period = dbo.getCurrentPeriod()");

        return sb.toString();
    }
}
