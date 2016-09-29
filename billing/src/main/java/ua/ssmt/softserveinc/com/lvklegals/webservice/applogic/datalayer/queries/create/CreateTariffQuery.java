package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 21.09.2014.
 */
public class CreateTariffQuery extends AbstractModifyQuery<Tariff> {
    @Override
    protected String getSQLQuery() {
        return "INSERT INTO [dbo].[RegTariff]\n" +
                "           ([SubServiceID]\n" +
                "           ,[CategoryID]\n" +
                "           ,[tarrif]\n" +
                "           ,[dateInAction]\n" +
                "           ,[Period])\n" +
                "     VALUES\n" +
                "           (?,?,?,?,(select top 1 currentPeriod from CurrentPeriod))";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, Tariff value) throws SQLException {
        st.setLong(1,value.getSubService().getId());
        st.setLong(2,value.getCategory().getId());
        st.setDouble(3,value.getTariff());
        st.setDate(4,new Date(value.getDateInAction().getTime()));
    }
}
