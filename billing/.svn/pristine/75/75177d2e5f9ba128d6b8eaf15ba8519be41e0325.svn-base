package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnregisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractModifyQuery;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateUnregisterCounterQuery extends AbstractModifyQuery<UnregisterOfCounter> {
    @Override
    protected String getSQLQuery() {
        return "UPDATE [dbo].[DocUnregisterCounter]\n" +
                "   SET [OnDate] = ?\n" +
                "      ,[Number] = ?\n" +
                "      ,[ReasonTypeID] = ?\n" +
                "      ,[FirstMonthForCalc] = ?\n" +
                "      ,[SecondMonthForCalc] = ?\n" +
                "      ,[DateTo] = ?\n" +
                "      ,[NachOrNot] = ?\n" +
                "      ,[Surname] = ?\n" +
                " WHERE id = ?";
    }

    @Override
    protected long getResultModifyQuery(PreparedStatement st) throws SQLException {
        return 0;
    }

    @Override
    protected void fillPreparedStatement(PreparedStatement st, UnregisterOfCounter value) throws SQLException {
        st.setDate(1, new Date(value.getDateActToUnPlomb().getTime()));
        st.setString(2,value.getNumberAct());
        st.setLong(3,value.getOperationType().getId());
        st.setDate(4,new Date(value.getPeriodByMiddleCalculationOnMonth1().getTime()));
        st.setDate(5,new Date(value.getPeriodByMiddleCalculationOnMonth2().getTime()));
        st.setDate(6,new Date(value.getDateToReturnCounter().getTime()));
        st.setBoolean(7,value.getCalculateInPeriodUnregisterCounter());
        st.setString(8,value.getSurname());
        st.setLong(9,value.getId());
    }
}
