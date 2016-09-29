package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.DepartmentInputInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.AbstractSelectPreCompileQuery;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 25.04.2015.
 */
public class GetAllDepartmentInputPQuery extends AbstractSelectPreCompileQuery<DepartmentInputInvoice,Long> {
    public GetAllDepartmentInputPQuery(Connection connection) {
        super(connection, null);
    }

    @Override
    protected void fillStatement(PreparedStatement st) throws SQLException {

    }

    @Override
    protected DepartmentInputInvoice parseResultSet(ResultSet rs) throws SQLException {
        DepartmentInputInvoice res = new DepartmentInputInvoice();
        res.setContraAgentID(rs.getLong("contraAgentID"));
        res.setDateEnd(rs.getDate("dateEnd"));
        res.setDateStart(rs.getDate("dateStart"));
        res.setDepartmentID(rs.getLong("departmentID"));
        res.setDepartmentInputID(rs.getLong("departmentInputID"));
        res.setDepartmentInputPeriod(rs.getDate("departmentInputPeriod"));
        res.setInputID(rs.getLong("inputID"));
        res.setInputPropertyID(rs.getLong("inputPropertyID"));
        res.setKoefWatterSupply(rs.getFloat("KoefWatterSupply"));
        res.setKoefWatterOut(rs.getFloat("KoefWatterOut"));
        res.setNorma(rs.getDouble("Norma"));

        res.setServiceID(rs.getLong("ServiceID"));
        res.setServiceName(rs.getString("ServiceName"));
        res.setSubServiceID(rs.getLong("SubServiceID"));
        res.setTariffCategory(rs.getLong("tariffCategory"));

        res.setWatterOut(rs.getBoolean("WatterOut"));
        res.setWatterSupply(rs.getBoolean("watterSupply"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append("  select  ");
        sb.append("  departmentInputID,  ");
        sb.append("  departmentInputPeriod,  ");
        sb.append("  dateStart,   ");
        sb.append("  dateEnd,  ");
        sb.append("  inputID,   ");
        sb.append("  ServiceID,   ");
        sb.append("  ServiceName,   ");
        sb.append("  departmentID,   ");
        sb.append("  contraAgentID ,  ");
        sb.append("  SubServiceID,   ");
        sb.append("  WatterOut,   ");
        sb.append("  watterSupply,   ");
        sb.append("  inputPropertyID,    ");
        sb.append("  KoefWatterOut,   ");
        sb.append("  KoefWatterSupply,   ");
        sb.append("  Norma,   ");
        sb.append("  tariffCategory    ");
        sb.append("  from   getDepartmentInputByID() where 1=1 ");
        if (condition != null)
            sb.append("and departmentInputID = "+condition);
        return sb.toString();

    }
}
