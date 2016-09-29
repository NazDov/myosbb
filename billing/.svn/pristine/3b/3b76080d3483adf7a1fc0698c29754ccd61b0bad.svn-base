package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.ContinueRepairOrCheck;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContinueRepairOrCheckCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 06.11.2014.
 */
public class SearchContinueRepairOrCheckQuery extends AbstractSelectQuery<ContinueRepairOrCheck,ContinueRepairOrCheckCondition> {

    public SearchContinueRepairOrCheckQuery(ContinueRepairOrCheckCondition condition) {
        super(condition);
    }

    @Override
    protected ContinueRepairOrCheck parseResultSet(ResultSet rs) throws SQLException {
        ContinueRepairOrCheck res = new ContinueRepairOrCheck();
        res.setId(rs.getLong("ID"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setCounter(this.fillCounter(rs));
        res.setInput(this.fillInput(rs));
        res.setUnregisterOfCounter(this.fillUnregisterOfCounter(rs));
        res.setNumberAct(rs.getString("NumberAct"));
        res.setDateToReturn(rs.getDate("DateToReturnCounter"));
        res.setSpecefiedDate(rs.getDate("ScepificDate"));
        return res;
    }

    private UnregisterOfCounter fillUnregisterOfCounter(ResultSet rs) throws SQLException {
        UnregisterOfCounter res = new UnregisterOfCounter();
        res.setId(rs.getLong("UnregisterDocID"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
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
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(",[ContraAgentID] ");
        sb.append(",[DepartmentID] ");
        sb.append(",[InputID] ");
        sb.append(",[CounterID]  ");
        sb.append(",[NumberAct]  ");
        sb.append(",[DateToReturnCounter]  ");
        sb.append(",[ScepificDate]  ");
        sb.append(",[Period]  ");
        sb.append(",[UnregisterDocID]  ");
        sb.append("FROM [dbo].[DocContinueRepairOrCheck] where 1=1 ");
        //sb.append("where period = dbo.getCurrentPeriod() ");
        if (condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        return sb.toString();
    }
}
