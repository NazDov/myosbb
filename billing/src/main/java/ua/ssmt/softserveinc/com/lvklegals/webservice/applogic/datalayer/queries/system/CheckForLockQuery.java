package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.system;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 04.04.2015.
 */
public class CheckForLockQuery extends AbstractSelectQuery<Boolean,Void> {
    public CheckForLockQuery(Void condition) {
        super(condition);
    }

    @Override
    protected Boolean parseResultSet(ResultSet rs) throws SQLException {
        return rs.getBoolean("Status");
    }

    @Override
    protected String getSQLQuery() {
        return "select top 1 Status from [SysLock]";
    }
}
