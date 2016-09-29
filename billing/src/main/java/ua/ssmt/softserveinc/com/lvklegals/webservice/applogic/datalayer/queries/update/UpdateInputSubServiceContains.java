package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputSubServiceContain;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 12.11.2014.
 */
public class UpdateInputSubServiceContains extends AbstractModifyQuery<InputSubServiceContain> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[RegInputSubServiceContains]\n" +
                "   SET \n" +
                "      [WatterSupply] = ?\n" +
                "      [WatterOut] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, InputSubServiceContain value) throws SQLException {
        st.setBoolean(1,value.getWatterSupply());
        st.setBoolean(2,value.getWatterOut());
        st.setLong(3,value.getId());
    }
}
