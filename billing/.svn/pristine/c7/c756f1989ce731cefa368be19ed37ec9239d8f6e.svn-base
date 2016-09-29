package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterClientServiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by ykhav on 15.06.15.
 */
public class SearchDepartmentInputCounterQuery extends AbstractSelectQuery<CounterClientService,CounterClientServiceCondition> {
    public SearchDepartmentInputCounterQuery(CounterClientServiceCondition condition) {
        super(condition);
    }
    @Override
    protected CounterClientService parseResultSet(ResultSet rs) throws SQLException {
        CounterClientService res = new CounterClientService();
        res.setId(rs.getLong("ID"));
        res.setBeginMonth(rs.getDouble("beginfac"));
        res.setEndFactor(rs.getDouble("endFac"));
        res.setStartFactor(rs.getDouble("beginMonth"));
        res.setDepartment(this.fillDepartament(rs));
        res.setCounter(this.fillCounter(rs));
        res.setInput(this.fillInput(rs));
        res.setRegisterOfCounter(this.fillRegisterOfCounter(rs));
        res.setUnregisterOfCounter(fillUnregisterOfCounter(rs));
        return res;
    }

    private Department fillDepartament (ResultSet rs) throws  SQLException{
        Department res = new Department();
        res.setId(rs.getLong("DepId"));
        res.getProperty().setName(rs.getString("DepartamentName"));
        return  res;
    }
    private Counter fillCounter (ResultSet rs) throws  SQLException{
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        res.setNumber(rs.getString("CounterNumber"));
        res.getModel().setName(rs.getString("ModelName"));
        return res;
    }


    private Input fillInput (ResultSet rs) throws  SQLException{
        Input res = new Input();
        res.setId(rs.getLong("InputId"));
        return  res;
    }

    private RegisterOfCounter fillRegisterOfCounter (ResultSet rs) throws SQLException{
        RegisterOfCounter res = new RegisterOfCounter();
        res.setId(rs.getLong("RegisterId"));
        res.setOnDate(rs.getDate("RegDate"));
        return  res;
    }
    private UnregisterOfCounter fillUnregisterOfCounter (ResultSet rs) throws SQLException{
        UnregisterOfCounter res = new UnregisterOfCounter();
        res.setId(rs.getLong("RegisterId"));
        res.setDateActToUnPlomb(rs.getDate("UnregisterDate"));
        return  res;
    }
    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT distinct   ");
        sb.append(" di.id,dc.Name as DepartamentName, di.[DepartmentID] as DepId ,di.[InputID] as InputId  ,rc.id as RegisterId ,uc.id UnregisterID,uc.OnDate as UnregisterDate, c.id as CounterID,c.Number as CounterNumber,cm.id as CounterModel,  cm.Name as ModelName,kp.ShortName,rc.OnDate  as RegDate,fac.BeginFactor as beginfac,fac.EndFactor as endFac,fac.FactorOnBeginMonth as beginMonth ");
        sb.append(" from  ");
        sb.append("        (select   max(id) as id,max(period) as period,DepartmentID,InputID from RegInfDepartsInputs  ");
        sb.append("                where Period<=dbo.getCurrentPeriod()  ");
        sb.append("                group by DepartmentID,InputID  ");
        sb.append("        ) as di  ");
        sb.append(" left join DocRegisterCounter as rc  ");
        sb.append("  on rc.RegInfDepartmentInputsID=di.id  ");
        sb.append(" left join RefCounters as c  ");
        sb.append(" on rc.CounterID=c.id  ");
        sb.append(" left join RefCounterModels as cm  ");
        sb.append(" on cm.id=c.ModelID  ");
        sb.append(" left join RefDepartaments as d  ");
        sb.append(" on d.id=di.DepartmentID  ");
        sb.append(" left join RegInfDepartamentCharacters as dc  ");
        sb.append(" on dc.DepartmentID = di.DepartmentID  ");
        sb.append(" left join RegInfKontragentProperty as kp  ");
        sb.append(" on kp.ContraAgentID=d.ConraAgentID   ");
        sb.append("   left join DocUnregisterCounter as uc ");
        sb.append("  on uc.InputID = di.InputID   ");
        sb.append(" left join DocInputFactors as  fac ");
        sb.append(" on di.id=fac.RegInfDepartmentInputID ");
        sb.append(" where 1=1   ");

        if (condition.getDepartmentInputID() != null)
            sb.append(" and di.id = "+condition.getDepartmentInputID());
        sb.append(" order by rc.OnDate asc   ");

        return sb.toString();
    }
}
