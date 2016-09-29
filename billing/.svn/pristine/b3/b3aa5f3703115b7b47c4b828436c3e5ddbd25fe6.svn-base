package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 8/10/2015.
 */
public class CreateMunicipalQuery extends AbstractModifyQuery<Municipal> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RefMunicipals]\n" +
                "           ([Name])\n" +
                "     VALUES\n" +
                "           (?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Municipal value) throws SQLException {
        st.setString(1,value.getName());
    }
}
