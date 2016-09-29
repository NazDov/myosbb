package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 02.04.2015.
 */
public class GetDepartmentInputByInputPQuery extends AbstractSelectPreCompileQuery<DepartmentInput,Long> {
    public GetDepartmentInputByInputPQuery(Connection connection, Long condition) {
        super(connection, condition);
    }

    public GetDepartmentInputByInputPQuery(Connection connection) {
        super(connection, -1L);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {
        st.setLong(1,condition);
    }

    @Override
    protected DepartmentInput parseResultSet(ResultSet rs) throws SQLException {
        long s = System.currentTimeMillis();
        DepartmentInput res = new DepartmentInput();
        res.setInput(this.fillInput(rs));
        res.setPeriod(rs.getDate("departmentInputPeriod"));
        res.setId(rs.getLong("departmentInputID"));
        res.setSubServices(this.fillSubSerivce(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setInputProperty(this.fillInputProperies(rs));
        long e = System.currentTimeMillis();
        return res;
    }

    private InputProperty fillInputProperies(ResultSet rs) throws SQLException {
        InputProperty res = new InputProperty();
        res.setId(rs.getLong("inputPropertyID"));
        res.setKoefWatterSupply(rs.getDouble("KoefWatterSupply"));
        res.setKoefWatterOut(rs.getDouble("KoefWatterOut"));
        res.setNorma(rs.getDouble("Norma"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("departmentID"));
        res.setContraAgent(this.fillContraAgent(rs));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent contraAgent = new ContraAgent();
        contraAgent.setId(rs.getLong("contraAgentID"));
        return contraAgent;
    }

    private InputSubServiceContain fillSubSerivce(ResultSet rs) throws SQLException {
        InputSubServiceContain res = new InputSubServiceContain();
        res.setId(rs.getLong("SubServiceID"));
        res.setWatterSupply(rs.getBoolean("watterSupply"));
        res.setWatterOut(rs.getBoolean("WatterOut"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input input = new Input();
        input.setId(rs.getLong("inputID"));
        input.setService(this.fillService(rs));
        return input;
    }

    private Service fillService(ResultSet rs) throws SQLException {
        Service service = new Service();
        service.setId(rs.getLong("ServiceID"));
        service.setName(rs.getString("ServiceName"));
        return service;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();

        sb.append("  select  ");
        sb.append("  di.id as departmentInputID,  ");
        sb.append("  di.period as departmentInputPeriod,  ");
        sb.append("  di.DateStart as dateStart,   ");
        sb.append("          di.DateEnd as dateEnd,  ");

        sb.append("  i.id as inputID,   ");
        sb.append("          s.id as ServiceID,   ");
        sb.append("  s.Name as ServiceName,   ");

        sb.append("  d.id as departmentID,   ");
        sb.append("  d.ConraAgentID as contraAgentID ,  ");


        sb.append("  ss.id as SubServiceID,   ");
        sb.append("          ss.WatterOut as WatterOut,   ");
        sb.append("  ss.WatterSupply as watterSupply,   ");

        sb.append("  inputProperties.inputPropertyID,    ");
        sb.append("          inputProperties.KoefWatterOut,   ");
        sb.append("          inputProperties.KoefWatterSupply,   ");
        sb.append("          inputProperties.Norma   ");

        sb.append("          from   ");
        sb.append("  (select max(id) as id, InputID, max (Period) as period from RegInfDepartsInputs  ");
        sb.append("  where Period<=dbo.getCurrentPeriod()   ");
        sb.append("  group by InputID, Period) as tmp     ");
        sb.append("  left join RegInfDepartsInputs as di on    ");
        sb.append("  tmp.id = di.id     ");
        sb.append("  left join RefInputs as i on   ");
        sb.append("  i.id = di.id     ");
        sb.append("  left join RefServices as s on   ");
        sb.append("   s.id = i.ServiceID    ");

        sb.append("    left join   ");
        sb.append("   (   ");
        sb.append("           select RegInfDepartmentInputID, max(period) as period,max(id) as id from [RegInputSubServiceContains]    ");
        sb.append("   where    ");
        sb.append("   Period <= dbo.getCurrentPeriod()   ");
        sb.append("    group by RegInfDepartmentInputID    ");

        sb.append("   ) as sstmp    ");
        sb.append("    on    ");
        sb.append("   di.id = sstmp.RegInfDepartmentInputID   ");
        sb.append("   left join [RegInputSubServiceContains] as ss on   ");
        sb.append("   sstmp.id = ss.id   ");

        sb.append("  left join RefDepartaments as d on   ");
        sb.append("  di.DepartmentID = d.id    ");

        sb.append("  left join (select    ");
        sb.append("  inputProperties.id as inputPropertyID,   ");
        sb.append("          inputProperties.KoefWatterOut,    ");
        sb.append("          inputProperties.KoefWatterSupply,   ");
        sb.append("          inputProperties.Norma,    ");
        sb.append("          inputProperties.RegInfDepartmentID    ");

        sb.append("  from (    ");

        sb.append("          select RegInfDepartmentID, max(Period)as period, max(id) as id    ");
        sb.append("          FROM [RegInfInputProperties]     ");
        sb.append("          group by RegInfDepartmentID  ) as tmpInputProperties    ");
        sb.append("  left join [RegInfInputProperties] as inputProperties on    ");
        sb.append("  tmpInputProperties.id = inputProperties.id ) as inputProperties on    ");
        sb.append("  di.id = inputProperties.RegInfDepartmentID    ");
        sb.append(" where di.inputID = ?");
        return sb.toString();
    }
}
