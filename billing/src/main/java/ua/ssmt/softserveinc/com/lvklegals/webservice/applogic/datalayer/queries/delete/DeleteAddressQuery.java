package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public class DeleteAddressQuery extends AbstractModifyQuery<Address> {
    @Override
    protected String getSQLQuery() {
        return
                "DELETE FROM [dbo].[RefAddresses]\n" +
                "      WHERE [ID] = ?\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Address value) throws SQLException {
        st.setLong(1,value.getId());
    }
}
