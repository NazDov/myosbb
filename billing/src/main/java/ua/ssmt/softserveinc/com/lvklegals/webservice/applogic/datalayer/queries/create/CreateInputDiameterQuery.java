package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputDiameter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class CreateInputDiameterQuery extends AbstractModifyQuery<InputDiameter> {
    @Override
    protected String getSQLQuery() {
        return  "INSERT INTO [dbo].[RefInputDiameters]\n" +
                "           ([Name],[Capacity],[userID],[currentDate])\n" +
                "     VALUES\n" +
                "           (?,?,?,(GETDATE()))\n";
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
    }
}
