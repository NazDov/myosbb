package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.DepartmentInputInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 19.01.2016.
 */
public class AllDepartmentInputQuery extends AbstractSelectQuery<DepartmentInputInvoice,Void> {

    public AllDepartmentInputQuery(Void condition) {
        super(condition);
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
        res.setKoefWatterSupply(rs.getDouble("KoefWatterSupply"));
        res.setKoefWatterOut(rs.getDouble("KoefWatterOut"));
        res.setNorma(rs.getDouble("Norma"));

        res.setServiceID(rs.getLong("ServiceID"));
        res.setServiceName(rs.getString("ServiceName"));
        res.setSubServiceID(rs.getLong("SubServiceID"));
        res.setTariffCategory(rs.getLong("tariffCategory"));

        res.setWatterOut(rs.getBoolean("WatterOut"));
        res.setWatterSupply(rs.getBoolean("watterSupply"));
        res.setInputParentID(rs.getLong("inputParentID"));
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
        sb.append("  tariffCategory,    ");
        sb.append("  inputParentID ");
        sb.append("  from   getDepartmentInputByID() where 1=1 ");

        return sb.toString();

    }
}
