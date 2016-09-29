package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentSubRoute;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 21.10.2014.
 */
public class CreateDepartmentSubRouteQuery extends AbstractModifyQuery<DepartmentSubRoute> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegDepartmentSubRoute]\n" +
                "           ([SubRouteID]\n" +
                "           ,[Period]\n" +
                "           ,[CreateDate]\n" +
                "           ,[DepartmentID])\n" +
                "     VALUES\n" +
                "           (?\n" +
                "           ,dbo.getCurrentPeriod()\n" +
                "           ,GETDATE()\n" +
                "           ,?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentSubRoute value) throws SQLException {
        st.setLong(1,value.getSubRoute().getId());
        st.setLong(2,value.getDepartment().getId());
    }
}
