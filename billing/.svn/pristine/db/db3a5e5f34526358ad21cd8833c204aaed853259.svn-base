package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 18.09.2014.
 */
public class UpdateInputQuery extends AbstractModifyQuery<Input> {
    @Override
    protected String getSQLQuery() {
        return  "UPDATE [dbo].[RefInputs]\n" +
                "   SET " +
                "       [InputDiameterID] = ?\n" +
                " WHERE [id] = ?\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Input value) throws SQLException {
        st.setLong(1,value.getDiameter().getId());
        st.setLong(2,value.getId());
    }
}
