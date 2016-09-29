package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.AddingCalculationByP3;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 19.11.2014.
 */
public class DeleteAddingCalculationByP3_3Query extends AbstractModifyQuery<AddingCalculationByP3> {
    @Override
    protected String getSQLQuery() {
        return "DELETE FROM [dbo].[AddingCalculationByP3.3]\n" +
                "      WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, AddingCalculationByP3 value) throws SQLException {
        st.setLong(1,value.getID());
    }
}
