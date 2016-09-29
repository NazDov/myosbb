package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Counter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCountersReason;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfCounterCondition;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchCorrectionOfCounterQuery extends AbstractSelectQuery<CorrectionOfCounter,CorrectionOfCounterCondition> {
    public SearchCorrectionOfCounterQuery(CorrectionOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected CorrectionOfCounter parseResultSet(ResultSet rs) throws SQLException {
        CorrectionOfCounter res = new CorrectionOfCounter();
        res.setCounter(this.fillCounter(rs));
        res.setInputFactor(this.fillInputFactor(rs));
        res.setInput(this.fillInput(rs));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setLabel(rs.getString("Label"));
        res.setReason(this.fillReason(rs));
        res.setId(rs.getLong("docid"));
        res.setReasonDate(rs.getDate("reasonDate"));
        res.setReasonNumber(rs.getString("reasonNumber"));
        return res;
    }

    private CorrectionOfCountersReason fillReason(ResultSet rs) throws SQLException {
        CorrectionOfCountersReason res = new CorrectionOfCountersReason();
        res.setId(rs.getLong("reasonID"));
        res.setName(rs.getString("reasonName"));
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

    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }

    private InputFactor fillInputFactor(ResultSet rs) throws SQLException {
        InputFactor res = new InputFactor();
        res.setId(rs.getLong("factorID"));
        res.setWiringID(rs.getLong("regInfDepartmentInputID"));
        res.setBeginFactor(rs.getInt("BeginFactor"));
        res.setEndFactor(rs.getInt("EndFactor"));
        res.setVolume(res.getEndFactor() - res.getBeginFactor());
        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top  "+ Options.getMaxCountToSelectRow()+" doc.[id] as docid   ");
        sb.append(" ,doc.[ContraAgentID]  ");
        sb.append(" ,doc.[DepartmentID]  ");
        sb.append(" ,doc.[CounterID]  ");
        sb.append(" ,doc.[InputID]  ");
        sb.append(" ,doc.[Label]   ");
        sb.append(" ,f.BeginFactor  ");
        sb.append("        ,f.EndFactor  ");
        sb.append("        ,f.regInfDepartmentInputID  ");
        sb.append("  ,f.id as factorID ");

        sb.append(" ,r.id as reasonID ");
        sb.append(" ,r.Name as reasonName ");
        sb.append(" ,doc.ReasonDate ");
        sb.append(" ,doc.ReasonNumber ");

        sb.append(" FROM [dbo].[DocCorrectionCounters] as doc  ");
        sb.append(" left join  DocInputFactors as f on   ");
        sb.append(" doc.id = f.CorrectionDocumentID   ");
        sb.append(" left join RefCorrectionReasons as r on  ");
        sb.append("  doc.ReasonID = r.id  ");
        sb.append(" where 1=1 ");
        if (condition.getContraAgentID() != null)
            sb.append(" and ContraAgentID ="+condition.getContraAgentID());
        if (condition.getDepartmentID() != null)
            sb.append(" and DepartmentID = "+condition.getDepartmentID());
        if (condition.getPeriod() != null)
            sb.append(" and doc.Period = '"+new Fillers().getDateAsString(condition.getPeriod())+"'");
        if (condition.getCounterID() != null)
            sb.append(" and doc.CounterID = "+condition.getCounterID());
        if (condition.getId() != null)
            sb.append(" and doc.id = "+condition.getId());
        return sb.toString();

    }
}
