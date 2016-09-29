package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Types;

/**
 * Created by vostap on 05.11.2014.
 */
public class CreateAddingByConsumingVolumeQuery extends AbstractModifyQuery<AddingByConsumingVolume> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[DocAddingByConsumeVolume]\n" +
                "           ([ContraAgentID]\n" +
                "           ,[DepartmentID]\n" +
                "           ,[InputID]\n" +
                "           ,[CounterID]\n" +
                "           ,[Period]\n" +
                "           ,[Label]\n" +
                "           ,[Volume],[DepartmentInputID])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,dbo.getCurrentPeriod(),?,?,?)";

    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingByConsumingVolume value) throws SQLException {
        st.setLong(1,value.getContraAgent().getId());
        st.setLong(2,value.getDepartment().getId());
        st.setLong(3,value.getInput().getId());
        if (value.getCounter() == null || value.getCounter().getId() ==null)
            st.setNull(4,Types.BIGINT);
        else
            st.setLong(4,value.getCounter().getId());
        st.setString(5,value.getLabel());
        st.setDouble(6,value.getVolume());
        st.setLong(7,value.getDepartmentInput().getId());
    }
}
