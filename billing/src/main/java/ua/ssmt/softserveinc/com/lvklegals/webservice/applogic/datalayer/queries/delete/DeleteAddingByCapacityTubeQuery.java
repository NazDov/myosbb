package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingByCapacityTube;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.10.2014.
 */
public class DeleteAddingByCapacityTubeQuery extends AbstractModifyQuery<AddingByCapacityTube> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[DocAddingByCapacityTube]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingByCapacityTube value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
