package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 24.12.2015.
 */
public class GetAllDocumentsRegisterOfCounterQuery extends AbstractSelectQuery<RegisterOfCounter,Void> {
    public GetAllDocumentsRegisterOfCounterQuery(Void condition) {
        super(condition);
    }
    @Override
    protected RegisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        RegisterOfCounter res = new RegisterOfCounter();
        res.setMetrCheckDate(rs.getDate("MetrCheckDate"));
        res.setNumber(rs.getString("Number"));
        res.setOnDate(rs.getDate("OnDate"));
        res.setPlombNumber1(rs.getString("PlombNumber1"));
        res.setPlombNumber2(rs.getString("PlombNumber2"));
        res.setMetrPlomba(rs.getString("MetrPlomba"));
        res.setRegInfDepartmentInputsID(rs.getLong("RegInfDepartmentInputsID"));
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("Period"));
        //res.setInput(this.fillInput(rs));
        //res.setContraAgent(this.fillContraAgent(rs));
        //res.setDepartment(this.fillDepartment(rs));
        res.setCounter(this.fillCounter(rs));
        res.setReturned(rs.getBoolean("Returned"));
        //res.setSurname(rs.getString("Surname"));
        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmetnID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input i = new Input();
        i.setId(rs.getLong("InputID"));
        return i;
    }

    private Service fillService(ResultSet rs) throws SQLException {
        Service res = new Service();
        res.setId(rs.getLong("ServiceID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select * from DocRegisterCounter as d   ");
        sb.append("         where   ");
        sb.append(" RegInfDepartmentInputsID in   ");
        sb.append(" (select departmentInputID from dbo.getDepartmentInputByID())  ");
        sb.append(" order by d.[OnDate] desc");
        return sb.toString();
    }
}
