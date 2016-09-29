package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddingByConsumingVolumeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 06.11.2014.
 */
public class SearchAddingByConsumingVolumeQuery extends AbstractSelectQuery<AddingByConsumingVolume,AddingByConsumingVolumeCondition> {
    public SearchAddingByConsumingVolumeQuery(AddingByConsumingVolumeCondition condition) {
        super(condition);
    }

    @Override
    protected AddingByConsumingVolume parseResultSet(ResultSet rs) throws SQLException {
        AddingByConsumingVolume res = new AddingByConsumingVolume();
        res.setId(rs.getLong("id"));
        res.setLabel(rs.getString("Label"));
        res.setVolume(rs.getDouble("Volume"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setCounter(this.fillCounter(rs));
        res.setPeriod(rs.getDate("Period"));
        res.setDepartmentInput(filldepartmentInput(rs));
        return res;
    }

    private DepartmentInput filldepartmentInput(ResultSet rs) throws SQLException {
        return new DepartmentInput(rs.getLong("DepartmentInputID"));
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
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

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" [id]  ");
        sb.append(" ,[ContraAgentID]  ");
        sb.append(" ,[DepartmentID]   ");
        sb.append(" ,[InputID]   ");
        sb.append(" ,[CounterID]   ");
        sb.append(" ,[Period]    ");
        sb.append(" ,[Label]    ");
        sb.append(" ,[DepartmentInputID]");
        sb.append(" ,[Volume]    ");
        sb.append(" FROM [dbo].[DocAddingByConsumeVolume] where 1=1 ");


        if (this.condition.getId() != null)
            sb.append(" and id = "+condition.getId());
        if (this.condition.getContraAgenntID() != null)
            sb.append(" and ContraAgentID = "+condition.getContraAgenntID());
        if (this.condition.getDepartmentID() != null)
            sb.append(" and DepartmentID  = "+condition.getDepartmentID());
        if (this.condition.getInputID() != null)
            sb.append(" and InputID  = "+condition.getInputID());
        if (this.condition.getPerod() != null)
            sb.append("and Period = "+getDateAsString(condition.getPerod()));
        return sb.toString();
    }
}
