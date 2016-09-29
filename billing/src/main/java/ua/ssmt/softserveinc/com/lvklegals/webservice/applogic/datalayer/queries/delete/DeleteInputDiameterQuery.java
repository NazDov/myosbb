package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class DeleteInputDiameterQuery extends AbstractModifyQuery<InputDiameter> {

    @Override
    protected String getSQLQuery() {
        return  "DELETE FROM [dbo].[RefInputDiameters]\n" +
                "   where   id = ? \n";

    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, InputDiameter value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
