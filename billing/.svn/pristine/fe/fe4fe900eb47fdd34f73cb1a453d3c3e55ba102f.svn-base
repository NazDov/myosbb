package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class UpdateAddressQuery extends AbstractModifyQuery<Address> {
    @Override
    protected String getSQLQuery() {
        return
                "UPDATE [dbo].[RefAddresses]\n" +
                "   SET [StreetID] = ?\n" +
                "      ,[Number] = ?\n" +
                "      ,[Letter] = ?\n" +
                " WHERE [ID] = ?\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Address value) throws SQLException {
        st.setLong(1,value.getStreet().getId());
        st.setString(2,value.getNumber());
        st.setString(3,value.getLetter());
        st.setLong(4,value.getId());
    }
}
