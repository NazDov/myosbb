package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/10/2015.
 */
public class DeleteMunicipalQuery extends AbstractModifyQuery<Municipal> {

    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[RefMunicipals] where id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Municipal value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
