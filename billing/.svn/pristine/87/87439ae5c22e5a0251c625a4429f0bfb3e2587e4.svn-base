package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 13.11.2014.
 */
public class UpdateInputPropertyQuery extends AbstractModifyQuery<InputProperty> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInfInputProperties]\n" +
                "   SET \n" +
                "       [Norma] = ?\n" +
                "      ,[KoefWatterSupply] = ?\n" +
                "      ,[KoefWatterOut] =?\n" +
                "   WHERE id = ?\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, InputProperty value) throws SQLException {
        st.setDouble(1,value.getNorma());
        st.setDouble(2,value.getKoefWatterSupply());
        st.setDouble(3,value.getKoefWatterOut());
        st.setLong(4,value.getId());
    }
}
