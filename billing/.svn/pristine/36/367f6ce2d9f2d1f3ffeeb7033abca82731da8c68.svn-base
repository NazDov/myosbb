package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysCounterStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchDepartmentInputQuery extends AbstractSelectQuery<DepartmentInput,DepartmentInputCondition> {
    public SearchDepartmentInputQuery(DepartmentInputCondition condition) {
        super(condition);
    }

    @Override
    protected DepartmentInput parseResultSet(ResultSet rs) throws SQLException {
        DepartmentInput res = new DepartmentInput();
        res.setId(rs.getLong("id"));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setSubServices(this.fillSubServices(rs));
        res.setInputProperty(this.fillInputProperty(rs));
        res.setDateWhirring(rs.getDate("DateWirring"));
        res.setStartDate(rs.getDate("DateStart"));
        res.setEndDate(rs.getDate("DateEnd"));
        res.setPeriod(rs.getDate("Period"));
        res.setCounterNumber(rs.getString("Number"));
        res.setModelName(rs.getString("ModelName"));
        res.setRegisterOfCounter(this.fillRegisterOfCounter(rs));
        res.setUnregisterOfCounter(this.fillUnregisterOfCounter(rs));
        res.setTypeRemove(this.fillTypeRemove(rs));
        res.setCounter(this.fillCounter(rs));
        res.setAgreement(this.fillAgreement(rs));
        res.setHotWaterSupplier(this.fillHotWaterSupplier(rs));
        res.setActivityCounter(this.fillSysStatus(rs));


        return res;
    }
    private UnregisterOfCounter fillUnregisterOfCounter (ResultSet rs ) throws  SQLException{
        UnregisterOfCounter res = new UnregisterOfCounter();
        res.setId(rs.getLong("unrID"));


        return res;
    }
    private SysCounterStatus fillSysStatus (ResultSet rs ) throws  SQLException{
        SysCounterStatus res = new SysCounterStatus();
        res.setId(rs.getLong("CounterStatusId"));
        res.setDocRegisterCounterID(rs.getLong("RegID"));
        res.setDocUnregisterCounterID(rs.getLong("unrID"));
        res.setStatusTypeID(rs.getLong("CounterStatus"));


        return res;
    }
    private HotWaterSupplier fillHotWaterSupplier (ResultSet rs) throws SQLException{
        HotWaterSupplier res = new HotWaterSupplier();
        res.setId(rs.getLong("hotSupplyId"));
        return res;
    }
    private Agreement fillAgreement (ResultSet rs ) throws  SQLException{
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
        return res;
    }
    private TypeRemove fillTypeRemove (ResultSet rs ) throws  SQLException{
        TypeRemove res = new TypeRemove();
        res.setId(rs.getLong("TypeRemove"));


        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        res.getModel().setName(rs.getString("ModelName"));
        res.setNumber(rs.getString("Number"));

        return res;
    }
    private InputProperty fillInputProperty(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("propertyID"));
        return res;
    }
    private RegisterOfCounter fillRegisterOfCounter(ResultSet rs) throws SQLException {
        RegisterOfCounter res = new RegisterOfCounter();
        res.setId(rs.getLong("RegID"));
        return res;
    }

    private InputSubServiceContain fillSubServices(ResultSet rs) throws SQLException {
        InputSubServiceContain res = new InputSubServiceContain();
        res.setId(rs.getLong("subServicesID"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {

        StringBuilder sb = new StringBuilder();
        sb.append(" Select distinct   ");
        sb.append(" di.id as DepInputId,ca.id as ContrAgenrId ,di.[Period] ,di.[DateWirring]  ");
        sb.append(" ,di.[DepartmentID] ,di.[InputID] ,ss.[ID] as subServicesID ,rc.Number ,cm.Name as ModelName   ");
        sb.append("     ,prop.ID as propertyID,di.DateStart,di.DateEnd ,agr.id as AgreementID  ");
        sb.append("     ,di.id,typeRemove.id as TypeRemove ,hs.id as hotSupplyId,cs.id as CounterStatusId ,cs.DocRegisterCounterID as RegID,cs.DocUnregisterCounterID as unrID,cs.CounterStatusID as CounterStatus, rc.ID as CounterID ");
        sb.append("        from ");
        sb.append(" (select   max(id) as id,max(period) as period,DepartmentID,InputID,DateWirring,DateEnd,DateStart,hotSupplierID from RegInfDepartsInputs ");
        sb.append(" where Period<=dbo.getCurrentPeriod() ");
        sb.append(" group by DepartmentID,InputID,DateWirring,DateEnd,DateStart,hotSupplierID ");
        sb.append(" ) as di ");
        sb.append(" LEFT JOIN    (select   max(id) as id,max(period) as period,RegInfDepartmentInputsID,CounterID from DocRegisterCounter ");
        sb.append(" where Period<=dbo.getCurrentPeriod() ");
        sb.append(" group by RegInfDepartmentInputsID,CounterID ");
        sb.append(" ) as reg ");
        sb.append(" on di.id=reg.RegInfDepartmentInputsID ");

        sb.append(" left join RefDepartaments as d on ");
        sb.append(" di.DepartmentID = d.id ");
        sb.append(" left join RefContragents as ca on ");
        sb.append(" d.ConraAgentID = ca.id ");
        sb.append(" left join [RegInputSubServiceContains] as ss on ");
        sb.append(" di.id = ss.RegInfDepartmentInputID ");
        sb.append(" left join [RegInfInputProperties] as prop on ");
        sb.append(" prop.id = [dbo].[getDepartmentInputPropertyInPeriod](di.id)   ");
        sb.append(" left join DocInputFactors  as doc ");
        sb.append(" on di.id=doc.RegInfDepartmentInputID ");


        sb.append(" LEFT JOIN    (select   max(id) as id,max(period) as period,ContraAgentID from DocAgreement ");
        sb.append(" where Period<=dbo.getCurrentPeriod() ");
        sb.append(" group by ContraAgentID ");
        sb.append(" ) as agr ");
        sb.append(" on agr.ContraAgentID = ca.id ");
        sb.append(" left join RefContragents as hs on ");
        sb.append(" hs.id = di.hotSupplierID ");
        sb.append(" left join SysCounterStatuses as cs ");
        sb.append(" on cs.CounterID = reg.CounterID ");
        sb.append(" left join RefCounters  as rc ");
        sb.append(" on rc.id=reg.CounterID ");
        sb.append(" left join RefCounterModels as cm ");
        sb.append(" on cm.id = rc.ModelID ");
        sb.append(" left join DocUnregisterCounter as unr on unr.id = cs.DocUnregisterCounterID");
        sb.append(" left join DocUnregisterCounterOperationType as typeRemove ");
        sb.append(" on typeRemove.id = unr.ReasonTypeID ");
        sb.append(" where 1=1 ");

        if (condition.getDepartmentID() != null)
            sb.append(        "  and  d.[id] = "+condition.getDepartmentID());
        if (condition.getContraAgentID() != null)
            sb.append("          and    d.ConraAgentID = "+condition.getContraAgentID());
        if (this.condition.getInputID() != null)
            sb.append("          and di.[InputID] = "+condition.getInputID());
        if (this.condition.getId() != null)
            sb.append("          and di.id = "+this.condition.getId());
        if (this.condition.getHotwaterSupplyID() != null )
            sb.append("           and hs.id = "+this.condition.getHotwaterSupplyID());
        //(sb.toString());
        if (condition.isWithHotWatterSupply()){
            sb.append("   and di.hotSupplierID is not null");
        }
        if (condition.getCounterID() != null)
            sb.append("and reg.CounterID = "+condition.getCounterID());
        return sb.toString();
    }
}
