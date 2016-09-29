package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Input;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 17.09.2014.
 */
public class CreateInputQuery extends AbstractModifyQuery<Input> {
    @Override
    protected String getSQLQuery() {
        return  "INSERT INTO [dbo].[RefInputs]\n" +
                "           ([ParentID]\n" +
                "           ,[AddrID]\n" +
                "           ,[ServiceID]\n" +
                "           ,[InputDiameterID])" +
                "           " +
            " values (?,?,?,?)\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Input value) throws SQLException {
        st.setLong(1,value.getParent().getId());
        st.setLong(2,value.getAddress().getId());
        st.setLong(3,value.getService().getId());
        st.setLong(4,value.getDiameter().getId());

    }
}
