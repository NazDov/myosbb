package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByConsumingVolume;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 06.11.2014.
 */
public class UpdateAddingConsumingVolumeQuery extends AbstractModifyQuery<AddingByConsumingVolume> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocAddingByConsumeVolume]\n" +
                "   SET [Label] = ?\n" +
                "      ,[Volume] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingByConsumingVolume value) throws SQLException {
        st.setString(1,value.getLabel());
        st.setDouble(2,value.getVolume());
        st.setLong(3,value.getId());
    }
}
