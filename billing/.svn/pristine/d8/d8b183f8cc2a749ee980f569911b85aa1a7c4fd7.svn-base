package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 13.11.2014.
 */
public class CreateInputPropertyQuery extends AbstractModifyQuery<DepartmentInput> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegInfInputProperties]\n" +
                "           ([RegInfDepartmentID]\n" +
                "           ,[Norma]\n" +
                "           ,[KoefWatterSupply]\n" +
                "           ,[KoefWatterOut]\n" +
                "           ,[Period])\n" +
                "     VALUES\n" +
                "           (?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,?\n" +
                "           ,dbo.getCurrentPeriod())\n" +
                "";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, DepartmentInput value) throws SQLException {
        st.setLong(1,value.getId());
        st.setDouble(2,value.getInputProperty().getNorma());
        st.setDouble(3,value.getInputProperty().getKoefWatterSupply());
        st.setDouble(4,value.getInputProperty().getKoefWatterOut());
    }
}
