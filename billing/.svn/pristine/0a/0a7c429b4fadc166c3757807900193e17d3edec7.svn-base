package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.invoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 6/5/2015.
 */
public class SearchDepartmentInputQueryForInvoice extends AbstractSelectQuery<DepartmentInput,DepartmentInputCondition> {

    public SearchDepartmentInputQueryForInvoice(DepartmentInputCondition condition) {
        super(condition);
    }

    @Override
    protected DepartmentInput parseResultSet(ResultSet rs) throws SQLException {
        DepartmentInput res = new DepartmentInput();
        res.setId(rs.getLong("id"));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setDateWhirring(rs.getDate("DateWirring"));
        res.setStartDate(rs.getDate("DateStart"));
        res.setEndDate(rs.getDate("DateEnd"));
        res.setPeriod(rs.getDate("Period"));
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
        sb.append(" select * from   ");
        sb.append("         (select max(period) as period ,max(id) as id,DepartmentID,InputID from RegInfDepartsInputs ");
        sb.append("                 group by DepartmentID,InputID) as tmp ");
        sb.append("  left join RegInfDepartsInputs as di on ");
        sb.append("  tmp.id = di.id  where 1=1");

        if (condition.getDepartmentID() != null)
            sb.append(        "  and  di.DepartmentID = "+condition.getDepartmentID());
        if (condition.getContraAgentID() != null)
            sb.append("          and    d.ConraAgentID = "+condition.getContraAgentID());
        if (this.condition.getInputID() != null)
            sb.append("          and di.[InputID] = "+condition.getInputID());
        if (this.condition.getId() != null)
            sb.append("          and di.id = "+this.condition.getId());
        sb.append(" order by di.Period desc");

        return sb.toString();
    }
}
