package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Rains;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 01.12.2014.
 */
public class CreateRainsQuery extends AbstractModifyQuery<Rains> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegRains]\n" +
                "           ([departmentID]\n" +
                "           ,[AreaTypeID]\n" +
                "           ,[Area]\n" +
                "           ,[DistributedCoef]\n" +
                "           ,[Period])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,dbo.getCurrentPeriod())";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Rains value) throws SQLException {
        st.setLong(1,value.getDepartment().getId());
        st.setLong(2,value.getAreaType().getId());
        st.setDouble(3,value.getArea());
        if (value.getDistributedCoeficient() ==null)
            st.setNull(4, Types.DOUBLE);
        else
            st.setDouble(4,value.getDistributedCoeficient());
    }
}
