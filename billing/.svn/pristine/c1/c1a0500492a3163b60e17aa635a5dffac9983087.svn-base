package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/12/2015.
 */
public class UpdateStreetQuery extends AbstractModifyQuery<Street>{
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RefStreets]\n" +
                "   SET [Name] =?\n" +
                "      ,[MunicipalID] =?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Street value) throws SQLException {
        st.setString(1,value.getName());
        st.setLong(2,value.getId());
        st.setLong(3,value.getMunicipal().getId());
    }
}
