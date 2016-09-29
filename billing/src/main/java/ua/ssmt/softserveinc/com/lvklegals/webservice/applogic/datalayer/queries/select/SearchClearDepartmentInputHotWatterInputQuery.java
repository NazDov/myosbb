package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/8/2015.
 */
public class SearchClearDepartmentInputHotWatterInputQuery extends AbstractSelectQuery<DepartmentInput,DepartmentInputCondition> {

    public SearchClearDepartmentInputHotWatterInputQuery(DepartmentInputCondition condition) {
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
       // res.setTypeRemove(rs.getString("TypeName"));
        return res;
    }

    private InputProperty fillInputProperty(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("propertyID"));
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
        sb.append(" SELECT distinct top "+ Options.getMaxCountToSelectRow()+" di.[id]\n ");
        sb.append(        "      ,max(di.[Period] )as period \n ");
        sb.append(        "      ,di.[DateWirring] \n ");
        sb.append(        "      ,di.[DepartmentID] \n ");
        sb.append(        "      ,di.[InputID] \n ");
        sb.append(        "      ,ss.[ID] as subServicesID \n ");
        sb.append(        "      ,rc.Number ");
        sb.append(        "      ,cm.Name as ModelName ");
        sb.append(        "      ,prop.ID as propertyID,DateStart,DateEnd ");
        sb.append(        "      ,typ.Name as TypeName ");
        sb.append(        "      ,input.ServiceID ");
        sb.append(        "  FROM [dbo].[RegInfDepartsInputs] as di \n ");
        sb.append(        "  left join RefDepartaments as d on \n ");
        sb.append(        "  di.DepartmentID = d.id \n ");
        sb.append(        "  left join RefContragents as ca on ");
        sb.append(        "  d.ConraAgentID = ca.id ");
        sb.append(        "  left join [RegInputSubServiceContains] as ss on ");
        sb.append(        "  di.id = ss.RegInfDepartmentInputID ");
        sb.append(        "  left join [RegInfInputProperties] as prop on");
        sb.append(        "  di.id = prop.RegInfDepartmentID ");
        sb.append(        "  left join DocInputFactors  as doc ");
        sb.append(        "  on di.id=doc.RegInfDepartmentInputID ");
        sb.append(        "  left join RefCounters as rc ");
        sb.append(        "  on rc.id=doc.CounterID ");
        sb.append(        "  left join RefCounterModels as cm ");
        sb.append(        "  on cm.id = rc.ModelID ");
        sb.append(        "  left join DocUnregisterCounter as uc ");
        sb.append(        "  on doc.UnregisterDocumentID = uc.id ");
        sb.append(        "  left join DocUnregisterCounterOperationType as typ ");
        sb.append(        "  on typ.id = uc.ReasonTypeID  ");
        sb.append(        " left join RefInputs as input ");
        sb.append(        " on input.id=di.InputID ");
        sb.append(        "   where di.Period <= dbo.getCurrentPeriod()and input.ServiceID = 2 \n ");
        if (condition.getDepartmentID() != null)
            sb.append(        "  and  di.DepartmentID = "+condition.getDepartmentID());
        if (condition.getContraAgentID() != null)
            sb.append("          and    d.ConraAgentID = "+condition.getContraAgentID());
        if (this.condition.getInputID() != null)
            sb.append("          and di.[InputID] = "+condition.getInputID());
        if (this.condition.getId() != null)
            sb.append("          and di.id = "+this.condition.getId());
        sb.append("    group by di.id, di.[DateWirring],di.[DepartmentID] ,di.[InputID] ,ss.[ID] ,rc.Number ,cm.Name ,prop.ID ,DateStart,DateEnd ,typ.Name ,input.ServiceID  ");
        sb.append(" order by period desc");
        ////(sb.toString());
        return sb.toString();
    }
}
