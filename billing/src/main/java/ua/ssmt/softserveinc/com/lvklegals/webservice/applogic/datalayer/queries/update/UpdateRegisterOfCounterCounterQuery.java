package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 18.10.2014.
 */
public class UpdateRegisterOfCounterCounterQuery extends AbstractModifyQuery<RegisterOfCounter> {

    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocRegisterCounter]\n" +
                "   SET [OnDate] =?\n" +
                "      ,[Number] = ?\n" +
                "      ,[MetrCheckDate] = ?\n" +
                "      ,[PlombNumber1] = ?\n" +
                "      ,[PlombNumber2] = ?\n" +
                "      ,[MetrPlomba] = ?\n" +
                "      ,[Period] = dbo.getCurrentPeriod()\n" +
                "      ,[Status] = 3\n" +
                "      ,[Returned] = ?\n" +
                "      ,[Surname] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, RegisterOfCounter value) throws SQLException {
        st.setDate(1,new Date(value.getOnDate().getTime()));
        st.setString(2, value.getNumber());
        st.setDate(3,new Date(value.getMetrCheckDate().getTime()));
        st.setString(4, value.getPlombNumber1());
        st.setString(5,value.getPlombNumber2());
        st.setString(6,value.getMetrPlomba());
        st.setBoolean(7,value.isReturned());
        st.setString(8,value.getSurname());
        st.setLong(9,value.getId());
    }
}
