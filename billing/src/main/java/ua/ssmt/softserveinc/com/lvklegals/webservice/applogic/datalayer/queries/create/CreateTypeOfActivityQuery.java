package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl.TypeActivity;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by afedorak on 28.09.2016.
 */
public class CreateTypeOfActivityQuery extends AbstractModifyQuery<TypeActivity> {

    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RefKindsOfActivity]\n" +
                "           ([Name]) " +
                "     VALUES " +
                "           (?)";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
       return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, TypeActivity value) throws SQLException {
        st.setString(1,value.getName());
    }

}
