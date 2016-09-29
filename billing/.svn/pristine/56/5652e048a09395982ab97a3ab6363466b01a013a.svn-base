package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.SysInputStatus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 15.11.2014.
 */
public class CreateInputStatusQuery extends AbstractModifyQuery<SysInputStatus> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[sysInputStatus]\n" +
                "           ([RegInfDepartmentInputID]\n" +
                "           ,[Period]\n" +
                "           ,[InputStatusID],[StatusesDate])\n" +
                "     VALUES\n" +
                "           (?,dbo.getCurrentPeriod(),?,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, SysInputStatus value) throws SQLException {
        st.setLong(1,value.getDepartmentInput().getId());
        st.setLong(2,value.getStatus());
        st.setDate(3,new Date(value.getStatusesDate().getTime()));

    }
}
