package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 12/9/2015.
 */
public class GetCountSaldoinOnDepartmentAnotherPeriodQuery extends AbstractSelectQuery<Long,Void> {
    public GetCountSaldoinOnDepartmentAnotherPeriodQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Long parseResultSet(ResultSet rs) throws SQLException {
        return rs.getLong("cnt");
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select isNull(count(*),0) as cnt from RegSaldoOnDepartment      ");
        sb.append(" where                                                           ");
        sb.append(" Period <> dbo.getCurrentPeriod()                                ");
        sb.append(" and DepartmentAgreementID = "+condition+"                                   ");
        return sb.toString();
    }
}
