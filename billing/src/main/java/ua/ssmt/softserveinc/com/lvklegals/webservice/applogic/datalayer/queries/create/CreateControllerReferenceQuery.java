package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ControllersReferense;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 22.09.2014.
 */
public class CreateControllerReferenceQuery extends AbstractModifyQuery<ControllersReferense> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [RefControllers]\n" +
                "           ([Name])\n" +
                "     VALUES\n" +
                "           (?)\n";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return this.getInsertedID(st);
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, ControllersReferense value) throws SQLException {
        st.setString(1,value.getName());

    }
}
