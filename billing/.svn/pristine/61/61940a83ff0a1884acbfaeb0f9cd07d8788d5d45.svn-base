package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.addingconsumingvolume;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 30.12.2015.
 */
public class GetAllConsumerVolumeQuery extends AbstractSelectQuery<AddingByConsumingVolume,Void> {
    public GetAllConsumerVolumeQuery(Void condition) {
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
        res.setDepartmentInput(new DepartmentInput(rs.getLong("DepartmentInputID")));
        return res;
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
        sb.append(" and Period = dbo.getCurrentPeriod() ");
        return sb.toString();
    }
}
