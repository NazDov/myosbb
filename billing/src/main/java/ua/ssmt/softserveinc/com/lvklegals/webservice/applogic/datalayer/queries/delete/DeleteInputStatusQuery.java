package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysInputStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 15.11.2014.
 */
public class DeleteInputStatusQuery extends AbstractModifyQuery<SysInputStatus> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[sysInputStatus]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SysInputStatus value) throws SQLException {
        st.setLong(1,value.getId());

    }
}
