package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.calcinvoiceformpreviosperiod;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.01.2016.
 */
public class CalcInvoiceFromPreviousPeriodQuery extends AbstractSelectQuery<CalcInvoice,CalcInvoiceCondition> {
    public CalcInvoiceFromPreviousPeriodQuery(CalcInvoiceCondition condition) {
        super(condition);
    }

    @Override
    protected CalcInvoice parseResultSet(ResultSet rs) throws SQLException {
        CalcInvoice res = new CalcInvoice();
        res.setContraAgent(this.fillContraAgent(rs));
        res.setId(rs.getLong("id"));
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
        res.getDepartmentInput().setDepartment(new Department(rs.getLong("DepID")));
        res.getDepartmentInput().getDepartment().getProperty().setCategoryOfTariff(new CategoryOfTariff(rs.getLong("gategoryID")));
        res.setContrAgentAgreementID(rs.getLong("ContrAgentAgreementID"));
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
        res.setDepartment(new Department(rs.getLong("DepartmentID")));
        res.setInput(new Input(rs.getLong("inputID")));
        res.setHotWaterSupplier(new HotWaterSupplier(rs.getLong("hotSupplierID")));
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
            sb.append(" SELECT  c.[ID]  ");
            sb.append(" ,c.[ContraAgentID]   ");
            sb.append(" ,c.[DepartmentInputID]   ");
            sb.append(" ,c.[FactorOnBeginMonth]   ");
            sb.append(" ,c.[factorOnEndMonth]   ");
            sb.append("  ,c.[volumeOnCounter]   ");
            sb.append("  ,c.[realConsume]   ");
            sb.append("  ,c.[volumeOnNorma]   ");
            sb.append("  ,c.[CountDayByCheckers]   ");
            sb.append("  ,c.[volumeOnCheckers]   ");
            sb.append("  ,c.[countDayOnRepair]    ");
            sb.append("  ,c.[volumeAddingConsume]   ");
            sb.append("  ,c.[volumeCorrectionCounter]   ");
            sb.append("  ,c.[volumeAddingCapacityInput]   ");
            sb.append("  ,c.[volumeTotal]   ");
            sb.append("  ,c.[coefWatterSupply]   ");
            sb.append("   ,c.[coefTarrifWatterOut]   ");
            sb.append("  ,c.[tariff]   ");
            sb.append("  ,c.[Sum]    ");
            sb.append("  ,c.[Period]    ");
            sb.append("   ,c.[SubServiceID],di.[hotSupplierID],di.DepartmentID,di.inputID,[ContrAgentAgreementID]   ");
            sb.append(" ,d.id as depID      ");
            sb.append(" ,cc.gategoryID   ");
            sb.append("  FROM [dbo].[CalcInvoiceResults] as c   ");
            sb.append(" left join RegInfDepartsInputs as di on  c.DepartmentInputID = di.id ");
            sb.append(" left join RefDepartaments as d on d.id = di.DepartmentID    ");
            sb.append(" left join (     ");
            sb.append("         select max(id) as id,departmentid,max(period) as period,max(CategoryID) as gategoryID from RegInfDepartamentCharacters    ");
            sb.append(" group by departmentid    ");
            sb.append(" ) as cc on    ");
            sb.append(" d.id = cc.DepartmentID    ");
            sb.append("  where 1=1  ");
        if (condition.getContraAgentID() != null)
            sb.append(" and c.ContraAgentID = "+condition.getContraAgentID());
        if (condition.getPeriod() != null)
            sb.append(" and c.period = "+getDateAsString(condition.getPeriod()));
        if (condition.getDepartmentInputID() != null)
            sb.append(" and c.DepartmentInputID = "+condition.getDepartmentInputID());
        if (condition.getId() != null)
            sb.append(" and c.id = "+condition.getId());
        if (condition.getSubServiceID() != null)
            sb.append(" and c.[SubServiceID] = "+condition.getSubServiceID());
        //(sb.toString());

        return sb.toString();
    }
}
