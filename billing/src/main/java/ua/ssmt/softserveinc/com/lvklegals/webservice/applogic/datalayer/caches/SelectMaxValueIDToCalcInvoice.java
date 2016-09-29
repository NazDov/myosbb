package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 05.01.2016.
 */
public class SelectMaxValueIDToCalcInvoice extends AbstractSelectQuery<Long,Void> {
    public SelectMaxValueIDToCalcInvoice(Void condition) {
        super(condition);
    }

    @Override
    protected Long parseResultSet(ResultSet rs) throws SQLException {
        return rs.getLong("id");
    }

    @Override
    protected String getSQLQuery() {
        return "select max(lastVal) as id  FROM [dbo].[sysCalcInvoiceCounter]";
    }
}
