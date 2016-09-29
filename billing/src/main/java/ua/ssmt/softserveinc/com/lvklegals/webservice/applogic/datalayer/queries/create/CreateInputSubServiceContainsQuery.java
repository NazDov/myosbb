package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12.11.2014.
 */
public class CreateInputSubServiceContainsQuery extends AbstractModifyQuery<DepartmentInput> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegInputSubServiceContains]\n" +
                "           ([RegInfDepartmentInputID]\n" +
                "           ,[Period]\n" +
                "           ,[WatterSupply]\n" +
                "           ,[WatterOut])\n" +
                "     VALUES\n" +
                "           (?\n" +
                "           ,dbo.getCurrentPeriod()\n" +
                "           ,?\n" +
                "           ,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentInput value) throws SQLException {
        st.setLong(1,value.getId());
        st.setBoolean(2,value.getSubServices().getWatterSupply());
        st.setBoolean(3,value.getSubServices().getWatterOut());
    }
}
