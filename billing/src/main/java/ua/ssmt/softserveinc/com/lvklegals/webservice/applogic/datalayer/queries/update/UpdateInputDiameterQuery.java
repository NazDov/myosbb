package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class UpdateInputDiameterQuery extends AbstractModifyQuery<InputDiameter> {
    @Override
    protected String getSQLQuery() {
        return
                "UPDATE [dbo].[RefInputDiameters]\n" +
                "   SET [Name] =?,[Capacity] = ?\n" +
                        "      ,[userID] = ?  \n" +
                        "      ,[currentDate] = GETDATE()  \n" +
                " WHERE [ID] = ?\n";

    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, InputDiameter value) throws SQLException {
        st.setDouble(1,value.getDiameter());
        st.setDouble(2,value.getCapacity());
        st.setLong(3,value.getUserID());
        st.setLong(4,value.getId());
    }
}
