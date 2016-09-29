package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/12/2015.
 */
public class DeleteStreetQuery extends AbstractModifyQuery<Street> {
    @Override
    protected String getSQLQuery() {
        return "delete [dbo].[RefStreets] where id = ? ";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Street value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
